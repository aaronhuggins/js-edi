import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { TerminalNode } from 'antlr4ts/tree'
import { EdiDomNode, EdiDomNodeType } from '../dom/EdiDomTypes'
import { ElementSelectorLexer } from './ElementSelectorLexer'
import { ElementSelectorParser } from './ElementSelectorParser'

class ElementReference {
  constructor (ref: TerminalNode) {
    if (ref.text.length === 5) {
      this.segmentId = ref.text.substring(0, 3).toUpperCase()
      this.elementId = parseFloat(ref.text.substring(3))
    } else {
      this.segmentId = ref.text.substring(0, 2).toUpperCase()
      this.elementId = parseFloat(ref.text.substring(2))
    }
  }

  segmentId: string
  elementId: number
}

export class QuerySelector {
  constructor (selector: string, node: EdiDomNode) {
    this.node = node
    this.selector = selector
  }

  private readonly node: EdiDomNode
  private readonly selector: string

  * evaluate (): Generator<EdiDomNode<EdiDomNodeType.Element>> {
    const charStream = CharStreams.fromString(this.selector, 'selector')
    const lexer = new ElementSelectorLexer(charStream)
    const tokens = new CommonTokenStream(lexer)
    const parser = new ElementSelectorParser(tokens)
    const selector = parser.selector()

    if (typeof selector.elementSelector() === 'object') {
      const ref = new ElementReference(selector.elementSelector().ElementReference())
      const { segmentId, elementId } = ref
      let elementCounter = 1

      for (const node of this.node.walk()) {
        if (
          node.nodeType === EdiDomNodeType.Element &&
          node.parent.nodeType === EdiDomNodeType.Segment &&
          node.parent.tag === segmentId
        ) {
          if (elementCounter === elementId) {
            yield node
          }

          elementCounter += 1
        }
      }
    } else if (typeof selector.elementAdjacentSelector() === 'object') {
      console.log('elementAdjacentSelector')
    }
  }
}
