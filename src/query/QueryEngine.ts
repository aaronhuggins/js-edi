import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { EdiDomAbstractNode } from '../dom/EdiDomAbstractNode'
import { EdiDomElement } from '../dom/EdiDomElement'
import { EdiDomNode, EdiDomNodeType } from '../dom/EdiDomTypes'
import { ElementSelectorLexer } from './ElementSelectorLexer'
import { ElementSelectorContext, ElementSelectorParser, ParentSegmentSelectorContext, SelectorContext } from './ElementSelectorParser'
import { elementReference } from './helpers'
import { ElementReference } from './QueryEngineTypes'

export class QuerySelector {
  constructor (selector: string, node: EdiDomNode | EdiDomAbstractNode) {
    this.node = node
    this.selector = selector
  }

  private readonly node: EdiDomNode | EdiDomAbstractNode
  private readonly selector: string
  private parsed: SelectorContext
  private walker: Generator<EdiDomNode>

  /** Evaluate an element selector and return each element found. */
  * evaluate (): Generator<EdiDomElement> {
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
  * elementSelector (reference?: ElementReference): Generator<EdiDomElement> {
    const selector = this.parsed.elementSelector()
    const ref = typeof reference === 'undefined'
      ? reference
      : elementReference(selector.ElementReference())
    const { segmentId, elementId } = ref

    for (const node of this.walker) {
      if (node.nodeType === EdiDomNodeType.Segment && node.tag === segmentId) {
        const element = node.getChildNode(elementId)

        if (typeof element === 'object') {
          yield element
        }
      }
    }
  }

  /** Follow a path of adjacent segments and select the first element at the end of the path. */
  * parentSegmentSelector (): Generator<EdiDomElement> {
    const selector = this.parsed.parentSegmentSelector()
    const ref = elementReference(selector.ElementReference())
    const segmentIds = selector.SegmentID().map(segmentId => segmentId.text.toUpperCase())
    let counter = 0

    segmentIds.push(ref.segmentId)

    for (const node of this.walker) {
      if (node.nodeType === EdiDomNodeType.Segment && node.tag === segmentIds[counter]) {
        if (node.tag === ref.segmentId) {
          const element = node.getChildNode(ref.elementId)

          if (typeof element === 'object') {
            counter = 0
            yield element
          }
        } else {
          counter += 1
        }
      } else {
        counter = 0
      }
    }
  }

  * hlPathSelector (): Generator<EdiDomElement> {
    const selector = this.parsed.hlPathSelector()
    const ref = elementReference(selector.ElementReference())
    const hlCodes = selector.AnyCharacter().map(hlCode => hlCode.text)
    const defaultValue = { value: { text: '-1' } }
    let qualified = false
    let lastParentIndex = -1

    for (const node of this.walker) {
      if (qualified && node.nodeType === EdiDomNodeType.Segment && node.tag === 'HL') {
        const hlIdElement = node.getChildNode(2) ?? defaultValue
        const parentIndex = parseFloat(hlIdElement.value.text)
      }
    }
  }

  * elementPrecedentSelector (selector: ElementSelectorContext): Generator<EdiDomElement> {}

  * elementAdjacentSelector (selector: ElementSelectorContext): Generator<EdiDomElement> {}
}
