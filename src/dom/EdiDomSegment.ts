import { EdiDomElement } from './EdiDomElement'

/** The segment of an EDI document. */
export class EdiDomSegment<T extends string = string> {
  constructor () {
    this.tag = '' as T
    this.elements = []
  }

  tag: T
  elements: EdiDomElement[]
}
