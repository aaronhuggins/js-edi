import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomComponent } from './EdiDomComponent'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomValue } from './EdiDomValue'
import type { EdiDomNode } from './EdiDomTypes'

/** Element types supported for detection. */
export type EdiDomElementType = 'repeated' | 'component' | 'value'
export type ElementChild = EdiDomComponent | EdiDomValue

/** An element containing one or more repeated elements, a component, or a value. */
export class EdiDomElement<T extends ElementChild = any> extends EdiDomAbstractNode {
  constructor (type?: EdiDomElementType) {
    super()
    this.nodeType = EdiDomNodeType.Element
    this.type = type ?? 'value'
    this.elements = []
  }

  nodeType: EdiDomNodeType.Element
  /** The type of element: repeated, component, or value. */
  type: EdiDomElementType
  /** Used if this element represents a set of repeated elements. */
  elements: EdiDomElement[]
  /** The value of this element. */
  value: T
  /** The root of this instance. */
  root: EdiDomRoot
  /** The parent of this instance. */
  parent: EdiDomSegment | EdiDomElement

  /** The read-only text representation of this node. */
  get text (): string {
    if (this.elements.length > 0) {
      return this.root.options.dataSeparator + this.elements
        .map(element => element.text)
        .join(this.root.options.repititionSeparator)
    }

    if (typeof this.value === 'object') {
      if (this.parent.nodeType === EdiDomNodeType.Element && this.parent.type === 'repeated') {
        return this.value.text
      }

      return this.root.options.dataSeparator + this.value.text
    }
  }

  /** Add an element, component, or value to this node. */
  addChildNode (child: EdiDomElement | T): void {
    const setRels = (): void => {
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }
    }

    switch (child.nodeType) {
      case EdiDomNodeType.Component:
        this.type = 'component'
        this.value = child

        setRels()
        break
      case EdiDomNodeType.Element:
        this.type = 'repeated'
        this.elements.push(child)

        setRels()
        break
      case EdiDomNodeType.Value:
        this.type = 'value'
        this.value = child

        setRels()
        break
    }
  }

  /** Get the child value or optionally a child repeated element at the first or a given position. */
  getChildNode (index?: number): EdiDomElement | T {
    if (typeof index === 'number') {
      return this.elements[index]
    } else if (this.elements.length === 1) {
      return this.elements[0]
    }

    return this.value
  }

  /** Remove the child value or a child repeated element from this element. */
  removeChildNode (child?: EdiDomElement | T): void {
    if (typeof child === 'undefined') {
      if (this.elements.length === 1) {
        this.elements[0].parent = undefined

        for (const node of this.elements[0].walk()) {
          node.root = undefined
        }

        this.elements.splice(0, 1)
      } else if (typeof this.value === 'object') {
        this.value.parent = undefined

        for (const node of this.value.walk()) {
          node.root = undefined
        }

        this.value = undefined
      }
    } else if (child === this.value) {
      child.parent = undefined

      for (const node of child.walk()) {
        node.root = undefined
      }

      this.value = undefined
    } else if (child.nodeType === EdiDomNodeType.Element) {
      const index = this.elements.indexOf(child)

      if (index > -1) {
        child.parent = undefined

        for (const node of child.walk()) {
          node.root = undefined
        }

        this.elements.splice(index, 1)
      }
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this

    for (const element of this.elements) {
      for (const node of element.walk()) {
        yield node
      }
    }

    if (typeof this.value !== 'undefined') yield this.value
  }

  toJSON (): Partial<this> {
    const result = super.toJSON()

    if (Array.isArray(result.elements) && result.elements.length === 0) delete result.elements

    return result
  }
}

EdiDomGlobal.Element = EdiDomElement
