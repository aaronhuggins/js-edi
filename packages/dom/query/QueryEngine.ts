import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { EdiDomGlobal } from '../src/EdiDomGlobal'
import { EdiDomNodeAlias } from '../src/EdiDomNodeAlias'
import { EdiDomNodeType } from '../src/EdiDomNodeType'
import { ElementSelectorLexer } from './ElementSelectorLexer'
import { ElementAdjacentSelectorContext, ElementPrecedentSelectorContext, ElementSelectorParser } from './ElementSelectorParser'
import { elementReference, isNodeTag, isSegmentTag, predicateReference, valueReference } from './helpers'
import { QueryDomWalker } from './QueryDomWalker'
import { QueryEngineList } from './QueryEngineList'
import type { EdiDomAbstractNode } from '../src/EdiDomAbstractNode'
import type { EdiDomElement } from '../src/EdiDomElement'
import type { EdiDomSegment } from '../src/EdiDomSegment'
import type { EdiDomNode, ElementChild } from '../src/EdiDomTypes'
import type {
  ElementContainsValueSelectorContext,
  ElementNotValueSelectorContext,
  ElementValueSelectorContext,
  HlPathSelectorContext,
  LoopPathSelectorContext,
  ParentSegmentSelectorContext,
  SelectorContext
} from './ElementSelectorParser'
import type {
  ElementReference,
  QueryCombinator,
  QueryDirection,
  QueryEngineMode,
  QueryEngineOpts,
  QueryIterator
} from './QueryEngineTypes'
import { relate } from '../src/EdiDomHelpers'

export class QueryEngine {
  constructor (options: QueryEngineOpts) {
    this.node = options.node
    this.mode = options.mode
    this.selector = options.selector
    this.walker = new QueryDomWalker(this.node.walk())
  }

  private readonly node: EdiDomNode | EdiDomAbstractNode
  private readonly selector: string
  private readonly mode: QueryEngineMode
  private parsed: SelectorContext
  private readonly walker: QueryDomWalker

  list (): QueryEngineList<EdiDomNode> {
    return new QueryEngineList(this.evaluate())
  }

  /** Evaluate an element selector and return each element found. */
  evaluate (): QueryIterator<EdiDomNode> {
    if (isNodeTag(this.selector)) {
      return this.parseNodeTag()
    }

    if (isSegmentTag(this.selector)) {
      return this.parseSegmentTag()
    }

    return this.parseSelector()
  }

  private * parseNodeTag (): QueryIterator<EdiDomNode> {
    const nodeType = EdiDomNodeAlias[this.selector]

    if (nodeType === EdiDomNodeType.All) {
      for (const node of this.walker.descend()) yield node
    } else {
      for (const node of this.walker.descend()) {
        if (node.nodeType === nodeType) yield node
      }
    }
  }

  private * parseSegmentTag (): QueryIterator<EdiDomNode> {
    for (const node of this.walker.descend()) {
      if ('tag' in node && node.tag === this.selector) {
        yield node
      }
    }
  }

  private parseSelector (): QueryIterator<EdiDomNode> {
    const charStream = CharStreams.fromString(this.selector, 'selector')
    const lexer = new ElementSelectorLexer(charStream)
    const tokens = new CommonTokenStream(lexer)
    const parser = new ElementSelectorParser(tokens)
    this.parsed = parser.selector()

    if (typeof this.parsed.elementSelector() === 'object') {
      return this.elementSelector()
    } else if (typeof this.parsed.parentSegmentSelector() === 'object') {
      return this.parentSegmentSelector()
    } else if (typeof this.parsed.hlPathSelector() === 'object') {
      return this.hlPathSelector()
    } else if (typeof this.parsed.loopPathSelector() === 'object') {
      return this.loopPathSelector()
    } else if (typeof this.parsed.elementValueSelector() === 'object') {
      return this.elementValueSelector()
    } else if (typeof this.parsed.elementNotValueSelector() === 'object') {
      return this.elementNotValueSelector()
    } else if (typeof this.parsed.elementContainsValueSelector() === 'object') {
      return this.elementContainsValueSelector()
    } else if (typeof this.parsed.elementSiblingSelector() === 'object') {
      return this.elementSiblingSelector()
    } else if (typeof this.parsed.elementPrecedentSelector() === 'object') {
      return this.elementPrecedentSelector()
    } else if (typeof this.parsed.elementAdjacentSelector() === 'object') {
      return this.elementAdjacentSelector()
    }
  }

  private getWalkerNodes (direction?: QueryDirection): Generator<EdiDomNode> {
    return typeof direction === 'undefined' || direction === 'descend'
      ? this.walker.descend()
      : this.walker.ascend()
  }

