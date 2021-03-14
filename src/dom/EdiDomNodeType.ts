/** Node types for each node class. */
export enum EdiDomNodeType {
  All = 'All',
  Root = 'Root',
  Interchange = 'Interchange',
  Group = 'Group',
  Message = 'Message',
  Segment = 'Segment',
  Element = 'Element',
  Component = 'Component',
  Value = 'Value'
}

export function isNodeType<T extends EdiDomNodeType> (nodeType: T | string): nodeType is T {
  return nodeType in EdiDomNodeType
}
