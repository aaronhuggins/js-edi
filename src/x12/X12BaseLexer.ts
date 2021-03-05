import { CharStream, Lexer } from 'antlr4ts'
import { EdiDomOptions } from '../dom/EdiDomTypes'

export enum ControlChar {
  SegmentTerminator = 'SegmentTerminator',
  DataSeparator = 'DataSeparator',
  ComponentSeparator = 'ComponentSeparator',
  RepititionSeparator = 'RepititionSeparator',
  EndOfLine = 'EndOfLine'
}

// Zero-based line positions.
const DATA_SEPARATOR_POS: number = 3
const REPETITION_SEPARATOR_POS: number = 82
const COMPONENT_SEPARATOR_POS: number = 104
const SEGMENT_TERMINATOR_POS: number = 105
const END_OF_LINE_POS: number = 106

export abstract class X12BaseLexer extends Lexer {
  constructor (input: CharStream) {
    super(input)

    this.ControlCharMap = new Map()
  }

  get isDataSep (): boolean {
    return this.line === 1 && this.charPositionInLine === DATA_SEPARATOR_POS + 1
  }

  get isRepititionSep (): boolean {
    return this.line === 1 && this.charPositionInLine === REPETITION_SEPARATOR_POS + 1
  }

  get isComponentSep (): boolean {
    return this.line === 1 && this.charPositionInLine === COMPONENT_SEPARATOR_POS + 1
  }

  get isSegmentTerm (): boolean {
    return this.line === 1 && this.charPositionInLine === SEGMENT_TERMINATOR_POS + 1
  }

  get isEndOfLine (): boolean {
    const isCr = this.line === 1 && this.charPositionInLine === END_OF_LINE_POS + 1
    const isNl = this.line === 2 && this.charPositionInLine === 0

    return isCr || isNl
  }

  /** Is the current right-hand lexer position a control character definition? */
  get isCtlCharPos (): boolean {
    return this.isDataSep || this.isRepititionSep || this.isComponentSep || this.isSegmentTerm || this.isEndOfLine
  }

  handleControlChars (lexer: Record<string, any>): void {
    const charType = this.ControlCharMap.get(this.text)

    switch (true) {
      case this.isDataSep:
        this.ControlCharMap.set(this.text, ControlChar.DataSeparator)
        // this.type = lexer[ControlChar.DataSeparator]
        break
      case this.isRepititionSep:
        this.ControlCharMap.set(this.text, ControlChar.RepititionSeparator)
        // this.type = lexer[ControlChar.RepititionSeparator]
        break
      case this.isComponentSep:
        this.ControlCharMap.set(this.text, ControlChar.ComponentSeparator)
        // this.type = lexer[ControlChar.ComponentSeparator]
        break
      case this.isSegmentTerm:
        this.ControlCharMap.set(this.text, ControlChar.SegmentTerminator)
        // this.type = lexer[ControlChar.SegmentTerminator]
        break
      case this.isEndOfLine:
        // Only pick this up if end of line is a real formatting mark.
        if (this.text === '\r\n' || this.text === '\r' || this.text === '\n') {
          this.ControlCharMap.set(this.text, ControlChar.EndOfLine)
          // this.type = lexer[ControlChar.EndOfLine]
        }
        break
      default:
        if (charType in ControlChar) {
          this.type = lexer[charType]
        } else {
          this.type = lexer.Char
        }
    }
  }

  protected ControlCharMap: Map<string, ControlChar>

  getOptions (): EdiDomOptions {
    const options: any = {}

    for (const [char, type] of this.ControlCharMap) {
      switch (type) {
        case ControlChar.ComponentSeparator:
          options.componentSeparator = char
          break
        case ControlChar.DataSeparator:
          options.dataSeparator = char
          break
        case ControlChar.EndOfLine:
          options.endOfLine = char
          break
        case ControlChar.RepititionSeparator:
          options.repititionSeparator = char
          break
        case ControlChar.SegmentTerminator:
          options.segmentTerminator = char
          break
      }
    }

    return options
  }
}
