import { EdiDomElement } from './EdiDomElement'
import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'

/** The segment of an EDI document. */
export class EdiDomSegment<T extends string = string> extends EdiDomNode<EdiDomNodeType.Segment> {
  constructor (tag?: T) {
    super()
    this.nodeType = EdiDomNodeType.Segment
    this.tag = tag ?? ('' as T)
    this.elements = []
  }

  tag: T
  elements: EdiDomElement[]

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
