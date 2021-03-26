import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomNode, ElementChild } from './EdiDomTypes'

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

  /** The read-only text representation of this node. */
  get text (): string {
    return this.root.options.dataSeparator + (typeof this.value === 'object' ? this.value.text : '')
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
}

EdiDomGlobal.Element = EdiDomElement
