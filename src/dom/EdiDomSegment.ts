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
      this.elements.push(child)
    }
  }
}
