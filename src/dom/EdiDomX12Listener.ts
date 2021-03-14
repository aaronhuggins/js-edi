import { EdiX12Lexer } from '../x12/EdiX12Lexer'
import { RepititionCharElementContext } from '../x12/EdiX12Parser'
import { EdiDomComponent } from './EdiDomComponent'
import { EdiDomElement } from './EdiDomElement'
import { EdiDomGroup } from './EdiDomGroup'
import { EdiDomInterchange } from './EdiDomInterchange'
import { EdiDomMessage } from './EdiDomMessage'
import { EdiDomRoot } from './EdiDomRoot'
import { EdiDomSegment } from './EdiDomSegment'
import { EdiDomValue } from './EdiDomValue'
import type { ErrorNode } from 'antlr4ts/tree'
import type {
  ComponentCharElementContext,
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
} from '../x12/EdiX12Parser'
import type { EdiX12ParserListener } from '../x12/EdiX12ParserListener'

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
  private group: EdiDomGroup
  private message: EdiDomMessage
  private segment: EdiDomSegment
  private repitition?: EdiDomElement

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
    this.repitition = new EdiDomElement('repeated')
    this.segment.addChildNode(this.repitition)
  }

  exitRepitition (ctx: RepititionContext) {
    const element = this.repitition ?? new EdiDomElement('repeated')
    const ctxRepititions = ctx.repeatedElement()

    if (Array.isArray(ctxRepititions) && ctxRepititions.length > 0) {
      for (const ctxRepitition of ctxRepititions) {
        const subElement = contextToElement(ctxRepitition)

        element.addChildNode(subElement)
      }
    }

    this.repitition = undefined
  }

  exitElement (ctx: ElementContext): void {
    const element = contextToElement(ctx)

    if (typeof this.repitition === 'object') {
      this.repitition.addChildNode(element)
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

  exitInterchangeTrailer (ctx: InterchangeTrailerContext): void {
    this.interchange.trailer = strictSegment('IEA', ctx.strictElement())
  }

  exitGroupHeader (ctx: GroupHeaderContext): void {
    this.group.header = strictSegment('GS', ctx.strictElement())
  }

  exitGroupTrailer (ctx: GroupTrailerContext): void {
    this.group.trailer = strictSegment('GE', ctx.strictElement())
  }

  exitTransactionHeader (ctx: TransactionHeaderContext): void {
    this.message.header = strictSegment('ST', ctx.strictElement())
  }

  exitTransactionTrailer (ctx: TransactionTrailerContext): void {
    this.message.trailer = strictSegment('SE', ctx.strictElement())
  }
}
