import { EdiDomComponent } from './EdiDomComponent'
import { EdiDomElement } from './EdiDomElement'
import { EdiDomGroup } from './EdiDomGroup'
import { EdiDomHierarchical } from './EdiDomHierarchical'
import { EdiDomInterchange } from './EdiDomInterchange'
import { EdiDomMessage } from './EdiDomMessage'
import { EdiDomRoot } from './EdiDomRoot'
import { EdiDomSegment } from './EdiDomSegment'
import { EdiDomValue } from './EdiDomValue'

/** Node types for each node class. */
export enum EdiDomNodeType {
  All = 'All',
  Root = 'Root',
  Interchange = 'Interchange',
  Group = 'Group',
  Message = 'Message',
  Hierarchical = 'Hierarchical',
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

export type EdiDomNode = 
  | EdiDomRoot
  | EdiDomInterchange
  | EdiDomGroup
  | EdiDomMessage
  | EdiDomHierarchical
  | EdiDomSegment
  | EdiDomElement
  | EdiDomComponent
  | EdiDomValue

export type EdiDomDocumentType = 'EDIFACT' | 'EDIX12'

export interface EdiDomNodeTagMap extends Record<EdiDomNodeType, EdiDomNode> {
  '*': EdiDomNode
  All: EdiDomNode
  Root: EdiDomRoot
  Interchange: EdiDomInterchange
  Group: EdiDomGroup
  Message: EdiDomMessage
  Transaction: EdiDomMessage
  Hierarchical: EdiDomHierarchical
  Segment: EdiDomSegment
  Element: EdiDomElement
  Component: EdiDomComponent
  Value: EdiDomValue
  ISA: EdiDomInterchange
  GS: EdiDomGroup
  ST: EdiDomMessage
  UNB: EdiDomInterchange
  UNE: EdiDomGroup
  UNH: EdiDomMessage
}

export const EdiDomNodeAlias: Record<keyof EdiDomNodeTagMap, EdiDomNodeType> = {
  // Universal selector.
  '*': EdiDomNodeType.All,
  'All': EdiDomNodeType.All,
  // Interchange aliases.
  Interchange: EdiDomNodeType.Interchange,
  ISA: EdiDomNodeType.Interchange,
  UNB: EdiDomNodeType.Interchange,
  // Functional group aliases.
  Group: EdiDomNodeType.Group,
  GS: EdiDomNodeType.Group,
  UNE: EdiDomNodeType.Group,
  // Message aliases.
  Message: EdiDomNodeType.Message,
  Transaction: EdiDomNodeType.Message,
  ST: EdiDomNodeType.Message,
  UNH: EdiDomNodeType.Message,
  // EDI DOM Node aliases.
  Root: EdiDomNodeType.Root,
  Hierarchical: EdiDomNodeType.Hierarchical,
  Segment: EdiDomNodeType.Segment,
  Element: EdiDomNodeType.Element,
  Component: EdiDomNodeType.Component,
  Value: EdiDomNodeType.Value
}
