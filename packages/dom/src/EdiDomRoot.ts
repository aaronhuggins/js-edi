import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomInterchange } from './EdiDomInterchange'
import type { EdiDomDocumentType, EdiDomNode, EdiDomOptions } from './EdiDomTypes'

/** The document root containing one or more interchanges. */
export class EdiDomRoot extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Root
    this.options = {} as EdiDomOptions
    this.interchanges = []
    this.root = this
    this.parent = this
  }

  nodeType: EdiDomNodeType.Root
  /** Options for parsing/reconstructing an EDI document. */
  options: EdiDomOptions
  /** The child interchanges for this document. */
  interchanges: EdiDomInterchange[]
  /** Recursive self-reference for consistency. */
  root: EdiDomRoot
  /** Recursive self-reference for consistency. */
  parent: EdiDomRoot

  /** The read-only text representation of this node. */
  get text (): string {
    return this.interchanges.map(interchange => interchange.text).join('')
  }

  get documentType (): EdiDomDocumentType {
    const interchange = this.interchanges[0]

    if (typeof interchange === 'object') {
      const header = interchange.header

      if (typeof header === 'object') {
        const tag = header.tag

        switch (tag) {
          case 'ISA':
            return 'EDIX12'
          case 'UNB':
            return 'EDIFACT'
        }
      }
    }
  }

  /** Creates an UNA Service String Advice from options. */
  createUNAString (): string {
    const contents = 'UNA' +
      this.options.componentSeparator +
      this.options.dataSeparator +
      this.options.decimalMark ?? '.' +
      this.options.releaseIndicator ?? '?' +
      this.options.repititionSeparator ?? ' ' +
      this.options.segmentTerminator

    if (typeof this.options.endOfLine === 'string') {
      return contents + this.options.endOfLine
    }

    return contents
  }

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
