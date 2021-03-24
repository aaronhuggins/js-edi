import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomGroup } from './EdiDomGroup'
import type { EdiDomInterchange } from './EdiDomInterchange'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomNode } from './EdiDomTypes'

/** An EDIFACT UNH message or an X12 ST transaction. */
export class EdiDomMessage extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Message
    this.segments = []
  }

  nodeType: EdiDomNodeType.Message
  parent: EdiDomInterchange | EdiDomGroup
  /** The header of this message. */
  protected _header: EdiDomSegment<'UNH'|'ST'>
  /** The segments contained in this message. */
  segments: EdiDomSegment[]
  /** The root of this instance. */
  root: EdiDomRoot
  /** The trailer of this message. */
  protected _trailer: EdiDomSegment<'UNT'|'SE'>

  /** The header of this message. */
  get header (): EdiDomSegment<'UNH'|'ST'> {
    return this._header
  }

  /** The header of this message. */
  set header (_header: EdiDomSegment<'UNH'|'ST'>) {
    _header.parent = this

    for (const node of _header.walk()) {
      node.root = this.root
    }

    this._header = _header
  }

  /** The trailer of this message. */
  get trailer (): EdiDomSegment<'UNT'|'SE'> {
    return this._trailer
  }

  /** The trailer of this message. */
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

  /** Retrieve the first available segment by tag or by zero-based index. */
  getChildNode (indexOrTag: number | string) {
    if (typeof indexOrTag === 'number') {
      return this.segments[indexOrTag]
    } else if (typeof indexOrTag === 'string') {
      return this.segments.find(segment => segment.tag === indexOrTag)
    }
  }

  /** Remove a segment from this message and destroy all descendent relationships to this message. */
  removeChildNode (child: EdiDomSegment): void {
    const index = this.segments.indexOf(child)

    if (index > -1) {
      child.parent = undefined

      for (const node of child.walk()) {
        node.root = undefined
      }

      this.segments.splice(index, 1)
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