  /** Walk the node tree from the current position and select the elements matching the reference. Direction will return only the first matching result, if any. */
  private * elementSelector (reference?: ElementReference, direction?: QueryDirection): QueryIterator<EdiDomElement> {
    const selector = this.parsed.elementSelector()
    const ref = typeof reference === 'undefined'
      ? elementReference(selector.ElementReference())
      : reference
    const { segmentId, elementId } = ref
    const nodes = this.getWalkerNodes(direction)
    let firstSegment = true

    for (const node of nodes) {
      if (node.nodeType === EdiDomNodeType.Segment) {
        firstSegment = false

        if (node.tag === segmentId) {
          const element = node.getChildNode(elementId)

          if (typeof element === 'object') {
            yield element
          } else if (this.mode === 'loose') {
            const domElement = new EdiDomGlobal.Element()

            relate(domElement, node, node.root)
            domElement.addChildNode(new EdiDomGlobal.Value())

            yield domElement
          }
        }
      }

      if (typeof direction === 'string' && !firstSegment) {
        break
      }
    }
  }

  /** Follow a path of adjacent segments and select the first element at the end of the path. */
  private * parentSegmentSelector (ctx?: ParentSegmentSelectorContext): QueryIterator<EdiDomElement> {
    const selector = typeof ctx === 'undefined' ? this.parsed.parentSegmentSelector() : ctx
    const ref = elementReference(selector.ElementReference())
    const segmentIds = selector.SegmentID().map(segmentId => segmentId.text.toUpperCase())
    let counter = 0

    segmentIds.push(ref.segmentId)

    for (const node of this.walker.descend()) {
      if (node.nodeType === EdiDomNodeType.Segment) {
        if (node.tag === segmentIds[counter]) {
          if (node.tag === ref.segmentId) {
            const element = node.getChildNode(ref.elementId)
            counter = 0

            if (typeof element === 'object') {
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
  }

  /** Follow a path of hierarchical levels and select the first element at the end of the path. */
  private * hlPathSelector (ctx?: HlPathSelectorContext): QueryIterator<EdiDomElement> {
    const selector = typeof ctx === 'undefined' ? this.parsed.hlPathSelector() : ctx
    const hlCodes = selector.AnyCharacter().map(hlCode => hlCode.text)
    const ref = elementReference(selector.ElementReference())
    const parentSegmentPath = selector.parentSegmentSelector()
    let codeIndex = 0
    let lastHlParent = 0

    for (const node of this.walker.descend()) {
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
          if (typeof ref === 'object') {
            if (ref.segmentId === 'HL') {
              yield node.getChildNode(ref.elementId)
            } else {
              yield this.elementSelector(ref).next().value
            }
          } else {
            yield this.parentSegmentSelector(parentSegmentPath).next().value
          }
        }
      }
    }
  }

  /** Find a bounded or unbounded loop and return the first matching element in the loop. */
  private * loopPathSelector (ctx?: LoopPathSelectorContext): QueryIterator<EdiDomElement> {
    const selector = typeof ctx === 'undefined' ? this.parsed.loopPathSelector() : ctx
    const ref = elementReference(selector.ElementReference())
    const parentSegmentPath = selector.parentSegmentSelector()
    const [startTag, endTag] = selector.SegmentID().map(segmentId => segmentId.text.toUpperCase())
    let loopNodes: EdiDomSegment[] = []
    let inLoop = false

    for (const node of this.walker.descend()) {
      if (node.nodeType === EdiDomNodeType.Segment) {
        if (node.tag === startTag) inLoop = true

        if (inLoop) {
          if (typeof ref === 'object') {
            loopNodes.push(node)
          } else {
            const element: EdiDomElement = this.parentSegmentSelector(parentSegmentPath).next().value

            if (typeof element === 'object') {
              if (element.parent.nodeType === EdiDomNodeType.Segment && element.parent.tag === endTag) {
                inLoop = false
              }

              yield element
            }
          }
        }

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

  private elementEqualsValue (element: EdiDomElement, value: string): boolean {
    if (typeof element === 'object') {
      const child: ElementChild = element.value

      switch (child.nodeType) {
        case EdiDomNodeType.Repeated:
          for (const node of child.repeats) {
            if (node.text === value) return true
          }
          break
        case EdiDomNodeType.Component:
        case EdiDomNodeType.Value:
          return child.text === value
      }
    }

    return false
  }

  private * elementValueSelector (ctx?: ElementValueSelectorContext, direction?: QueryDirection): QueryIterator<EdiDomElement> {
    const selector = typeof ctx === 'undefined' ? this.parsed.elementValueSelector() : ctx
    const { ref, value } = valueReference(selector)

    for (const node of this.elementSelector(ref, direction)) {
      if (this.elementEqualsValue(node, value)) yield node
    }
  }

  private * elementNotValueSelector (ctx?: ElementNotValueSelectorContext, direction?: QueryDirection): QueryIterator<EdiDomElement> {
    const selector = typeof ctx === 'undefined' ? this.parsed.elementNotValueSelector() : ctx
    const { ref, value } = valueReference(selector)

    for (const node of this.elementSelector(ref, direction)) {
      if (!this.elementEqualsValue(node, value)) yield node
    }
  }

  private elementContainsValue (element: EdiDomElement, value: string): boolean {
    return typeof element === 'object' && typeof element.text === 'string' && element.text.includes(value)
  }

  private * elementContainsValueSelector (ctx?: ElementContainsValueSelectorContext, direction?: QueryDirection): QueryIterator<EdiDomElement> {
    const selector = typeof ctx === 'undefined' ? this.parsed.elementContainsValueSelector() : ctx
    const { ref, value } = valueReference(selector)

    for (const node of this.elementSelector(ref, direction)) {
      if (this.elementContainsValue(node, value)) yield node
    }
  }

  private * predicate (
    selector: ElementPrecedentSelectorContext | ElementAdjacentSelectorContext,
    direction: QueryDirection,
    sibling: EdiDomElement
  ): QueryIterator<EdiDomElement> {
    const { ref, value, comparison } = predicateReference(selector)
    const getElement = (segment: EdiDomSegment): EdiDomElement => {
      const element = segment.getChildNode(ref.elementId)

      switch (comparison) {
        case 'contains':
          if (this.elementContainsValue(element, value)) return element
          break
        case 'equals':
          if (this.elementEqualsValue(element, value)) return element
          break
        case 'not':
          if (!this.elementEqualsValue(element, value)) return element
          break
      }
    }
    const siblingHandler = () => {
      let segment: EdiDomSegment

      switch (sibling.parent.nodeType) {
        case EdiDomNodeType.Segment:
          segment = sibling.parent
          break
        case EdiDomNodeType.Element:
          // Elements cannot be deeply nested, so this is a segment or undefined
          segment = sibling.parent.parent as EdiDomSegment
          break
      }
      
      if (typeof segment === 'object' && segment.nodeType === EdiDomNodeType.Segment) {
        const element = getElement(segment)

        if (typeof element === 'object') return element
      }
    }
    let siblingResult: EdiDomElement

    switch (direction) {
      case 'ascend':
        for (const node of this.walker.ascend()) {
          if (node.nodeType === EdiDomNodeType.Segment) {
            if (node.tag === ref.segmentId) {
              const element = getElement(node)
  
              if (typeof element === 'object') yield element
            }
          }
        }
        break
      case 'descend':
        for (const node of this.walker.fastforward()) {
          if (node.nodeType === EdiDomNodeType.Segment) {
            if (node.tag === ref.segmentId) {
              const element = getElement(node)
  
              if (typeof element === 'object') yield element
            }
          }
        }
        break
      case 'sibling':
        siblingResult = siblingHandler()

        if (typeof siblingResult === 'object') yield siblingResult
        break
    }
  }

  private getQueryCombinator (direction: QueryDirection): QueryCombinator {
    switch (direction) {
      case 'ascend':
        return this.parsed.elementPrecedentSelector()
      case 'descend':
        return this.parsed.elementAdjacentSelector()
      case 'sibling':
        return this.parsed.elementSiblingSelector()
    }
  }

  private * elementCombinatorSelector (direction: QueryDirection): QueryIterator<EdiDomElement> {
    const selector: QueryCombinator = this.getQueryCombinator(direction)

    if (typeof selector.ElementReference() === 'object') {
      const ref = elementReference(selector.ElementReference())

      for (const node of this.elementSelector(ref)) {
        const { value } = this.predicate(selector, direction, node).next()

        if (typeof value === 'object') yield node
      }
    } else if (typeof selector.parentSegmentSelector() === 'object') {
      for (const node of this.parentSegmentSelector(selector.parentSegmentSelector())) {
        const { value } = this.predicate(selector, direction, node).next()

        if (typeof value === 'object') yield node
      }
    } else if (typeof selector.hlPathSelector() === 'object') {
      for (const node of this.hlPathSelector(selector.hlPathSelector())) {
        const { value } = this.predicate(selector, direction, node).next()

        if (typeof value === 'object') yield node
      }
    } else if (typeof selector.loopPathSelector() === 'object') {
      for (const node of this.loopPathSelector(selector.loopPathSelector())) {
        const { value } = this.predicate(selector, direction, node).next()

        if (typeof value === 'object') yield node
      }
    }
  }

  private elementSiblingSelector (): QueryIterator<EdiDomElement> {
    return this.elementCombinatorSelector('sibling')
  }

  private elementPrecedentSelector (): QueryIterator<EdiDomElement> {
    return this.elementCombinatorSelector('ascend')
  }

  private elementAdjacentSelector (): QueryIterator<EdiDomElement> {
    return this.elementCombinatorSelector('descend')
  }
}
