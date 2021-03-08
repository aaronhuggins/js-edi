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
    switch (child.nodeType) {
      case EdiDomNodeType.Component:
        this.type = 'component'
        this.value = child
        break
      case EdiDomNodeType.Element:
        this.type = 'repeated'
        this.elements.push(child)
        break
      case EdiDomNodeType.Value:
        this.type = 'value'
        this.value = child
        break
    }
  }
}
