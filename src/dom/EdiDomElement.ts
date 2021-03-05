import { EdiDomComponent } from './EdiDomComponent'
import { EdiDomValue } from './EdiDomValue'

/** Element types supported for detection. */
export type EdiDomElementType<T extends EdiDomElement|EdiDomComponent|EdiDomValue> =
  T extends EdiDomElement
    ? 'repeated'
    : T extends EdiDomComponent
      ? 'component'
      : 'value'

/** An element containing one or more repeated elements, a component, or a value. */
export class EdiDomElement<T extends EdiDomElement|EdiDomComponent|EdiDomValue = EdiDomValue> {
  constructor () {
    this.type = '' as EdiDomElementType<T>
  }

  type: EdiDomElementType<T>
  value: T extends EdiDomElement ? EdiDomElement[] : EdiDomComponent|EdiDomValue
}
