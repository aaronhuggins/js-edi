import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomNodeType } from './EdiDomNodeType'
import { EdiDomNode } from './EdiDomTypes'
import type { EdiDomComponent } from './EdiDomComponent'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomRoot } from './EdiDomRoot'

/** Value types supported for detection. */
export type EdiDomValueType = 'alpha' | 'numeric' | 'alphanumeric'

/** The base value in the object model. */
export class EdiDomValue extends EdiDomAbstractNode {
  constructor (text?: string) {
    super()
    this.nodeType = EdiDomNodeType.Value
    this.type = 'alphanumeric'
    this._text = text ?? ''
    // Remove no-op methods to guarantee they can never be called.
    delete this.addChildNode
    delete this.removeChildNode
  }

  nodeType: EdiDomNodeType.Value
  parent: EdiDomComponent | EdiDomElement
  root: EdiDomRoot
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
