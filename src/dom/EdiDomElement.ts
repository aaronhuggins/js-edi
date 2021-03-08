import { EdiDomComponent } from './EdiDomComponent'
import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'
import { EdiDomValue } from './EdiDomValue'

/** Element types supported for detection. */
export type EdiDomElementType= 'repeated' | 'component' | 'value'

/** An element containing one or more repeated elements, a component, or a value. */
export class EdiDomElement<T extends EdiDomComponent|EdiDomValue = any> extends EdiDomNode<EdiDomNodeType.Element> {
  constructor (type?: EdiDomElementType) {
    super()
    this.nodeType = EdiDomNodeType.Element
    this.type = type ?? 'value'
    this.elements = []
  }

  /** The type of element: repeated, component, or value. */
  type: EdiDomElementType
  /** Used if this element represents a set of repeated elements. */
  elements: EdiDomElement[]
  /** The value of this element. */
  value: T

  /** Add an element, component, or value to this node. */
  addChildNode (child: EdiDomElement | T): void {
    const setRels = () => {
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }
    }

    switch (child.nodeType) {
      case EdiDomNodeType.Component:
        this.type = 'component'
        this.value = child

        setRels()
        break
      case EdiDomNodeType.Element:
        this.type = 'repeated'
        this.elements.push(child)

        setRels()
        break
      case EdiDomNodeType.Value:
        this.type = 'value'
        this.value = child

        setRels()
        break
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this

    for (const element of this.elements) {
      for (const node of element.walk()) {
        yield node
      }
    }

    if (typeof this.value !== 'undefined') yield this.value
  }

  toJSON (): Partial<this> {
    const result = super.toJSON()

    if (result.elements.length === 0) delete result.elements

    return result
  }
}
