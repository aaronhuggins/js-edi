import { EdiDomGroup } from './EdiDomGroup'
import { EdiDomMessage } from './EdiDomMessage'
import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'
import { EdiDomSegment } from './EdiDomSegment'

export class EdiDomInterchange extends EdiDomNode<EdiDomNodeType.Interchange> {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Interchange
    /** Set a placeholder value of undefined. */
    this._header = undefined
    this.groups = []
    this.messages = []
    /** Set a placeholder value of undefined. */
    this._trailer = undefined
  }

  protected _header: EdiDomSegment<'UNB'|'ISA'>
  /** The child groups of this interchange. */
  groups: EdiDomGroup[]
  /** The child messages of this interchange; applies to EDIFACT. */
  messages: EdiDomMessage[]
  protected _trailer: EdiDomSegment<'UNZ'|'IEA'>

  /** The header of this interchange. */
  get header (): EdiDomSegment<'UNB'|'ISA'> {
    return this._header
  }

  /** The header of this interchange. */
  set header (_header: EdiDomSegment<'UNB'|'ISA'>) {
    _header.parent = this

    for (const node of _header.walk()) {
      node.root = this.root
    }

    this._header = _header
  }

  /** The trailer of this interchange. */
  get trailer (): EdiDomSegment<'UNZ'|'IEA'> {
    return this._trailer
  }

  /** The trailer of this interchange. */
  set trailer (_trailer: EdiDomSegment<'UNZ'|'IEA'>) {
    _trailer.parent = this

    for (const node of _trailer.walk()) {
      node.root = this.root
    }

    this._trailer = _trailer
  }

  /** Add a group or message to this interchange. */
  addChildNode (child: EdiDomGroup | EdiDomMessage) {
    child.parent = this

    for (const node of child.walk()) {
      node.root = this.root
    }

    switch (child.nodeType) {
      case EdiDomNodeType.Group:
        this.groups.push(child)
        break
      case EdiDomNodeType.Message:
        this.messages.push(child)
        break
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this
    if (typeof this.header !== 'undefined') yield this.header

    for (const group of this.groups) {
      for (const node of group.walk()) {
        yield node
      }
    }

    for (const message of this.messages) {
      for (const node of message.walk()) {
        yield node
      }
    }

    if (typeof this.trailer !== 'undefined') yield this.trailer
  }
}
