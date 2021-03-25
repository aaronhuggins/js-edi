import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { isArrayType, relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomComponent } from './EdiDomComponent'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomNode, RepeatedChild } from './EdiDomTypes'
import type { EdiDomValue } from './EdiDomValue'

export class EdiDomRepeated extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Repeated
    this.repeats = []
  }

  nodeType: EdiDomNodeType.Repeated
  parent: EdiDomElement
  root: EdiDomRoot
  repeats: Array<EdiDomComponent> | Array<EdiDomValue>

  get text (): string {
    return this.repeats
      .map(value => value.text)
      .join(this.root.options.repititionSeparator)
  }

  addChildNode (child: RepeatedChild): void {
    switch (child.nodeType) {
      case EdiDomNodeType.Component:
        if (isArrayType(this.repeats, child)) {
          relate(child, this, this.root)
          this.repeats.push(child)
        }
        break
      case EdiDomNodeType.Value:
        if (isArrayType(this.repeats, child)) {
          relate(child, this, this.root)
          this.repeats.push(child)
        }
        break
    }
  }

  getChildNode (index: number): RepeatedChild {
    return this.repeats[index]
  }

  removeChildNode (child: RepeatedChild): void {
    let index = -1

    switch (child.nodeType) {
      case EdiDomNodeType.Component:
        if (isArrayType(this.repeats, child)) {
          index = this.repeats.indexOf(child)
          
          if (index > -1) {
            unrelate(child)
            this.repeats.splice(index, 1)
          }
        }
        break
      case EdiDomNodeType.Value:
        if (isArrayType(this.repeats, child)) {
          index = this.repeats.indexOf(child)
          
          if (index > -1) {
            unrelate(child)
            this.repeats.splice(index, 1)
          }
        }
        break
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this

    for (const repeat of this.repeats) {
      for (const node of repeat.walk()) {
        yield node
      }
    }
  }
}

EdiDomGlobal.Repeated = EdiDomRepeated
