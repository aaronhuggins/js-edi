import { EdiDomGroup } from './EdiDomGroup'
import { EdiDomMessage } from './EdiDomMessage'
import { EdiDomSegment } from './EdiDomSegment'

export class EdiDomInterchange {
  constructor () {
    this.header = new EdiDomSegment()
    this.groups = []
    this.messages = []
    this.trailer = new EdiDomSegment()
  }

  header: EdiDomSegment<'UNB'|'ISA'>
  groups: EdiDomGroup[]
  messages: EdiDomMessage[]
  trailer: EdiDomSegment<'UNZ'|'IEA'>
}
