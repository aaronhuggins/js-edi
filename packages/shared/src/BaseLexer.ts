import { CharStream, Lexer } from 'antlr4ts'
import { EdiOptions } from './BaseTypes'

export enum ControlChar {
  DataSeparator = 'DataSeparator',
  RepititionSeparator = 'RepititionSeparator',
  ComponentSeparator = 'ComponentSeparator',
  SegmentTerminator = 'SegmentTerminator',
  DecimalMark = 'DecimalMark',
  ReleaseIndicator = 'ReleaseIndicator',
  EndOfLine = 'EndOfLine'
}

export abstract class BaseLexer extends Lexer {
  constructor (input: CharStream) {
    super(input)

    this.ControlCharMap = new Map()
  }

  protected ControlCharMap: Map<string, ControlChar>

  abstract handleControlChars (lexer: Record<string, any>): void

  abstract getOptions (): EdiOptions

  abstract setOptions (options: EdiOptions): void
}
