export enum EdiDomNodeType {
  Root = 'Root',
  Interchange = 'Interchange',
  Group = 'Group',
  Message = 'Message',
  Segment = 'Segment',
  Element = 'Element',
  Component = 'Component',
  Value = 'Value'
}

export class EdiDomNode<T extends EdiDomNodeType = any> {
  nodeType: T
  parent?: EdiDomNode
  root: EdiDomNode<EdiDomNodeType.Root>

  /** Add a child node to the dom. On value nodes, this is a no-op. */
  addChildNode (child: EdiDomNode) {}

  /** Remove a child node from the dom. On value nodes, this is a no-op. */
  removeChildNode (child: EdiDomNode) {}

  /** Sequentially walk the Document Object Model starting with this node. */
  * walk (): Generator<EdiDomNode> {}

  /** Return a cleaned EdiDomNode for serialization; removes circular references and verbose node types. */
  toJSON (): Omit<this, 'nodeType'> {
    const result = { ...this }

    delete result.nodeType
    delete result.parent
    delete result.root

    return result
  }
}
