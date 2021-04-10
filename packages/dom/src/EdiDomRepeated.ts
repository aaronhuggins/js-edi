import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { isArrayType, relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomComponent, EdiJsonComponent } from './EdiDomComponent'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomNode, RepeatedChild } from './EdiDomTypes'
import type { EdiDomValue, EdiJsonValue } from './EdiDomValue'

export interface EdiJsonRepeated {
  repeats: EdiJsonComponent[] | EdiJsonValue[]
}

export class EdiDomRepeated extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Repeated
    this.repeats = []
  }

  nodeType: EdiDomNodeType.Repeated
  parent: EdiDomElement
  root: EdiDomRoot
  repeats: EdiDomComponent[] | EdiDomValue[]

  get innerEDI (): string {
    return this.repeats
      .map(value => value.text)
      .join(this.root.options.repititionSeparator)
  }

  get outerEDI (): string {
    return this.innerEDI
  }

  get text (): string {
    return this.innerEDI
  }

  get textContent (): string {
    return this.repeats
      .map(value => '  ' + value.textContent)
      .join('\n')
  }

  addChildNode (child: RepeatedChild): void {
    switch (child.nodeType) {
      case EdiDomNodeType.Component:
      case EdiDomNodeType.Value:
        if (isArrayType(this.repeats, child)) {
          relate(child, this, this.root)
          this.repeats.push(child as any)
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
      case EdiDomNodeType.Value:
        if (isArrayType(this.repeats, child)) {
          index = this.repeats.indexOf(child as any)

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

  toJSON (): EdiJsonRepeated {
    return {
      repeats: this.repeats.map(repeat => repeat.toJSON())
    }
  }

  fromJSON (input: EdiJsonRepeated): void {
    if (Array.isArray(input.repeats)) {
      this.repeats = []

      for (const repeat of input.repeats) {
        if ('values' in repeat) {
          const domComponent = new EdiDomGlobal.Component()

          domComponent.fromJSON(repeat)
          relate(domComponent, this, this.root)

          this.repeats.push(domComponent as any)
        } else {
          const domValue = new EdiDomGlobal.Value()

          domValue.fromJSON(repeat)
          relate(domValue, this, this.root)

          this.repeats.push(domValue as any)
        }
      }
    }
  }
}

EdiDomGlobal.Repeated = EdiDomRepeated
