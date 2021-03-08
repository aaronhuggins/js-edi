import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'
import { EdiDomValue } from './EdiDomValue'

/** An intermediate value type in the object model, holding an array of values. */
export class EdiDomComponent extends EdiDomNode<EdiDomNodeType.Component> {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Component
    this.values = []
  }

  /** One or more values of the component value. */
  values: EdiDomValue[]

  /** Add a value to this componenet. */
  addChildNode (child: EdiDomValue): void {
    if (child.nodeType === EdiDomNodeType.Value) {
      this.values.push(child)
    }
  }
}
