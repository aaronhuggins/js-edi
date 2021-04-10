import type { EdiDomNode } from '../src/EdiDomTypes'
import { QueryEngineList } from './QueryEngineList'

export class QueryDomWalker {
  constructor (iterator: Generator<EdiDomNode>) {
    this.iterator = new QueryEngineList(iterator)
    this.position = 0
  }

  private readonly iterator: QueryEngineList<EdiDomNode>
  private position: number

  /** Descend down the node iterator. */
  * descend (): Generator<EdiDomNode> {
    for (const node of this.iterator) {
      yield node

      this.position += 1
    }
  }

  /** Ascend up the array of visited nodes. */
  * ascend (): Generator<EdiDomNode> {
    for (let i = this.position; i > -1; i -= 1) yield this.iterator[i]
  }

  * fastforward (): Generator<EdiDomNode> {
    for (let i = this.position; i > this.iterator.size; i += 1) yield this.iterator[i]
  }
}
