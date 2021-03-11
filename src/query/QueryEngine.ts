import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { EdiDomNode, EdiDomNodeType } from '../dom/EdiDomTypes'
import { ElementSelectorLexer } from './ElementSelectorLexer'
import { ElementSelectorContext, ElementSelectorParser, ParentSegmentSelectorContext, SelectorContext } from './ElementSelectorParser'
import { elementReference } from './helpers'
import { ElementReference } from './QueryEngineTypes'

export class QuerySelector {
  constructor (selector: string, node: EdiDomNode) {
    this.node = node
    this.selector = selector
  }

  private readonly node: EdiDomNode
  private readonly selector: string
  private parsed: SelectorContext
  private walker: Generator<EdiDomNode>

  /** Evaluate an element selector and return each element found. */
  * evaluate (): Generator<EdiDomNode<EdiDomNodeType.Element>> {
    const charStream = CharStreams.fromString(this.selector, 'selector')
    const lexer = new ElementSelectorLexer(charStream)
    const tokens = new CommonTokenStream(lexer)
    const parser = new ElementSelectorParser(tokens)
    this.parsed = parser.selector()
    this.walker = this.node.walk()

    if (typeof this.parsed.elementSelector() === 'object') {
      for (const node of this.elementSelector()) {
        yield node
      }
    } else if (typeof this.parsed.parentSegmentSelector() === 'object') {
      for (const node of this.parentSegmentSelector()) {
        yield node
      }
    } else if (typeof this.parsed.elementAdjacentSelector() === 'object') {
      console.log('elementAdjacentSelector')
    } else if (typeof this.parsed.elementPrecedentSelector() === 'object') {
      console.log('elementAdjacentSelector')
    }
  }

  /** Walk the node tree from the current position and select the elements matching the reference. */
  * elementSelector (reference?: ElementReference): Generator<EdiDomNode<EdiDomNodeType.Element>> {
    const selector = this.parsed.elementSelector()
    const ref = typeof reference === 'undefined'
      ? reference
      : elementReference(selector.ElementReference())
    const { segmentId, elementId } = ref
    let elementCounter = 1

    for (const node of this.walker) {
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

      if (node.parent.nodeType === EdiDomNodeType.Segment) {
        elementCounter = 1
      }
    }
  }

  /** Follow a path of adjacent segments and select the first element at the end of the path. */
  * parentSegmentSelector (): Generator<EdiDomNode<EdiDomNodeType.Element>> {
    const selector = this.parsed.parentSegmentSelector()
    const ref = elementReference(selector.ElementReference())
    const segmentIds = selector.SegmentID().map(segmentId => segmentId.text.toUpperCase())
    let counter = 0

    segmentIds.push(ref.segmentId)

    for (const node of this.walker) {
      if (node.nodeType === EdiDomNodeType.Segment && node.tag === segmentIds[counter]) {
        if (node.tag === ref.segmentId) {
          const { value } = this.elementSelector(ref).next()
          counter = 0

          yield value
        } else {
          counter += 1
        }
      } else {
        counter = 0
      }
    }
  }

  * elementPrecedentSelector (selector: ElementSelectorContext): Generator<EdiDomNode<EdiDomNodeType.Element>> {}

  * elementAdjacentSelector (selector: ElementSelectorContext): Generator<EdiDomNode<EdiDomNodeType.Element>> {}
}
