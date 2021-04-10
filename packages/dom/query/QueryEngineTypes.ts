import type {
  ElementAdjacentSelectorContext,
  ElementPrecedentSelectorContext,
  ElementSiblingSelectorContext
} from './ElementSelectorParser'
import type { EdiDomAbstractNode } from '../src/EdiDomAbstractNode'
import type { EdiDomNode } from '../src/EdiDomTypes'

export interface QueryEngineOpts {
  selector: string
  node: EdiDomNode | EdiDomAbstractNode
  mode: QueryEngineMode
}

export type QueryEngineMode = 'strict' | 'loose'

export type QueryDirection = 'ascend' | 'descend' | 'sibling'

export type QueryCombinator = ElementPrecedentSelectorContext | ElementAdjacentSelectorContext | ElementSiblingSelectorContext

export interface ElementReference {
  segmentId: string
  elementId: number
}

export interface ValueReference {
  ref: ElementReference
  value: string
}

export interface PredicateReference extends ValueReference {
  comparison: 'equals' | 'not' | 'contains'
}

interface QueryYieldResult<TYield> {
  done?: false
  value: TYield
}

interface QueryReturnResult {
  done: true
  value: undefined
}

type QueryIteratorResult<T> = QueryYieldResult<T> | QueryReturnResult

export interface QueryIterator<T> extends Iterator<T, any, any> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next: (...args: [] | [any]) => QueryIteratorResult<T>
  return?: (value?: any) => QueryIteratorResult<T>
  throw?: (e?: any) => QueryIteratorResult<T>
  [Symbol.iterator]: () => QueryIterator<T>
}
