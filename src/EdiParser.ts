import { Readable } from 'stream'
import { CharStream, CharStreams, CommonTokenStream, RecognitionException, Recognizer } from 'antlr4ts'
import { EdiX12Lexer } from './x12/EdiX12Lexer'
import { DocumentContext as EdiX12DocumentContext, EdiX12Parser } from './x12/EdiX12Parser'
import { EdiFactLexer } from './fact/EdiFactLexer'
import { DocumentContext as EdiFactDocumentContext, EdiFactParser } from './fact/EdiFactParser'

export type DocumentContext = EdiX12DocumentContext | EdiFactDocumentContext
export type EdiCustomLexer = EdiX12Lexer | EdiFactLexer
export type EdiCustomParser = EdiX12Parser | EdiFactParser

export interface EdiParserOpts {
  encoding?: BufferEncoding
  fileName?: string
  ediType?: 'EDIX12' | 'EDIFACT'
  keepInitialListeners?: boolean
  throwOnError?: boolean
  contents: string | Buffer | Readable
}

export class EdiParser {
  constructor (opts: EdiParserOpts) {
    const keepInitialListeners = opts.keepInitialListeners ?? false
    const throwOnError = opts.throwOnError ?? false
    this.encoding = opts.encoding ?? 'utf8'
    this.fileName = opts.fileName ?? 'document.edi'

    if (typeof opts.contents === 'string') {
      this.charStream = CharStreams.fromString(opts.contents, this.fileName)
    } else if (Buffer.isBuffer(opts.contents)) {
      this.charStream = CharStreams.fromString(opts.contents.toString(this.encoding), this.fileName)
    } else {
      // TODO: Write CharStreams implementation to handle a Node ReadableStream.
    }

    switch (opts.ediType) {
      case 'EDIFACT':
        this.lexer = new EdiFactLexer(this.charStream)
        this.tokens = new CommonTokenStream(this.lexer)
        this.parser = new EdiFactParser(this.tokens)
        break
      case 'EDIX12':
      default:
        this.lexer = new EdiX12Lexer(this.charStream)
        this.tokens = new CommonTokenStream(this.lexer)
        this.parser = new EdiX12Parser(this.tokens)
        break
    }

    if (typeof this.parser === 'object') {
      if (!keepInitialListeners) {
        this.parser.removeErrorListeners()
      }

      if (throwOnError) {
        this.parser.addErrorListener({
          syntaxError<T = any>(
            recognizer: Recognizer<T, any>,
            offendingSymbol: T,
            line: number,
            charPositionInLine: number,
            msg: string,
            e?: RecognitionException
          ): void {
            throw new Error(`line ${line}:${charPositionInLine} ${msg}`)
          }
        })
      }
    }
  }

  fileName: string
  private readonly lexer: EdiCustomLexer
  private readonly tokens: CommonTokenStream
  private readonly parser: EdiCustomParser
  private readonly charStream: CharStream
  private readonly encoding: BufferEncoding

  getParser (): EdiCustomParser {
    return this.parser
  }

  parse (): DocumentContext {
    return this.parser.document()
  }
}
