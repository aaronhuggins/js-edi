import type { EdiDomElement } from './EdiDomElement'
import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'
import type { EdiDomRoot } from './EdiDomRoot'

/** The segment of an EDI document. */
export class EdiDomSegment<T extends string = string> extends EdiDomNode<EdiDomNodeType.Segment> {
  constructor (tag?: T) {
    super()
    this.nodeType = EdiDomNodeType.Segment
    this.tag = tag ?? ('' as T)
    this.elements = []
  }

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

  * walk (): Generator<EdiDomNode> {
    yield this

    for (const element of this.elements) {
      for (const node of element.walk()) {
        yield node
      }
    }
  }
}
