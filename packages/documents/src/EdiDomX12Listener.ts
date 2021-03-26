import {
  EdiX12Lexer,
  RepititionCharElementContext
} from '@js-edi/x12'
import {
  EdiDomComponent,
  EdiDomElement,
  EdiDomGroup,
  EdiDomInterchange,
  EdiDomMessage,
  EdiDomRepeated,
  EdiDomRoot,
  EdiDomSegment,
  EdiDomValue
} from '@js-edi/dom'
import type { ErrorNode } from 'antlr4ts/tree'
import type {
  ComponentCharElementContext,
  EdiX12ParserListener,
  ElementContext,
  GroupHeaderContext,
  GroupTrailerContext,
  InterchangeHeaderContext,
  InterchangeTrailerContext,
  RepeatedElementContext,
  RepititionContext,
  SegmentContext,
  StrictElementContext,
  TransactionHeaderContext,
  TransactionTrailerContext,
  ValueContext
} from '@js-edi/x12'

/** Produces an element which contains a component or a value, never a repeated element. */
function contextToElement (ctx: ElementContext | RepeatedElementContext): EdiDomElement {
  const domElement = new EdiDomElement()
  const ctxComponents = ctx.component()
  const ctxValues = ctx.value()

  if (Array.isArray(ctxComponents) && ctxComponents.length > 0) {
    const domComponent = new EdiDomComponent()

    domComponent.addChildNode(value(ctxValues))

    for (const ctxComponent of ctxComponents) {
      domComponent.addChildNode(value(ctxComponent.value()))
    }

    domElement.addChildNode(domComponent)
  } else {
    domElement.addChildNode(value(ctxValues))
  }

  return domElement
}

/** Converts a control char element from a parser context to a valid element in the dom. */
function controlCharElement (ctx: RepititionCharElementContext | ComponentCharElementContext): EdiDomValue {
  const domValue = new EdiDomValue()

  if (ctx instanceof RepititionCharElementContext) {
    const ctlChar = ctx.ControlChar()
    const repChar = ctx.RepititionSeparator()
    const valChar = ctx.value()

    if (typeof ctlChar === 'object' && typeof ctlChar.text === 'string') {
      domValue.text = ctlChar.text
    } else if (typeof repChar === 'object' && typeof repChar.text === 'string') {
      domValue.text = repChar.text
    } else {
      return value([valChar])
    }
  } else {
    const ctlChar = ctx.ControlChar()
    const repChar = ctx.ComponentSeparator()

    if (typeof ctlChar === 'object' && typeof ctlChar.text === 'string') {
      domValue.text = ctlChar.text
    } else if (typeof repChar === 'object' && typeof repChar.text === 'string') {
      domValue.text = repChar.text
    }
  }

  return domValue
}

/** Produces a valid segment in the dom from a parser strict element context. */
function strictSegment<T extends string> (tag: T, ctxElements: StrictElementContext[]): EdiDomSegment<T> {
  const domSegment = new EdiDomSegment(tag)

  if (Array.isArray(ctxElements)) {
    for (const ctxElement of ctxElements) {
      const domElement = new EdiDomElement()

      domElement.addChildNode(value(ctxElement.value()))
      domSegment.addChildNode(domElement)
    }
  }

  return domSegment
}

/** Safely convert a ParseTree value[] to a string value. */
function value (ctxValue: ValueContext[]): EdiDomValue {
  const domValue = new EdiDomValue()

  if (Array.isArray(ctxValue)) {
    domValue.text = ctxValue.map((ctx: ValueContext) => {
      if (typeof ctx === 'object' && typeof ctx.text === 'string') {
        return ctx.text
      }

      return ''
    }).join('')
  }

  return domValue
}

export class EdiDomX12Listener implements EdiX12ParserListener {
  constructor () {
    this.root = new EdiDomRoot()
  }

  /** The document root. */
  root: EdiDomRoot
  /** The current interchange being constructed. */
  private interchange: EdiDomInterchange
  /** The current group being constructed. */
  private group: EdiDomGroup
  /** The current transaction being constructed. */
  private message: EdiDomMessage
  /** The current segment being constructed. */
  private segment: EdiDomSegment
  /** The current repitition being constructed. */
  private repitition?: EdiDomRepeated

