import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import { EdiDomNode, EdiDomNodeType } from './EdiDomTypes'

/** An EDIFACT UNH message or an X12 ST transaction. */
export class EdiDomMessage extends EdiDomAbstractNode<EdiDomNodeType.Message> {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Message
    this.segments = []
  }

  /** The header of this message. */
  protected _header: EdiDomSegment<'UNH'|'ST'>
  /** The segments contained in this message. */
  segments: EdiDomSegment[]
  /** The root of this instance. */
  root: EdiDomRoot
  /** The trailer of this message. */
  protected _trailer: EdiDomSegment<'UNT'|'SE'>

  /** The header of this group. */
  get header (): EdiDomSegment<'UNH'|'ST'> {
    return this._header
  }

  /** The header of this group. */
  set header (_header: EdiDomSegment<'UNH'|'ST'>) {
    _header.parent = this

    for (const node of _header.walk()) {
      node.root = this.root
    }

    this._header = _header
  }

  /** The trailer of this group. */
  get trailer (): EdiDomSegment<'UNT'|'SE'> {
    return this._trailer
  }

  /** The trailer of this group. */
  set trailer (_trailer: EdiDomSegment<'UNT'|'SE'>) {
    _trailer.parent = this

    for (const node of _trailer.walk()) {
      node.root = this.root
    }

    this._trailer = _trailer
  }

  /** The read-only text representation of this node. */
  get text (): string {
    return this.header.text +
      this.segments
        .map(segment => segment.text)
        .join('') +
      this.trailer.text
  }

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
    if (typeof this.header === 'object') {
      for (const node of this.header.walk()) {
        yield node
      }
    }

    for (const segment of this.segments) {
      for (const node of segment.walk()) {
        yield node
      }
    }

    if (typeof this.trailer === 'object') {
      for (const node of this.trailer.walk()) {
        yield node
      }
    }
  }
}
