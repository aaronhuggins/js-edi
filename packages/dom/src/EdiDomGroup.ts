import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomMessage } from './EdiDomMessage'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomNode } from './EdiDomTypes'
import type { EdiDomInterchange } from './EdiDomInterchange'

/** An EDIFACT UNG message or an X12 ST transaction. */
export class EdiDomGroup extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Group
    this.messages = []
  }

  nodeType: EdiDomNodeType.Group
  parent: EdiDomInterchange
  protected _header: EdiDomSegment<'UNG'|'GS'>
  /** The messages contained in this group. */
  messages: EdiDomMessage[]
  /** The root of this instance. */
  root: EdiDomRoot
  protected _trailer: EdiDomSegment<'UNE'|'GE'>

  /** The header of this group. */
  get header (): EdiDomSegment<'UNG'|'GS'> {
    return this._header
  }

  /** The header of this group. */
  set header (_header: EdiDomSegment<'UNG'|'GS'>) {
    _header.parent = this

    for (const node of _header.walk()) {
      node.root = this.root
    }

    this._header = _header
  }

  /** The trailer of this group. */
  get trailer (): EdiDomSegment<'UNE'|'GE'> {
    return this._trailer
  }

  /** The trailer of this group. */
  set trailer (_trailer: EdiDomSegment<'UNE'|'GE'>) {
    _trailer.parent = this

    for (const node of _trailer.walk()) {
      node.root = this.root
    }

    this._trailer = _trailer
  }

  /** The read-only text representation of this node. */
  get text (): string {
    return this.header.text +
      this.messages
        .map(segment => segment.text)
        .join('') +
      this.trailer.text
  }

  /** Add a message to this group. */
  addChildNode (child: EdiDomMessage): void {
    if (child.nodeType === EdiDomNodeType.Message) {
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }

      this.messages.push(child)
    }
  }

  /** Retrieve the message/transaction at the given zero-based index. */
  getChildNode (index: number): EdiDomMessage {
    return this.messages[index]
  }

  /** Remove an interchange from this root and destroy all descendent relationships to this root. */
  removeChildNode (child: EdiDomMessage): void {
    const index = this.messages.indexOf(child)

    if (index > -1) {
      child.parent = undefined

      for (const node of child.walk()) {
        node.root = undefined
      }

      this.messages.splice(index, 1)
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this
    if (typeof this.header === 'object') {
      for (const node of this.header.walk()) {
        yield node
      }
    }

    for (const message of this.messages) {
      for (const node of message.walk()) {
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
