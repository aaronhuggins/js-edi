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

export abstract class EdiDomNode<T extends EdiDomNodeType = any> {
  nodeType: T
  parent?: EdiDomNode
  root: EdiDomNode<EdiDomNodeType.Root>
  protected _header?: EdiDomNode<EdiDomNodeType.Segment>
  protected _trailer?: EdiDomNode<EdiDomNodeType.Segment>
  protected _text?: string

  /** Add a child node to the dom. On value nodes, this is a no-op. */
  addChildNode (child: EdiDomNode) {}

  /** Remove a child node from the dom. On value nodes, this is a no-op. */
  removeChildNode (child: EdiDomNode) {}

  /** Sequentially walk the Document Object Model starting with this node. */
  * walk (): Generator<EdiDomNode> {}

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
