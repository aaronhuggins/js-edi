import { EdiDomGroup } from './EdiDomGroup'
import { EdiDomMessage } from './EdiDomMessage'
import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'
import { EdiDomSegment } from './EdiDomSegment'

export class EdiDomInterchange extends EdiDomNode<EdiDomNodeType.Interchange> {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Interchange
    /** Set a placeholder value of undefined. */
    this.header = undefined
    this.groups = []
    this.messages = []
    /** Set a placeholder value of undefined. */
    this.trailer = undefined
  }

  header: EdiDomSegment<'UNB'|'ISA'>
  groups: EdiDomGroup[]
  messages: EdiDomMessage[]
  trailer: EdiDomSegment<'UNZ'|'IEA'>

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
