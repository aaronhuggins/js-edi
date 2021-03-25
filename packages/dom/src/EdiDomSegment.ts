import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomNode } from './EdiDomTypes'
import type { EdiDomInterchange } from './EdiDomInterchange'
import type { EdiDomGroup } from './EdiDomGroup'
import type { EdiDomMessage } from './EdiDomMessage'

/** The segment of an EDI document. */
export class EdiDomSegment<T extends string = string> extends EdiDomAbstractNode {
  constructor (tag?: T) {
    super()
    this.nodeType = EdiDomNodeType.Segment
    this.tag = tag ?? ('' as T)
    this.elements = []
  }

  nodeType: EdiDomNodeType.Segment
  parent: EdiDomInterchange | EdiDomGroup | EdiDomMessage
  /** The tag for this node. */
  tag: T
  /** The child elements of this node. */
  elements: EdiDomElement[]
  /** The root of this instance. */
  root: EdiDomRoot

  /** The read-only text representation of this node. */
  get text (): string {
    const contents = this.tag + this.elements
      .map(element => element.text)
      .join('') +
      this.root.options.segmentTerminator

    if (typeof this.root.options.endOfLine === 'string') {
      return contents + this.root.options.endOfLine
    }

    return contents
  }

  /** Add a child element to this segment, optionally at a given position. */
  addChildNode (child: EdiDomElement, position?: string | number): void {
    if (child.nodeType === EdiDomNodeType.Element) {
      let index = -1
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }

      switch (typeof position) {
        case 'number':
          index = position - 1
          break
        case 'string':
          index = parseFloat(position) - 1
          if (Number.isNaN(index)) index = -1
          break
      }

      if (index > -1) {
        this.elements[index] = child

        for (let i = 0; i < index; i += 1) {
          if (typeof this.elements[i] === 'undefined') {
            this.elements[i] = new EdiDomGlobal.Element()
            this.elements[i].parent = this
            this.elements[i].root = this.root
          }
        }
      } else {
        this.elements.push(child)
      }
    }
  }

  /** Get an element at a 1-based position. */
  getChildNode (position: string | number): EdiDomElement {
    const index = typeof position === 'string' ? parseFloat(position) - 1 : position - 1

    return this.elements[index]
  }

  /** Remove an element by instance or 1-based position from this segment. */
  removeChildNode (child: EdiDomElement): void
  removeChildNode (position: string | number): void
  removeChildNode (child: EdiDomElement | string | number): void {
    let element: EdiDomElement

    if (typeof child === 'object') {
      if (child.nodeType === EdiDomNodeType.Element) {
        const index = this.elements.indexOf(child)
        element = child

        if (index > -1) this.elements.splice(index, 1)
      }
    } else {
      const index = typeof child === 'string' ? parseFloat(child) - 1 : child - 1

      if (index > -1) {
        element = this.elements[index]

        this.elements.splice(index, 1)
      }
    }

    if (typeof element !== 'undefined') {
      element.parent = undefined

      for (const node of element.walk()) {
        node.root = undefined
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
  }
}

EdiDomGlobal.Segment = EdiDomSegment
