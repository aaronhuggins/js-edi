import { EdiDomNodeAlias } from '../dom/EdiDomNodeAlias'
import type { TerminalNode } from 'antlr4ts/tree'
import type { EdiDomNodeTagMap } from '../dom/EdiDomTypes'
import type { ElementReference, PredicateReference, ValueReference } from './QueryEngineTypes'
import type {
  ElementAdjacentSelectorContext,
  ElementContainsValueSelectorContext,
  ElementNotValueSelectorContext,
  ElementPrecedentSelectorContext,
  ElementValueSelectorContext
} from './ElementSelectorParser'

/** Transform an element reference terminal node into ElementReference object. */
export function elementReference (ref: TerminalNode): ElementReference {
  if (typeof ref === 'undefined') return

  const index = ref.text.length === 5 ? 3 : 2

  return {
    segmentId: ref.text.substring(0, index).toUpperCase(),
    elementId: parseFloat(ref.text.substring(index))
  }
}

export function elementValue (ref: TerminalNode): string {
  if (typeof ref === 'undefined') return

  return ref.text.substring(2, ref.text.length - 2)
}

export function valueReference (
  selector: ElementValueSelectorContext | ElementNotValueSelectorContext | ElementContainsValueSelectorContext
): ValueReference {
  return {
    ref: elementReference(selector.ElementReference()),
    value: elementValue(selector.ElementValue())
  }
}

export function predicateReference (selector: ElementPrecedentSelectorContext | ElementAdjacentSelectorContext): PredicateReference {
  if (typeof selector.elementValueSelector() === 'object') {
    return {
      ...valueReference(selector.elementValueSelector()),
      comparison: 'equals'
    }
  } else if (typeof selector.elementNotValueSelector() === 'object') {
    return {
      ...valueReference(selector.elementValueSelector()),
      comparison: 'not'
    }
  } else if (typeof selector.elementContainsValueSelector() === 'object') {
    return {
      ...valueReference(selector.elementValueSelector()),
      comparison: 'contains'
    }
  }
}

export function isNodeTag<K extends keyof EdiDomNodeTagMap> (selector: K | string): selector is K {
  return selector in EdiDomNodeAlias
}

export function isSegmentTag<T extends string> (tag: T | string): tag is T {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const alphanumeric = alpha + '0123456789'

  if (tag.length === 2) {
    return alpha.includes(tag.charAt(0)) && alphanumeric.includes(tag.charAt(1))
  } else if (tag.length === 3) {
    return alpha.includes(tag.charAt(0)) &&
      alphanumeric.includes(tag.charAt(1)) &&
      alphanumeric.includes(tag.charAt(2))
  }

  return false
}
