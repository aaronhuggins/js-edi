import { EdiDomElement } from './EdiDomElement'

/** The segment of an EDI document. */
export class EdiDomSegment<T extends string = string> {
  tag: T
  elements: EdiDomElement[]
}
