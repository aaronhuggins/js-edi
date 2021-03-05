import { EdiDomGroup } from './EdiDomGroup'
import { EdiDomMessage } from './EdiDomMessage'
import { EdiDomSegment } from './EdiDomSegment'

export class EdiDomInterchange {
  header: EdiDomSegment<'UNB'|'ISA'>
  groups: EdiDomGroup[]
  messages: EdiDomMessage[]
  trailer: EdiDomSegment<'UNZ'|'IEA'>
}
