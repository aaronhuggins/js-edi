import { BaseLexer, ControlChar, EdiOptions } from '@js-edi/shared'

enum ISAPos {
  DataSeparator = 4,
  RepititionSeparator = 83,
  ComponentSeparator = 105,
  SegmentTerminator = 106,
  EndOfLine = 107
}

export abstract class X12BaseLexer extends BaseLexer {
  get isDataSep (): boolean {
    return this.line === 1 && this.charPositionInLine === ISAPos.DataSeparator
  }

  get isRepititionSep (): boolean {
    return this.line === 1 && this.charPositionInLine === ISAPos.RepititionSeparator
  }

  get isComponentSep (): boolean {
    return this.line === 1 && this.charPositionInLine === ISAPos.ComponentSeparator
  }

  get isSegmentTerm (): boolean {
    return this.line === 1 && this.charPositionInLine === ISAPos.SegmentTerminator
  }

  get isEndOfLine (): boolean {
    const isCr = this.line === 1 && this.charPositionInLine === ISAPos.EndOfLine
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
          // If there is no segment terminator already found, then end of line is the terminator.
          if (Array.from(this.ControlCharMap.values()).includes(ControlChar.SegmentTerminator)) {
            this.ControlCharMap.set(this.text, ControlChar.EndOfLine)
          } else {
            this.ControlCharMap.set(this.text, ControlChar.SegmentTerminator)
          }
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

  getOptions (): EdiOptions {
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

  setOptions (options: EdiOptions): void {
    const eolChars = '\r\n'
    const noEmptyString = (str: string): boolean => {
      return typeof str === 'string' && str.trim() !== ''
    }

    if (noEmptyString(options.componentSeparator)) {
      this.ControlCharMap.set(options.componentSeparator, ControlChar.ComponentSeparator)
    }

    if (noEmptyString(options.dataSeparator)) {
      this.ControlCharMap.set(options.dataSeparator, ControlChar.DataSeparator)
    }

    if (noEmptyString(options.endOfLine) || eolChars.includes(options.endOfLine)) {
      this.ControlCharMap.set(options.endOfLine, ControlChar.EndOfLine)
    }

    if (noEmptyString(options.repititionSeparator)) {
      this.ControlCharMap.set(options.repititionSeparator, ControlChar.RepititionSeparator)
    }

    if (noEmptyString(options.segmentTerminator)) {
      this.ControlCharMap.set(options.segmentTerminator, ControlChar.SegmentTerminator)
    }
  }
}
