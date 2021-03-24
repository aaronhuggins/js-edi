import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomGroup } from './EdiDomGroup'
import type { EdiDomMessage } from './EdiDomMessage'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomNode } from './EdiDomTypes'

type InterchangeChild = EdiDomGroup | EdiDomMessage

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

  /** The read-only text representation of this node. */
  get text (): string {
    const handleUNA = (): string => {
      return this.header.tag === 'UNB'
        ? this.root.createUNAString()
        : ''
    }

    // Prefer groups.
    if (this.groups.length > 0) {
      return handleUNA() +
        this.header.text +
        this.groups
          .map(segment => segment.text)
          .join('') +
        this.trailer.text
    }

    return handleUNA() +
      this.header.text +
      this.messages
        .map(segment => segment.text)
        .join('') +
      this.trailer.text
  }

  /** Add a group or message to this interchange. */
  addChildNode (child: InterchangeChild): void {
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

  /** Get a child group or child message of this interchange. */
  getChildNode (index: number): InterchangeChild {
    if (this.groups.length > 0) return this.groups[index]

    return this.messages[index]
  }

  /** Remove a child group or message from this interchange. */
  removeChildNode (child: InterchangeChild): void {
    const unrelate = (array: any[]): void => {
      const index = array.indexOf(child)

      if (index > -1) {
        child.parent = undefined

        for (const node of child.walk()) {
          node.root = undefined
        }

        array.splice(index, 1)
      }
    }

    switch (child.nodeType) {
      case EdiDomNodeType.Group:
        unrelate(this.groups)
        break
      case EdiDomNodeType.Message:
        unrelate(this.messages)
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
}

EdiDomGlobal.Interchange = EdiDomInterchange
