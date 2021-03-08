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
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }

      this.values.push(child)
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this

    for (const value of this.values) {
      for (const node of value.walk()) {
        yield node
      }
    }
  }
}
