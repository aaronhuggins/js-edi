import { TerminalNode } from 'antlr4ts/tree'
import { ElementReference } from './QuerySelectorTypes'

/** Transform an element reference terminal node into ElementReference object. */
export function elementReference (ref: TerminalNode): ElementReference {
  const index = ref.text.length === 5 ? 3 : 2

  return {
    segmentId: ref.text.substring(0, index).toUpperCase(),
    elementId: parseFloat(ref.text.substring(index))
  }
}
