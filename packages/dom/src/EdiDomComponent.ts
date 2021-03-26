import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomNode } from './EdiDomTypes'
import type { EdiDomValue } from './EdiDomValue'
import type { EdiDomRepeated } from './EdiDomRepeated'

/** An intermediate value type in the object model, holding an array of values. */
export class EdiDomComponent extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Component
    this.values = []
  }

  nodeType: EdiDomNodeType.Component
  parent: EdiDomElement | EdiDomRepeated
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
      relate(child, this, this.root)
      this.values.push(child)
    }
  }

  /** Get a child value by zero-based index. */
  getChildNode (index: number): EdiDomValue {
    return this.values[index]
  }

  /** Remove a child by DOM value instance. */
  removeChildNode (child: EdiDomValue): void
  /** Remove a child by literal string value. */
  removeChildNode (value: string): void
  removeChildNode (child: EdiDomValue | string): void {
    const index = typeof child === 'string'
      ? this.values.findIndex(value => value.text === child)
      : this.values.indexOf(child)

    if (index > -1) {
      unrelate(this.values[index])
      this.values.splice(index, 1)
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

EdiDomGlobal.Component = EdiDomComponent
