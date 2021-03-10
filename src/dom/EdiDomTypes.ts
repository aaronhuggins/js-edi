/** Node types for each node class. */
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

/**
 * Options for parsing/reconstructing an EDI document.
 * In the case of EDIFACT, this represents the UNA segment.
 * In the case of EDIX12, this represents control characters in the ISA segment.
 */
 export interface EdiDomOptions {
  /** The component separator for EDI documents. */
  componentSeparator: string
  /** The data separator for EDI documents. */
  dataSeparator: string
  /** The decimal mark for EDIFACT documents only. */
  decimalMark?: ',' | '.'
  /** The release indicator for EDIFACT documents only. */
  releaseIndicator?: string
  /** The repitition separator for EDI documents. */
  repititionSeparator?: string
  /** The segment terminator for EDI documents. */
  segmentTerminator: string
  /** The formatting mark for prettified EDI documents. */
  endOfLine?: string
}

export interface EdiDomNode<T extends EdiDomNodeType = any> {
  nodeType: T
  parent?: EdiDomNode
  root: EdiDomNode<EdiDomNodeType.Root>

  /** Add a child node to the dom. On value nodes, this is undefined. */
  addChildNode?: (child: EdiDomNode) => void

  /** Remove a child node from the dom. On value nodes, this is undefined. */
  removeChildNode?: (child: EdiDomNode) => void

  /** Sequentially walk the Document Object Model starting with this node. */
  walk: () => Generator<EdiDomNode>

  /** Return a cleaned EdiDomNode for serialization; removes circular references and verbose node types. */
  toJSON: () => Partial<this>
}
