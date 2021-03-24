/**
 * Options for parsing/reconstructing an EDI document.
 * In the case of EDIFACT, this represents the UNA segment.
 * In the case of EDIX12, this represents control characters in the ISA segment.
 */
export interface EdiOptions {
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
