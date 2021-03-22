import { BaseLexer, ControlChar, EdiOptions } from '@js-edi/shared'

/** Positions of EDIFACT delimiters in a UNA segment. */
enum UNAPos {
  ComponentSeparator = 4,
  DataSeparator,
  DecimalMark,
  ReleaseIndicator,
  RepititionSeparator,
  SegmentTerminator,
  EndOfLine
}

export abstract class FactBaseLexer extends BaseLexer {
  private _encounteredUNA: boolean

  /** Has the lexer encountered an UNA segment? */
  get encounteredUNA (): boolean {
    return typeof this._encounteredUNA === 'boolean'
      ? this._encounteredUNA
      : false
  }

  /** Is the current right-hand lexer position a component separator definition? */
  get isComponentSep (): boolean {
    return this.encounteredUNA && this.line === 1 && this.charPositionInLine === UNAPos.ComponentSeparator
  }

  /** Is the current right-hand lexer position a data separator definition? */
  get isDataSep (): boolean {
    return this.encounteredUNA && this.line === 1 && this.charPositionInLine === UNAPos.DataSeparator
  }

  /** Is the current right-hand lexer position a decimal mark definition? */
  get isDecimalMark (): boolean {
    return this.encounteredUNA && this.line === 1 && this.charPositionInLine === UNAPos.DecimalMark
  }

  /** Is the current right-hand lexer position a release indicator definition? */
  get isReleaseIndicator (): boolean {
    return this.encounteredUNA && this.line === 1 && this.charPositionInLine === UNAPos.ReleaseIndicator
  }

  /** Is the current right-hand lexer position a repitition separator definition? */
  get isRepititionSep (): boolean {
    return this.encounteredUNA && this.line === 1 && this.charPositionInLine === UNAPos.RepititionSeparator
  }

  /** Is the current right-hand lexer position a segement terminator definition? */
  get isSegmentTerm (): boolean {
    return this.encounteredUNA && this.line === 1 && this.charPositionInLine === UNAPos.SegmentTerminator
  }

  /** Is the current right-hand lexer position an end-of-line definition? */
  get isEndOfLine (): boolean {
    const isCr = this.encounteredUNA && this.line === 1 && this.charPositionInLine === UNAPos.EndOfLine
    const isNl = this.encounteredUNA && this.line === 2 && this.charPositionInLine === 0

    return isCr || isNl
  }

  /** Is the current right-hand lexer position a control character definition? */
  get isCtlCharPos (): boolean {
    return this.isComponentSep
      || this.isDataSep
      || this.isDecimalMark
      || this.isReleaseIndicator
      || this.isRepititionSep
      || this.isSegmentTerm
      || this.isEndOfLine
  }

  /** Handles UNA segments encountered by the lexer. */
  handleUNA (): void {
    if (this.text === 'UNA' && this.line === 1 && this.charPositionInLine === 3) {
      this._encounteredUNA = true
    }
  }

  /** Handles control characters encountered by the lexer. */
  handleControlChars (lexer: Record<string, any>): void {
    const charType = this.ControlCharMap.get(this.text)
    const charTypeHandler = () => {
      if (charType in ControlChar) {
        this.type = lexer[charType]
      } else {
        this.type = lexer.Char
      }
    }

    switch (true) {
      case !this.encounteredUNA:
        charTypeHandler()
        break
      case this.isComponentSep:
        this.ControlCharMap.set(this.text, ControlChar.ComponentSeparator)
        break
      case this.isDataSep:
        this.ControlCharMap.set(this.text, ControlChar.DataSeparator)
        break
      case this.isDecimalMark:
        this.ControlCharMap.set(this.text, ControlChar.DataSeparator)
        break
      case this.isReleaseIndicator:
        this.ControlCharMap.set(this.text, ControlChar.DataSeparator)
        break
      case this.isRepititionSep:
        this.ControlCharMap.set(this.text, ControlChar.RepititionSeparator)
        break
      case this.isSegmentTerm:
        this.ControlCharMap.set(this.text, ControlChar.SegmentTerminator)
        break
      case this.isEndOfLine:
        // Only pick this up if end of line is a real formatting mark.
        if (this.text === '\r\n' || this.text === '\r' || this.text === '\n') {
          this.ControlCharMap.set(this.text, ControlChar.EndOfLine)
        }
        break
      default:
        charTypeHandler()
        break
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
        case ControlChar.DecimalMark:
          options.decimalMark = char as any
          break
        case ControlChar.ReleaseIndicator:
          options.releaseIndicator = char
          break
      }
    }

    return options
  }

  /** Set the options for EDIFACT parsing if no UNA segment is provided. UNA segments take precedence over provided options. */
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

    if (noEmptyString(options.decimalMark)) {
      this.ControlCharMap.set(options.decimalMark, ControlChar.DecimalMark)
    }

    if (noEmptyString(options.endOfLine) || eolChars.includes(options.endOfLine)) {
      this.ControlCharMap.set(options.endOfLine, ControlChar.EndOfLine)
    }

    if (noEmptyString(options.releaseIndicator)) {
      this.ControlCharMap.set(options.releaseIndicator, ControlChar.ReleaseIndicator)
    }

    if (noEmptyString(options.repititionSeparator)) {
      this.ControlCharMap.set(options.repititionSeparator, ControlChar.RepititionSeparator)
    }

    if (noEmptyString(options.segmentTerminator)) {
      this.ControlCharMap.set(options.segmentTerminator, ControlChar.SegmentTerminator)
    }
  }
}
