import { QueryIterator } from './QueryEngineTypes'

/** Custom iterable for wrapping the query engine generator in a re-usable, re-iterable list. */
export class QueryEngineList<T> implements Iterable<T> {
  constructor (query?: QueryIterator<T>) {
    this._values = []
    this._query = query
    this._queryFinished = typeof query === 'undefined'

    return new Proxy(this, {
      get (target: QueryEngineList<T>, prop: string | symbol, receiver: any): any {
        if (typeof prop === 'string') {
          const key = parseFloat(prop)

          if (Number.isNaN(key)) {
            return target[prop]
          } else {
            return target._values[key]
          }
        } else {
          return target[prop]
        }
      },
      set (target: QueryEngineList<T>, prop: string | symbol, value: any, receiver: any): boolean {
        if (typeof prop === 'string') {
          const key = parseFloat(prop)

          if (Number.isNaN(key)) {
            target[prop] = value
          } else {
            target._values[key] = value
          }
        } else {
          target[prop] = value
        }

        return true
      }
    })
  }

  private readonly _values: T[]
  private readonly _query?: QueryIterator<T>
  private _queryFinished: boolean
  [key: number]: T

  /** Get the size of this list. */
  get size (): number {
    if (this._queryFinished) {
      return this._values.length
    }

    let size = -1

    for (const [index] of this.entries()) {
      size = index
    }

    return size + 1
  }

  /** Add a value to this list. */
  add (result: T): void {
    this._values.push(result)
  }

  /** Get a result by its index in the list. */
  get (key: number): T {
    if (key in this._values) {
      return this._values[key]
    }

    for (const [index, node] of this.entries()) {
      if (index === key) return node
    }
  }

  /** Delete a result from this list by value or by index. */
  delete (result: T | number): void {
    if (typeof result === 'number') {
      if (result in this._values) {
        this._values.splice(result, 1)
      } else {
        for (const [index] of this.entries()) {
          if (index === result) {
            this._values.splice(result, 1)
            return
          }
        }
      }
    } else {
      const index = this._values.indexOf(result)

      this._values.splice(index, 1)
    }
  }

  /** Implement iterable iterator for this class. */
  *[Symbol.iterator] (): IterableIterator<T> {
    if (this._queryFinished) {
      for (const node of this._values) {
        yield node
      }
    } else {
      for (const node of this._query) {
        this._values.push(node)
        yield node
      }

      this._queryFinished = true
    }
  }

  /** Get the entries for this list in the form of key/value pairs. */
  *entries (): IterableIterator<[number, T]> {
    let index = 0
    for (const node of this) yield [index++, node]
  }

  /** Get all keys from this list. */
  *keys (): IterableIterator<number> {
    for (const [index] of this.entries()) yield index
  }

  /** Get all values from this list. */
  *values (): IterableIterator<T> {
    for (const node of this) yield node
  }

  /** Execute a synchronous callback for each value in the list. */
  forEach (callbackfn: (value: T, key: number, parent: QueryEngineList<T>) => void, thisArg?: any): void {
    const fn: typeof callbackfn = typeof thisArg === 'undefined'
      ? callbackfn.bind(this)
      : callbackfn.bind(thisArg)

    for (const [key, value] of this.entries()) fn(value, key, this)
  }

  /** Map each value to the result of a synchronous callback. */
  map<U> (callbackfn: (value: T, index: number, parent: QueryEngineList<T>) => U, thisArg?: any): QueryEngineList<U> {
    const list = this
    const mapper = function * (): QueryIterator<U> {
      const fn: typeof callbackfn = typeof thisArg === 'undefined'
        ? callbackfn.bind(list)
        : callbackfn.bind(thisArg)

      for (const [key, value] of list.entries()) {
        yield fn(value, key, list)
      }
    }

    return new QueryEngineList(mapper())
  }
}
