/** Value types supported for detection. */
export type EdiDomValueType = 'alpha' | 'numeric' | 'alphanumeric'

/** The base value in the object model. */
export class EdiDomValue {
  constructor () {
    this.type = 'alphanumeric'
    this.text = ''
  }

  /** A type derived from the contents of the value. */
  type: EdiDomValueType
  /** The string contents of the value. */
  text: string
}
