import { CharStream, Lexer } from 'antlr4ts'

export enum ControlChar {
  SegmentTerminator = 'SegmentTerminator',
  DataSeparator = 'DataSeparator',
  ComponentSeparator = 'ComponentSeparator',
  RepititionSeparator = 'RepititionSeparator',
  EndOfLine = 'EndOfLine'
}

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

  handleAny (lexer: Record<string, any>): void {
    const charType = this.ControlCharMap.get(this.text)

    switch (true) {
      case this.line === 1 && this.charPositionInLine === DATA_SEPARATOR_POS:
        this.ControlCharMap.set(this.text, ControlChar.DataSeparator)
        break
      case this.line === 1 && this.charPositionInLine === REPETITION_SEPARATOR_POS:
        this.ControlCharMap.set(this.text, ControlChar.RepititionSeparator)
        break
      case this.line === 1 && this.charPositionInLine === COMPONENT_SEPARATOR_POS:
        this.ControlCharMap.set(this.text, ControlChar.ComponentSeparator)
        break
      case this.line === 1 && this.charPositionInLine === SEGMENT_TERMINATOR_POS:
        this.ControlCharMap.set(this.text, ControlChar.SegmentTerminator)
        break
      case this.line === 1 && this.charPositionInLine === END_OF_LINE_POS:
        // Only pick this up if end of line is a real formatting mark.
        if (this.text === '\r\n' || this.text === '\r' || this.text === '\n') {
          this.ControlCharMap.set(this.text, ControlChar.EndOfLine)
        }
        break
      default:
        if (charType in ControlChar) {
          this.type = lexer[charType]
        }
    }
  }

  protected ControlCharMap: Map<string, ControlChar>
}
