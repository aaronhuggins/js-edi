import { Readable } from 'stream'
import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts'
import { DocumentContext, EdiX12Parser } from './x12/EdiX12Parser'
import { EdiX12Lexer } from './x12/EdiX12Lexer'

export interface EdiParserOpts {
  encoding?: BufferEncoding
  fileName?: string
  ediType?: 'EDIX12' | 'EDIFACT'
  keepInitialListeners?: boolean
  contents: string | Buffer | Readable
}

export class EdiParser {
  constructor (opts: EdiParserOpts) {
    const keepInitialListeners = opts.keepInitialListeners ?? false
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
        break
      case 'EDIX12':
        this.lexer = new EdiX12Lexer(this.charStream)
        this.tokens = new CommonTokenStream(this.lexer)
        this.parser = new EdiX12Parser(this.tokens)
        break
    }

    if (!keepInitialListeners) {
      if (typeof this.parser === 'object') {
        this.parser.removeErrorListeners()
      }
    }
  }

  fileName: string
  private lexer: EdiX12Lexer
  private tokens: CommonTokenStream
  private parser: EdiX12Parser
  private charStream: CharStream
  private encoding: BufferEncoding

  getParser (): EdiX12Parser {
    return this.parser
  }

  parse (): DocumentContext {
    return this.parser.document()
  }
}
