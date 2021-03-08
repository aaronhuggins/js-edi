import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'
import { EdiDomSegment } from './EdiDomSegment'

/** An EDIFACT UNH message or an X12 ST transaction. */
export class EdiDomMessage extends EdiDomNode<EdiDomNodeType.Message> {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Message
    this.header = new EdiDomSegment()
    this.segments = []
    this.trailer = new EdiDomSegment()
  }

  /** The header of this message. */
  header: EdiDomSegment<'UNH'|'ST'>
  /** The segments contained in this message. */
  segments: EdiDomSegment[]
  /** The trailer of this message. */
  trailer: EdiDomSegment<'UNT'|'SE'>

  /** Add a segment to this message. */
  addChildNode (child: EdiDomSegment): void {
    if (child.nodeType === EdiDomNodeType.Segment) {
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }

      this.segments.push(child)
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this
    if (typeof this.header !== 'undefined') yield this.header

    for (const segment of this.segments) {
      for (const node of segment.walk()) {
        yield node
      }
    }

    if (typeof this.trailer !== 'undefined') yield this.trailer
  }
}
