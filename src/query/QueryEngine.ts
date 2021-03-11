import { CharStreams, CommonTokenStream } from 'antlr4ts'
import type { EdiDomAbstractNode } from '../dom/EdiDomAbstractNode'
import type { EdiDomElement } from '../dom/EdiDomElement'
import type { EdiDomSegment } from '../dom/EdiDomSegment'
import { EdiDomNode, EdiDomNodeType } from '../dom/EdiDomTypes'
import { ElementSelectorLexer } from './ElementSelectorLexer'
import { ElementSelectorContext, ElementSelectorParser, SelectorContext } from './ElementSelectorParser'
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
  *evaluate (): Generator<EdiDomElement> {
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
    } else if (typeof this.parsed.hlPathSelector() === 'object') {
      for (const node of this.hlPathSelector()) {
        yield node
      }
    } else if (typeof this.parsed.loopPathSelector() === 'object') {
      for (const node of this.loopPathSelector()) {
        yield node
      }
    } else if (typeof this.parsed.elementAdjacentSelector() === 'object') {
      console.log('elementAdjacentSelector')
    } else if (typeof this.parsed.elementPrecedentSelector() === 'object') {
      console.log('elementAdjacentSelector')
    }
  }

  /** Walk the node tree from the current position and select the elements matching the reference. */
  private *elementSelector (reference?: ElementReference): Generator<EdiDomElement> {
    const selector = this.parsed.elementSelector()
    const ref = typeof reference === 'undefined'
      ? elementReference(selector.ElementReference())
      : reference
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
  private *parentSegmentSelector (): Generator<EdiDomElement> {
    const selector = this.parsed.parentSegmentSelector()
    const ref = elementReference(selector.ElementReference())
    const segmentIds = selector.SegmentID().map(segmentId => segmentId.text.toUpperCase())
    let counter = 0

    segmentIds.push(ref.segmentId)

    for (const node of this.walker) {
      if (node.nodeType === EdiDomNodeType.Segment) {
        if (node.tag === segmentIds[counter]) {
          if (node.tag === ref.segmentId) {
            const element = node.getChildNode(ref.elementId)
  
            if (typeof element === 'object') {
              yield element
            }
  
            counter = 0
          } else {
            counter += 1
          }
        } else {
          counter = 0
        }
      }
    }
  }

  /** Follow a path of hierarchical levels and select the first element at the end of the path. */
  private *hlPathSelector (): Generator<EdiDomElement> {
    const selector = this.parsed.hlPathSelector()
    const ref = elementReference(selector.ElementReference())
    const hlCodes = selector.AnyCharacter().map(hlCode => hlCode.text)
    let codeIndex = 0
    let lastHlParent = 0

    for (const node of this.walker) {
      if (node.nodeType === EdiDomNodeType.Segment && node.tag === 'HL') {
        const hlParentElement = node.getChildNode(2)
        const hlCodeElement = node.getChildNode(3)
        const hlParent = hlParentElement.value.text === '' ? 0 : parseFloat(hlParentElement.value.text)

        if (hlCodeElement.value.text === hlCodes[codeIndex]) {
          if (hlParent !== lastHlParent) lastHlParent = hlParent

          if (codeIndex === hlCodes.length) {
            codeIndex = 0
          } else {
            codeIndex += 1
          }
        }

        if (codeIndex === hlCodes.length && lastHlParent === hlParent) {
          if (ref.segmentId === 'HL') {
            yield node.getChildNode(ref.elementId)
          } else {
            yield this.elementSelector(ref).next().value
          }
        }
      }
    }
  }

  /** Find a bounded or unbounded loop and return the first matching element in the loop. */
  private *loopPathSelector () {
    const selector = this.parsed.loopPathSelector()
    const ref = elementReference(selector.ElementReference())
    const [startTag, endTag] = selector.SegmentID().map(segmentId => segmentId.text.toUpperCase())
    let loopNodes: EdiDomSegment[] = []
    let inLoop = false

    for (const node of this.walker) {
      if (node.nodeType === EdiDomNodeType.Segment) {
        if (node.tag === startTag) inLoop = true
        
        if (inLoop) loopNodes.push(node)

        if (node.tag === endTag) {
          inLoop = false

          for (const loopNode of loopNodes) {
            if (loopNode.tag === ref.segmentId) {
              yield loopNode.getChildNode(ref.elementId)
            }
          }

          loopNodes = []
        }
      }
    }
  }

  private *elementPrecedentSelector (selector: ElementSelectorContext): Generator<EdiDomElement> {}

  private *elementAdjacentSelector (selector: ElementSelectorContext): Generator<EdiDomElement> {}
}
