import type { EdiDomComponent } from './EdiDomComponent'
import type { EdiDomElement } from './EdiDomElement'
import type { EdiDomGroup } from './EdiDomGroup'
import type { EdiDomInterchange } from './EdiDomInterchange'
import type { EdiDomMessage } from './EdiDomMessage'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomValue } from './EdiDomValue'

export interface EdiDomGlobalSpace {
  Root: typeof EdiDomRoot
  Interchange: typeof EdiDomInterchange
  Group: typeof EdiDomGroup
  Message: typeof EdiDomMessage
  Transaction: typeof EdiDomMessage
  Segment: typeof EdiDomSegment
  Element: typeof EdiDomElement
  Component: typeof EdiDomComponent
  Value: typeof EdiDomValue
}

/** A global variable namespace which is filled-in as imports take place.
 * Meant for DOM internals only; not recommended to use or expose externally.
 * @hidden
 */
export const EdiDomGlobal: EdiDomGlobalSpace = {} as any
