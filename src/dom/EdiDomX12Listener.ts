import { ErrorNode } from 'antlr4ts/tree'
import { EdiX12Lexer } from '../x12/EdiX12Lexer'
import {
  ComponentCharElementContext,
  InterchangeHeaderContext,
  InterchangeTrailerContext,
  RepititionCharElementContext,
  ValueContext
} from '../x12/EdiX12Parser'
import { EdiX12ParserListener } from '../x12/EdiX12ParserListener'
import { EdiDomElement } from './EdiDomElement'
import { EdiDomGroup } from './EdiDomGroup'
import { EdiDomInterchange } from './EdiDomInterchange'
import { EdiDomMessage } from './EdiDomMessage'
import { EdiDomRoot } from './EdiDomRoot'
import { EdiDomSegment } from './EdiDomSegment'
import { EdiDomValue } from './EdiDomValue'

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
  private element: EdiDomElement

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
  enterMessage (): void {
    this.message = new EdiDomMessage()
    this.group.addChildNode(this.message)
  }

  enterSegment (): void {
    this.segment = new EdiDomSegment()
    this.message.addChildNode(this.segment)
  }

  enterRepitition (): void {
    if (typeof this.element === 'object' && this.element.type === 'value' && typeof this.element.value === 'undefined') {
      
    }
  }

  enterElement (): void {
    this.element = new EdiDomElement()
    this.segment.addChildNode(this.element)
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
            element.value = value(ctxElement.strictElement().value())
            break
          case (typeof ctxElement.dataCharElement()):
            element.value = value(ctxElement.dataCharElement().value())
            break
          case (typeof ctxElement.componentCharElement()):
            element.value = controlCharElement(ctxElement.componentCharElement())
            break
          case (typeof ctxElement.repititionCharElement()):
            element.value = controlCharElement(ctxElement.repititionCharElement())
            break
        }

        this.interchange.header.addChildNode(element)
      }
    }
  }

  exitInterchangeTrailer (ctx: InterchangeTrailerContext): void {
    const ctxElements = ctx.strictElement()
    this.interchange.trailer = new EdiDomSegment('IEA')

    if (Array.isArray(ctxElements)) {
      for (const ctxElement of ctxElements) {
        const element = new EdiDomElement()

        element.value = value(ctxElement.value())

        this.interchange.trailer.addChildNode(element)
      }
    }
  }
}
