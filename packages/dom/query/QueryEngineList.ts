import { IndexedIterable } from 'indexed-iterable'

/** Custom iterable for wrapping the query engine generator in a re-usable, re-iterable list. */
export class QueryEngineList<T> extends IndexedIterable<T> {
  constructor (iterator?: Iterable<T>) {
    super(iterator)
  }

  /** Get the size of this list. */
  get size (): number {
    return this.length
  }

  /** Add a value to this list. */
  add (result: T): void {
    this._cache.push(result)
  }

  /** Get a result by its index in the list. */
  get (key: number): T {
    return super.getByIndex(key)
  }

  /** Delete a result from this list by value or by index. */
  delete (result: T | number): void {
    if (typeof result === 'number') {
      // We check if `key in ...` because we need to avoid weird cases where `indexOf` or `includes` may return `-1`
      if (result in this._cache || this._iterableFinished) { // NOSONAR
        this._cache.splice(result, 1)

        return
      }

      let i: number

      for (const [currentIndex] of this.entries()) {
        if (currentIndex === result) {
          i = currentIndex
          break
        }
      }

      this._cache.splice(i, 1)

      return
    }

    const index = this._cache.indexOf(result)

    if (index > -1 || this._iterableFinished) {
      this._cache.splice(index, 1)
    }
  }

  /** Map each value to the result of a synchronous callback. */
  map<U> (callbackfn: (value: T, index: number, parent: QueryEngineList<T>) => U, thisArg?: any): QueryEngineList<U> {
    return new QueryEngineList(super.map(callbackfn, thisArg))
  }
}
