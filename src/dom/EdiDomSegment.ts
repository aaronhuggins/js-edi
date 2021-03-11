import type { EdiDomElement } from './EdiDomElement'
import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import type { EdiDomRoot } from './EdiDomRoot'
import { EdiDomNode, EdiDomNodeType } from './EdiDomTypes'
import type { EdiDomInterchange } from './EdiDomInterchange'
import type { EdiDomGroup } from './EdiDomGroup'
import type { EdiDomMessage } from './EdiDomMessage'
import type { EdiDomHierarchical } from './EdiDomHierarchical'

/** The segment of an EDI document. */
export class EdiDomSegment<T extends string = string> extends EdiDomAbstractNode {
  constructor (tag?: T) {
    super()
    this.nodeType = EdiDomNodeType.Segment
    this.tag = tag ?? ('' as T)
    this.elements = []
  }

  nodeType: EdiDomNodeType.Segment
  parent: EdiDomInterchange | EdiDomGroup | EdiDomMessage | EdiDomHierarchical
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

  addChildNode (child: EdiDomElement): void {
    if (child.nodeType === EdiDomNodeType.Element) {
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }

      this.elements.push(child)
    }
  }

  /** Get an element at a 1-based position. */
  getChildNode (position: string | number): EdiDomElement {
    const index = typeof position === 'string' ? parseFloat(position) - 1 : position - 1

    return this.elements[index]
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
