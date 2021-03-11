import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import type { EdiDomMessage } from './EdiDomMessage'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import { EdiDomNode, EdiDomNodeType } from './EdiDomTypes'

/** Describe a hierarchical level in EDIX12 (an 'HL' segment) or EDIFACT (an explicit segment tag structured as a component). */
export class EdiDomHierarchical<T extends string = string> extends EdiDomAbstractNode {
  constructor (tag?: T) {
    super()
    this.nodeType = EdiDomNodeType.Hierarchical
    this.tag = tag ?? ('' as T)
    this.segments = []
  }

  nodeType: EdiDomNodeType.Hierarchical
  parent: EdiDomMessage | EdiDomHierarchical
  root: EdiDomRoot
  tag: T
  level: number
  parentLevel: number
  segments: Array<EdiDomSegment | EdiDomHierarchical>
  protected _header: EdiDomSegment

  /** The header of this hierarchical level. */
  get header (): EdiDomSegment {
    return this._header
  }

  /** The header of this hierarchical level. */
  set header (_header: EdiDomSegment) {
    _header.parent = this

    for (const node of _header.walk()) {
      node.root = this.root
    }

    this._header = _header
  }

  /** The read-only text representation of this node. */
  get text (): string {
    return this.header.text +
    this.segments
      .map(segment => segment.text)
      .join('')
  }

  addChildNode (child: EdiDomSegment | EdiDomHierarchical) {
    if (child.nodeType === EdiDomNodeType.Segment || child.nodeType === EdiDomNodeType.Hierarchical) {
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }

      this.segments.push(child)
    }
  }

  *walk (): Generator<EdiDomNode> {
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
  }
}
