import { QueryEngine } from '../query/QueryEngine'
import type { QueryEngineList } from '../query/QueryEngineList'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomNode, EdiDomNodeTagMap } from './EdiDomTypes'

export abstract class EdiDomAbstractNode {
  protected _header?: EdiDomSegment
  protected _trailer?: EdiDomSegment
  protected _text?: string

  /** The node type indicating the edi DOm instance member; use this to determine a node's class instead of `instanceof`. */
  abstract nodeType: EdiDomNodeType
  /** The parent node of this instance. A document root will recursively reference itself. */
  abstract parent: EdiDomNode
  /** The absolute root node of this instance. */
  abstract root: EdiDomRoot

  /** The child nodes of this node serialized to an EDI DOMString. */
  abstract get innerEDI (): string

  /** This node and its children serialized to an EDI DOMString. */
  abstract get outerEDI (): string

  /** Synonymous with `outerEDI`. */
  abstract get text (): string

  /** This node and its children rendered to a white-space delimited text string. */
  abstract get textContent (): string

  /** Add a child node to the dom. On value nodes, this is undefined. */
  abstract addChildNode (child: EdiDomNode): void

  /** Get a child node from this node. */
  abstract getChildNode (position: string | number): EdiDomNode

  /** Remove a child node from the dom. On value nodes, this is undefined. */
  abstract removeChildNode (child: EdiDomNode): void

  /** Sequentially walk the Document Object Model starting with this node. */
  abstract walk (): Generator<EdiDomNode>

  /** Return a cleaned EdiDomNode for serialization; removes circular references and verbose node types. */
  abstract toJSON (): Partial<EdiDomNode>

  /** Populate an EdiDomNode from serialized JSON EDI notation. */
  abstract fromJSON (json: any): void

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
}
