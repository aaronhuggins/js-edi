import { EdiDomMessage } from './EdiDomMessage'
import { EdiDomSegment } from './EdiDomSegment'

/** An EDIFACT UNG message or an X12 ST transaction. */
export class EdiDomGroup {
  constructor () {
    this.header = new EdiDomSegment()
    this.messages = []
    this.trailer = new EdiDomSegment()
  }

  /** The header of this group. */
  header: EdiDomSegment<'UNG'|'GS'>
  /** The messages contained in this group. */
  messages: EdiDomMessage[]
  /** The trailer of this group. */
  trailer: EdiDomSegment<'UNE'|'GE'>
}
