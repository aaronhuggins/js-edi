import { EdiDomValue } from './EdiDomValue'

/** An intermediate value type in the object model, holding an array of values. */
export class EdiDomComponent {
  /** One or more values of the component value. */
  values: EdiDomValue[]
}
