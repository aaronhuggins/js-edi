import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomNode, EdiDomNodeType } from './EdiDomTypes'

/** Value types supported for detection. */
export type EdiDomValueType = 'alpha' | 'numeric' | 'alphanumeric'

/** The base value in the object model. */
export class EdiDomValue extends EdiDomAbstractNode<EdiDomNodeType.Value> {
  constructor (text?: string) {
    super()
    this.nodeType = EdiDomNodeType.Value
    this.type = 'alphanumeric'
    this._text = text ?? ''
    // Remove no-op methods to guarantee they can never be called.
    delete this.addChildNode
    delete this.removeChildNode
  }

  /** A type derived from the contents of the value. */
  type: EdiDomValueType
  addChildNode: never
  removeChildNode: never
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
