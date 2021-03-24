import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomNodeTagMap } from './EdiDomTypes'

export const EdiDomNodeAlias: Record<keyof EdiDomNodeTagMap, EdiDomNodeType> = {
  // Universal selector.
  '*': EdiDomNodeType.All,
  All: EdiDomNodeType.All,
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
  Segment: EdiDomNodeType.Segment,
  Element: EdiDomNodeType.Element,
  Component: EdiDomNodeType.Component,
  Value: EdiDomNodeType.Value
}
