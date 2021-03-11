import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomRoot } from './EdiDomRoot'
import { EdiDomNode, EdiDomNodeType } from './EdiDomTypes'
import type { EdiDomValue } from './EdiDomValue'

/** An intermediate value type in the object model, holding an array of values. */
export class EdiDomComponent extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Component
    this.values = []
  }

  nodeType: EdiDomNodeType.Component
  parent: EdiDomElement
  /** One or more values of the component value. */
  values: EdiDomValue[]
  /** The root of this instance. */
  root: EdiDomRoot

  /** The read-only text representation of this node. */
  get text (): string {
    return this.values
      .map(value => value.text)
      .join(this.root.options.componentSeparator)
  }

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
