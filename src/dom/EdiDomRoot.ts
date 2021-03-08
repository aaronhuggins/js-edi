import { EdiDomInterchange } from './EdiDomInterchange'
import { EdiDomNode, EdiDomNodeType } from './EdiDomNode'
import { EdiDomOptions } from './EdiDomTypes'

/** The document root containing one or more interchanges. */
export class EdiDomRoot extends EdiDomNode<EdiDomNodeType.Root> {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Root
    this.options = {} as EdiDomOptions
    this.interchanges = []
    this.root = this
    this.parent = this
  }

  /** Options for parsing/reconstructing an EDI document. */
  options: EdiDomOptions
  interchanges: EdiDomInterchange[]

  /** Add an interchange to this document. */
  addChildNode (child: EdiDomInterchange) {
    if (child.nodeType === EdiDomNodeType.Interchange) {
      child.parent = this

      for (const node of child.walk()) {
        node.root = this.root
      }

      this.interchanges.push(child)
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this

    for (const interchange of this.interchanges) {
      for (const node of interchange.walk()) {
        yield node
      }
    }
  }
}
