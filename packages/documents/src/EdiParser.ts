import { CharStream, CommonTokenStream, RecognitionException, Recognizer } from 'antlr4ts'
import { EdiX12Lexer, EdiX12Parser } from '@js-edi/x12'
import { EdiFactLexer, EdiFactParser } from '@js-edi/fact'
import { BaseCharStreams } from '@js-edi/shared'
import { EdiDomX12Listener } from './EdiDomX12Listener'
import type { Readable } from 'stream'
import type { DocumentContext as EdiFactDocumentContext } from '@js-edi/fact'
import type { DocumentContext as EdiX12DocumentContext } from '@js-edi/x12'
import type { EdiDomRoot } from '@js-edi/dom'

export type DocumentContext = EdiX12DocumentContext | EdiFactDocumentContext
export type EdiCustomLexer = EdiX12Lexer | EdiFactLexer
export type EdiCustomParser = EdiX12Parser | EdiFactParser

export type EdiDomListener = EdiDomX12Listener

export interface EdiParserOpts {
  encoding?: BufferEncoding
  fileName?: string
  ediType?: 'EDIX12' | 'EDIFACT'
  keepInitialListeners?: boolean
  throwOnError?: boolean
  contents: string | Buffer
}

export class EdiParser {
  /** Create an asynchronous parser for a readable stream. */
  constructor ()
  /** Create a synchronous parser for a string or buffer. */
  constructor (opts: EdiParserOpts)
  constructor (opts?: EdiParserOpts) {
    this.encoding = opts.encoding ?? 'utf8'
    this.fileName = opts.fileName ?? 'document.edi'
    this.parsed = false

    if (typeof opts.contents === 'string') {
      this.charStream = BaseCharStreams.fromString(opts.contents, this.fileName)
      this.createParser(opts)
    } else if (Buffer.isBuffer(opts.contents)) {
      this.charStream = BaseCharStreams.fromNodeBuffer(opts.contents, this.encoding, this.fileName)
      this.createParser(opts)
    }
  }

  fileName: string
  private listener: EdiDomListener
  private lexer: EdiCustomLexer
  private tokens: CommonTokenStream
  private parser: EdiCustomParser
  private charStream: CharStream
  private encoding: BufferEncoding
  private parsed: boolean

  private createParser (opts: Omit<EdiParserOpts, 'contents'>) {
    const keepInitialListeners = opts.keepInitialListeners ?? false
    const throwOnError = opts.throwOnError ?? false

    switch (opts.ediType) {
      case 'EDIFACT':
        this.lexer = new EdiFactLexer(this.charStream)
        this.tokens = new CommonTokenStream(this.lexer)
        this.parser = new EdiFactParser(this.tokens)
        break
      case 'EDIX12':
      default:
        this.listener = new EdiDomX12Listener()
        this.lexer = new EdiX12Lexer(this.charStream)
        this.tokens = new CommonTokenStream(this.lexer)
        this.parser = new EdiX12Parser(this.tokens)
        this.parser.addParseListener(this.listener)
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

  /** Get the internal parser instance. */
  getParser (): EdiCustomParser {
    return this.parser
  }

  /** Synchronously parse to return an ANTLR4 ParseTree. */
  parse (): DocumentContext {
    const tree = this.parser.document()
    this.parsed = true

    return tree
  }

  /** Asynchronously parse a Node Readable stream. */
  async parseReadable (readable: Readable, opts: Omit<EdiParserOpts, 'contents'>): Promise<DocumentContext> {
    this.encoding = opts.encoding ?? 'utf8'
    this.fileName = opts.fileName ?? 'document.edi'
    this.parsed = false
    this.charStream = await BaseCharStreams.fromNodeReadable(readable, this.encoding, this.fileName)

    this.createParser(opts)

    const tree = this.parser.document()
    this.parsed = true

    return tree
  }

  /**
   * Synchronously parse to return an EDI DOM root; will simply return the DOM if `parse` or `parseReadable` have already been called.
   * If the parser has not been instantiated with options or `parseReadable` has not finished, this will return undefined.
   */
  documentRoot (): EdiDomRoot {
    if (!this.parsed && typeof this.parser === 'object') this.parse()

    if (typeof this.listener === 'object') return this.listener.root
  }
}