  /** Deal with errors as encountered. */
  visitErrorNode (node: ErrorNode): void {}

  /** Set the current interchange and add it to the root. */
  enterInterchange (): void {
    this.interchange = new EdiDomInterchange()
    this.root.addChildNode(this.interchange)
  }

  /** Set the current group and add it to the current interchange. */
  enterGroup (): void {
    this.group = new EdiDomGroup()
    this.interchange.addChildNode(this.group)
  }

  /** Set the current message and add it to the current group. */
  enterTransaction (): void {
    this.message = new EdiDomMessage()
    this.group.addChildNode(this.message)
  }

  /** Set the current segment and add it to the current message. */
  enterSegment (): void {
    this.segment = new EdiDomSegment()
    this.message.addChildNode(this.segment)
  }

  exitSegment (ctx: SegmentContext): void {
    this.segment.tag = ctx.Tag().text
  }

  enterRepitition (): void {
    const element = new EdiDomElement()
    this.repitition = new EdiDomRepeated()

    element.addChildNode(this.repitition)
    this.segment.addChildNode(element)
  }

  exitRepitition (ctx: RepititionContext): void {
    const repitition = this.repitition ?? new EdiDomRepeated()
    const ctxRepititions = ctx.repeatedElement()

    if (Array.isArray(ctxRepititions) && ctxRepititions.length > 0) {
      for (const ctxRepitition of ctxRepititions) {
        const subElement = contextToElement(ctxRepitition)

        repitition.addChildNode(subElement.value)
      }
    }

    this.repitition = undefined
  }

  exitElement (ctx: ElementContext): void {
    const element = contextToElement(ctx)

    if (typeof this.repitition === 'object') {
      this.repitition.addChildNode(element.value)
    } else {
      this.segment.addChildNode(element)
    }
  }

  /** Get the discovered options and the ISA header for the current interchange. */
  exitInterchangeHeader (ctx: InterchangeHeaderContext): void {
    const ctxElements = ctx.interchangeElement()
    const { tokenSource } = ctx.start
    this.interchange.header = new EdiDomSegment('ISA')

    if (tokenSource instanceof EdiX12Lexer) {
      this.root.options = tokenSource.getOptions()
    }

    if (Array.isArray(ctxElements)) {
      for (const ctxElement of ctxElements) {
        const element = new EdiDomElement()

        switch ('object') {
          case (typeof ctxElement.strictElement()):
            element.addChildNode(value(ctxElement.strictElement().value()))
            break
          case (typeof ctxElement.dataCharElement()):
            element.addChildNode(value(ctxElement.dataCharElement().value()))
            break
          case (typeof ctxElement.componentCharElement()):
            element.addChildNode(controlCharElement(ctxElement.componentCharElement()))
            break
          case (typeof ctxElement.repititionCharElement()):
            element.addChildNode(controlCharElement(ctxElement.repititionCharElement()))
            break
        }

        this.interchange.header.addChildNode(element)
      }
    }
  }

  /** Constructs the interchange trailer. */
  exitInterchangeTrailer (ctx: InterchangeTrailerContext): void {
    this.interchange.trailer = strictSegment('IEA', ctx.strictElement())
  }

  /** Constructs the group header. */
  exitGroupHeader (ctx: GroupHeaderContext): void {
    this.group.header = strictSegment('GS', ctx.strictElement())
  }

  /** Constructs the group trailer. */
  exitGroupTrailer (ctx: GroupTrailerContext): void {
    this.group.trailer = strictSegment('GE', ctx.strictElement())
  }

  /** Constructs the transaction header. */
  exitTransactionHeader (ctx: TransactionHeaderContext): void {
    this.message.header = strictSegment('ST', ctx.strictElement())
  }

  /** Constructs the transaction trailer. */
  exitTransactionTrailer (ctx: TransactionTrailerContext): void {
    this.message.trailer = strictSegment('SE', ctx.strictElement())
  }
}
