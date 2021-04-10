import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { assignMessagesFromJson, containerFromJson, relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomGroup, EdiJsonGroup } from './EdiDomGroup'
import type { EdiDomMessage, EdiJsonMessage } from './EdiDomMessage'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment, EdiJsonSegment } from './EdiDomSegment'
import type { EdiDomNode, InterchangeChild } from './EdiDomTypes'

export interface EdiJsonInterchange {
  header: EdiJsonSegment
  groups?: EdiJsonGroup[]
  messages?: EdiJsonMessage[]
  trailer: EdiJsonSegment
}

export class EdiDomInterchange extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Interchange
    this.groups = []
    this.messages = []
  }

  nodeType: EdiDomNodeType.Interchange
  parent: EdiDomRoot
  protected _header: EdiDomSegment<'UNB'|'ISA'>
  /** The child groups of this interchange. */
  groups: EdiDomGroup[]
  /** The child messages of this interchange; applies to EDIFACT. */
  messages: EdiDomMessage[]
  /** The root of this instance. */
  root: EdiDomRoot
  protected _trailer: EdiDomSegment<'UNZ'|'IEA'>

  /** The header of this interchange. */
  get header (): EdiDomSegment<'UNB'|'ISA'> {
    return this._header
  }

  /** The header of this interchange. */
  set header (_header: EdiDomSegment<'UNB'|'ISA'>) {
    relate(_header, this, this.root)
    this._header = _header
  }

  get innerEDI (): string {
    if (this.groups.length > 0) {
      return this.groups.map(group => group.outerEDI).join('')
    }

    return this.messages.map(message => message.outerEDI).join('')
  }

  get outerEDI (): string {
    const handleUNA = (): string => {
      return this.header.tag === 'UNB'
        ? this.root.createUNAString()
        : ''
    }

    return handleUNA() + this.header.outerEDI + this.innerEDI + this.trailer.outerEDI
  }

  get text (): string {
    return this.outerEDI
  }

  get textContent (): string {
    let content = `BEGIN Interchange\n`

    if (Array.isArray(this.groups) && this.groups.length > 0) {
      for (const group of this.groups) {
        const innerContent = group.textContent.split('\n')

        content += '  ' + innerContent.join('\n  ') + '\n'
      }
    }

    if (Array.isArray(this.messages) && this.messages.length > 0) {
      for (const message of this.messages) {
        const innerContent = message.textContent.split('\n')

        content += '  ' + innerContent.join('\n  ') + '\n'
      }
    }

    return content + `END Interchange`
  }

  /** The trailer of this interchange. */
  get trailer (): EdiDomSegment<'UNZ'|'IEA'> {
    return this._trailer
  }

  /** The trailer of this interchange. */
  set trailer (_trailer: EdiDomSegment<'UNZ'|'IEA'>) {
    relate(_trailer, this, this.root)
    this._trailer = _trailer
  }

  /** Add a group or message to this interchange. */
  addChildNode (child: InterchangeChild): void {
    const relateToArray = (array: any[]): void => {
      relate(child, this, this.root)
      array.push(child)
    }

    switch (child.nodeType) {
      case EdiDomNodeType.Group:
        relateToArray(this.groups)
        break
      case EdiDomNodeType.Message:
        relateToArray(this.messages)
        break
    }
  }

  /** Get a child group or child message of this interchange. */
  getChildNode (index: number): InterchangeChild {
    if (this.groups.length > 0) return this.groups[index]

    return this.messages[index]
  }

  /** Remove a child group or message from this interchange. */
  removeChildNode (child: InterchangeChild): void {
    const unrelateFromArray = (array: any[]): void => {
      const index = array.indexOf(child)

      if (index > -1) {
        unrelate(child)
        array.splice(index, 1)
      }
    }

    switch (child.nodeType) {
      case EdiDomNodeType.Group:
        unrelateFromArray(this.groups)
        break
      case EdiDomNodeType.Message:
        unrelateFromArray(this.messages)
        break
    }
  }

  /** Walk the document object model from this node sequentially. */
  * walk (): Generator<EdiDomNode> {
    yield this
    if (typeof this.header === 'object') {
      for (const node of this.header.walk()) {
        yield node
      }
    }

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

    if (typeof this.trailer === 'object') {
      for (const node of this.trailer.walk()) {
        yield node
      }
    }
  }

  toJSON (): EdiJsonInterchange {
    // Guarantee the order of property serialization.
    const json: EdiJsonInterchange = {
      header: this.header.toJSON(),
      groups: undefined,
      messages: undefined,
      trailer: this.trailer.toJSON()
    }

    if (this.groups.length > 0) {
      json.groups = this.groups.map(group => group.toJSON())
      delete json.messages

      return json
    }

    json.messages = this.messages.map(message => message.toJSON())
    delete json.groups

    return json
  }

  fromJSON (input: EdiJsonInterchange): void {
    this.groups = []
    this.messages = []

    containerFromJson(this, input, () => {
      if (Array.isArray(input.groups) && input.groups.length > 0) {
        for (const group of input.groups) {
          const domGroup = new EdiDomGlobal.Group()

          domGroup.fromJSON(group)
          relate(domGroup, this, this.root)
          this.groups.push(domGroup)
        }
      }

      assignMessagesFromJson(this, input)
    })
  }
}

EdiDomGlobal.Interchange = EdiDomInterchange
