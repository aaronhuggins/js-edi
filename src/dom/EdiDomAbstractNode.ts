import { QuerySelector } from '../query/QueryEngine'
import { EdiDomElement } from './EdiDomElement'
import { EdiDomRoot } from './EdiDomRoot'
import { EdiDomSegment } from './EdiDomSegment'
import { EdiDomNode, EdiDomNodeTagMap, EdiDomNodeType } from './EdiDomTypes'

export abstract class EdiDomAbstractNode {
  abstract nodeType: EdiDomNodeType
  abstract parent: EdiDomNode
  root: EdiDomRoot
  protected _header?: EdiDomSegment
  protected _trailer?: EdiDomSegment
  protected _text?: string

  abstract get text (): string

  /** Add a child node to the dom. On value nodes, this is undefined. */
  addChildNode (child: EdiDomNode): void {}

  /** Get a child node from this node. */
  getChildNode (position: string | number): EdiDomNode {
    return
  }

  /** Remove a child node from the dom. On value nodes, this is undefined. */
  removeChildNode (child: EdiDomNode): void {}

  /** Sequentially walk the Document Object Model starting with this node. */
  * walk (): Generator<EdiDomNode> {}
  
  /** Returns the first element that is a descendant of node that matches selectors. */
  querySelector<K extends keyof EdiDomNodeTagMap> (selector: K): EdiDomNodeTagMap[K]
  querySelector<E extends EdiDomElement = EdiDomElement> (selector: string): E
  querySelector (selector: string): EdiDomNode {
    const query = new QuerySelector(selector, this)
    const evaluate = query.evaluate()
    const { value } = evaluate.next()

    return value
  }

  /** Returns all element descendants of node that match selectors. */
  querySelectorAll<K extends keyof EdiDomNodeTagMap> (selector: K): Array<EdiDomNodeTagMap[K]>
  querySelectorAll<E extends EdiDomElement = EdiDomElement> (selector: string): Array<E>
  querySelectorAll (selector: string): EdiDomNode[] {
    const query = new QuerySelector(selector, this)
    const values: EdiDomNode[] = []

    for (const value of query.evaluate()) {
      values.push(value)
    }

    return values
  }

  /** Return a cleaned EdiDomNode for serialization; removes circular references and verbose node types. */
  toJSON (): Partial<this> {
    const header = this._header
    const trailer = this._trailer
    const text = this._text
    const result = {
      header,
      ...this,
      text,
      trailer
    }

    delete result.nodeType
    delete result.parent
    delete result.root
    delete result._header
    delete result._trailer
    delete result._text

    return result
  }
}
