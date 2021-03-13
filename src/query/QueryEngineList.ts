export class QueryEngineList<T> implements Iterable<T> {
  constructor () {
    this._nodes = []

    return new Proxy(this, {
      get (target: QueryEngineList<T>, prop: string | symbol, receiver: any): any {
        if (typeof prop === 'string') {
          const key = parseFloat(prop)

          if (Number.isNaN(key)) {
            return target[prop]
          } else {
            return target._nodes[key]
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
            target._nodes[key] = value
          }
        } else {
          target[prop] = value
        }

        return true
      }
    })
  }

  private readonly _nodes: T[]
  [key: number]: T

  get size (): number {
    return this._nodes.length
  }

  add (result: T): void {
    this._nodes.push(result)
  }

  get (key: number): T {
    return this._nodes[key]
  }

  delete (result: T | number): void {
    if (typeof result === 'number') {
      this._nodes.splice(result, 1)
    } else {
      const index = this._nodes.indexOf(result)

      this._nodes.splice(index, 1)
    }
  }

  *[Symbol.iterator] (): IterableIterator<T> {
    for (const node of this._nodes) yield node
  }

  *entries (): IterableIterator<[number, T]> {
    let index = -1
    for (const node of this) yield [index++, node]
  }

  *keys (): IterableIterator<number> {
    for (const [index] of this.entries()) yield index
  }

  *values (): IterableIterator<T> {
    for (const node of this) yield node
  }

  forEach (callbackfn: (value: T, key: number, parent: QueryEngineList<T>) => void, thisArg?: any): void {
    const fn: typeof callbackfn = typeof thisArg === 'undefined'
      ? callbackfn.bind(this)
      : callbackfn.bind(thisArg)

    for (const [key, value] of this.entries()) fn(value, key, this)
  }
}
