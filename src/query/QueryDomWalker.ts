import { EdiDomNode } from '../dom/EdiDomTypes'

export class QueryDomWalker {
  constructor (iterator: Generator<EdiDomNode>) {
    this.iterator = iterator
    this.visited = []
    this.position = 0
  }

  private iterator: Generator<EdiDomNode>
  private visited: EdiDomNode[]
  private position: number

  /** Descend down the node iterator. */
  *descend (): Generator<EdiDomNode> {
    for (const node of this.iterator) {
      this.position = this.visited.push(node) - 1

      yield node
    }
  }

  /** Ascend up the array of visited nodes. */
  *ascend (): Generator<EdiDomNode> {
    for (let i = this.position; i > 0; i -= 1) {
      yield this.visited[i]
    }
  }
}
