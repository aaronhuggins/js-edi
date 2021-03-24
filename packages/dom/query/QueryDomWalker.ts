import type { EdiDomNode } from '../src/EdiDomTypes'

export class QueryDomWalker {
  constructor (iterator: Generator<EdiDomNode>) {
    this.iterator = iterator
    this.visited = []
    this.position = 0
  }

  private readonly iterator: Generator<EdiDomNode>
  private readonly visited: EdiDomNode[]
  private position: number

  /** Descend down the node iterator. */
  * descend (): Generator<EdiDomNode> {
    for (const node of this.iterator) {
      this.position = this.visited.push(node) - 1

      yield node
    }
  }

  /** Ascend up the array of visited nodes. */
  * ascend (): Generator<EdiDomNode> {
    for (let i = this.position; i > -1; i -= 1) yield this.visited[i]
  }
}
