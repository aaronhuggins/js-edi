import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiJsonComponent } from './EdiDomComponent'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiJsonRepeated } from './EdiDomRepeated'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomNode, ElementChild } from './EdiDomTypes'
import type { EdiJsonValue } from './EdiDomValue'

export interface EdiJsonElement {
  value: EdiJsonComponent | EdiJsonRepeated | EdiJsonValue
}

/** An element containing one or more repeated elements, a component, or a value. */
export class EdiDomElement<T extends ElementChild = any> extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Element
  }

  nodeType: EdiDomNodeType.Element
  /** The value of this element. */
  value: T
  /** The root of this instance. */
  root: EdiDomRoot
  /** The parent of this instance. */
  parent: EdiDomSegment | EdiDomElement

  get innerEDI (): string {
    return typeof this.value === 'object' ? this.value.text : ''
  }

  get outerEDI (): string {
    return this.root.options.dataSeparator + this.innerEDI
  }

  /** The read-only text representation of this node. */
  get text (): string {
    return this.outerEDI
  }

  get textContent (): string {
    if (typeof this.value === 'object') {
      const innerContent = this.value.textContent.split('\n')

      return '  ' + innerContent.join('\n  ')
    }

    return ''
  }

  /** Add an element, component, or value to this node. */
  addChildNode (child: T): void {
    switch (child.nodeType) {
      case EdiDomNodeType.Component:
      case EdiDomNodeType.Repeated:
      case EdiDomNodeType.Value:
        relate(child, this, this.root)
        this.value = child
        break
    }
  }

  /** Get the child value or optionally a child repeated element at the first or a given position. */
  getChildNode (): T {
    return this.value
  }

  /** Remove the child value or a child repeated element from this element. */
  removeChildNode (): void {
    if (typeof this.value === 'object') {
      unrelate(this.value)
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this

    if (typeof this.value === 'object') {
      for (const node of this.value.walk()) {
        yield node
      }
    }
  }

  toJSON (): EdiJsonElement {
    return {
      value: this.value.toJSON()
    }
  }

  fromJSON (input: EdiJsonElement): void {
    if ('repeats' in input.value) {
      const domRepeated = new EdiDomGlobal.Repeated()

      domRepeated.fromJSON(input.value)

      this.value = domRepeated as any
    } else if ('values' in input.value) {
      const domComponent = new EdiDomGlobal.Component()

      domComponent.fromJSON(input.value)

      this.value = domComponent as any
    } else {
      const domValue = new EdiDomGlobal.Value()

      domValue.fromJSON(input.value)

      this.value = domValue as any
    }

    relate(this.value, this, this.root)
  }
}

EdiDomGlobal.Element = EdiDomElement
