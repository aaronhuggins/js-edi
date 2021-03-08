import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'

/** Value types supported for detection. */
export type EdiDomValueType = 'alpha' | 'numeric' | 'alphanumeric'

/** The base value in the object model. */
export class EdiDomValue extends EdiDomNode<EdiDomNodeType.Value> {
  constructor (text?: string) {
    super()
    this.nodeType = EdiDomNodeType.Value
    this.type = 'alphanumeric'
    this._text = text ?? ''
  }

  /** A type derived from the contents of the value. */
  type: EdiDomValueType
  protected _text: string

  /** The string contents of the value. */
  get text (): string {
    return this._text
  }

  /** The string contents of the value. */
  set text (_text: string) {
    this._text = _text
  }

  * walk (): Generator<EdiDomNode> {
    yield this
  }
}
