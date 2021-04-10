import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { assignMessagesFromJson, containerFromJson, messagesAsContent, relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomMessage, EdiJsonMessage } from './EdiDomMessage'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment, EdiJsonSegment } from './EdiDomSegment'
import type { EdiDomNode } from './EdiDomTypes'
import type { EdiDomInterchange } from './EdiDomInterchange'

export interface EdiJsonGroup {
  header: EdiJsonSegment
  messages: EdiJsonMessage[]
  trailer: EdiJsonSegment
}

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
    relate(_header, this, this.root)
    this._header = _header
  }

  get innerEDI (): string {
    return this.messages.map(message => message.outerEDI).join('')
  }

  get outerEDI (): string {
    return this.header.outerEDI + this.innerEDI + this.trailer.outerEDI
  }

  get text (): string {
    return this.outerEDI
  }

  get textContent (): string {
    return `BEGIN Group\n${messagesAsContent(this)}END Group`
  }

  /** The trailer of this group. */
  get trailer (): EdiDomSegment<'UNE'|'GE'> {
    return this._trailer
  }

  /** The trailer of this group. */
  set trailer (_trailer: EdiDomSegment<'UNE'|'GE'>) {
    relate(_trailer, this, this.root)
    this._trailer = _trailer
  }

  /** Add a message to this group. */
  addChildNode (child: EdiDomMessage): void {
    if (child.nodeType === EdiDomNodeType.Message) {
      relate(child, this, this.root)
      this.messages.push(child)
    }
  }

  /** Retrieve the message/transaction at the given zero-based index. */
  getChildNode (index: number): EdiDomMessage {
    return this.messages[index]
  }

  /** Remove a message/transaction from this group and destroy all descendent relationships to this group. */
  removeChildNode (child: EdiDomMessage): void {
    const index = this.messages.indexOf(child)

    if (index > -1) {
      unrelate(child)
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

  toJSON (): EdiJsonGroup {
    return {
      header: this.header.toJSON(),
      messages: this.messages.map(message => message.toJSON()),
      trailer: this.trailer.toJSON()
    }
  }

  fromJSON (input: EdiJsonGroup): void {
    containerFromJson(this, input, () => {
      assignMessagesFromJson(this, input)
    })
  }
}

EdiDomGlobal.Group = EdiDomGroup
