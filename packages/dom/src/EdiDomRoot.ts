import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomInterchange, EdiJsonInterchange } from './EdiDomInterchange'
import type { EdiDomDocumentType, EdiDomNode, EdiDomOptions } from './EdiDomTypes'

export interface EdiJsonRoot {
  options: EdiDomOptions
  interchanges: EdiJsonInterchange[]
}

/** The document root containing one or more interchanges. */
export class EdiDomRoot extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Root
    this.options = {} as unknown as EdiDomOptions
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

  get innerEDI (): string {
    return this.interchanges.map(interchange => interchange.outerEDI).join('')
  }

  get outerEDI (): string {
    return this.innerEDI
  }

  get text (): string {
    return this.outerEDI
  }

  get textContent (): string {
    let content = `BEGIN Document\n`

    if (Array.isArray(this.interchanges) && this.interchanges.length > 0) {
      for (const interchange of this.interchanges) {
        const innerContent = interchange.textContent.split('\n')

        content += '  ' + innerContent.join('\n  ') + '\n'
      }
    }

    return content + `END Document`
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
      (this.options.decimalMark ?? '.') +
      (this.options.releaseIndicator ?? '?') +
      (this.options.repititionSeparator ?? ' ') +
      this.options.segmentTerminator

    if (typeof this.options.endOfLine === 'string') {
      return contents + this.options.endOfLine
    }

    return contents
  }

  /** Add an interchange to this document. */
  addChildNode (child: EdiDomInterchange): void {
    if (child.nodeType === EdiDomNodeType.Interchange) {
      relate(child, this, this)
      this.interchanges.push(child)
    }
  }

  /** Get an interchange by zer-based index in the root. */
  getChildNode (index: number): EdiDomInterchange {
    return this.interchanges[index]
  }

  /** Remove an interchange from this root and destroy all descendent relationships to this root. */
  removeChildNode (child: EdiDomInterchange): void {
    const index = this.interchanges.indexOf(child)

    if (index > -1) {
      unrelate(child)
      this.interchanges.splice(index, 1)
    }
  }

  /** Walk the document object model sequentially. */
  * walk (): Generator<EdiDomNode> {
    yield this

    for (const interchange of this.interchanges) {
      for (const node of interchange.walk()) {
        yield node
      }
    }
  }

  toJSON (): EdiJsonRoot {
    return {
      options: this.options,
      interchanges: this.interchanges.map(interchange => interchange.toJSON())
    }
  }

  fromJSON (input: EdiJsonRoot): void {
    this.interchanges = []

    if ('options' in input) {
      this.options = input.options
    }

    if (Array.isArray(input.interchanges)) {
      for (const interchange of input.interchanges) {
        const domInterchange = new EdiDomGlobal.Interchange()

        domInterchange.fromJSON(interchange)
        relate(domInterchange, this, this)
        this.interchanges.push(domInterchange)
      }
    }
  }
}

EdiDomGlobal.Root = EdiDomRoot
