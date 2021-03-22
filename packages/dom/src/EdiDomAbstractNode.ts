import { QueryEngine } from '../query/QueryEngine'
import type { QueryEngineList } from '../query/QueryEngineList'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomNode, EdiDomNodeTagMap } from './EdiDomTypes'

export abstract class EdiDomAbstractNode {
  abstract nodeType: EdiDomNodeType
  abstract parent: EdiDomNode
  root: EdiDomRoot
  protected _header?: EdiDomSegment
  protected _trailer?: EdiDomSegment
  protected _text?: string

  abstract get text (): string

  /** Add a child node to the dom. On value nodes, this is undefined. */
  abstract addChildNode (child: EdiDomNode): void

  /** Get a child node from this node. */
  abstract getChildNode (position: string | number): EdiDomNode

  /** Remove a child node from the dom. On value nodes, this is undefined. */
  abstract removeChildNode (child: EdiDomNode): void

  /** Sequentially walk the Document Object Model starting with this node. */
  abstract walk (): Generator<EdiDomNode>

  /** Returns the first element that is a descendant of node that matches selectors. */
  querySelector<K extends keyof EdiDomNodeTagMap> (selector: K): EdiDomNodeTagMap[K]
  querySelector<E extends EdiDomElement | EdiDomSegment = EdiDomElement> (selector: string): E
  querySelector (selector: string): EdiDomNode | QueryEngineList<EdiDomNode> {
    const query = new QueryEngine(selector, this)
    const evaluate = query.evaluate()
    const { value } = evaluate.next()

    return value
  }

  /** Returns all element descendants of node that match selectors. */
  querySelectorAll<K extends keyof EdiDomNodeTagMap> (selector: K): QueryEngineList<EdiDomNodeTagMap[K]>
  querySelectorAll<E extends EdiDomElement | EdiDomSegment = EdiDomElement> (selector: string): QueryEngineList<E>
  querySelectorAll (selector: string): QueryEngineList<EdiDomNode> {
    const query = new QueryEngine(selector, this)

    return query.list()
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
