# JS-EDI X12 parser library

Library `@js-edi/x12` implements a fully-functional parser for ASC X12-flavored EDI documents. The parser is written in ANTLR4 and generated to pure TypeScript suitable for use in other TypeScript and JavaScript projects. This parser produces a raw Antlr `ParseTree` instance; if you are looking to parse to a document object model, use `@js-edi/documents` instead.

## Usage

Install from npm and then:

```TypeScript
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { EdiX12Lexer, EdiX12Parser } from '@js-edi/x12'

const ediFile = fs.readFileSync('my-x12-file.edi', 'utf8')
const inputStream = CharStreams.fromString(ediFile)
const lexer = new EdiX12Lexer(inputStream)
const tokenStream = new CommonTokenStream(lexer)
const parser = new EdiX12Parser(tokenStream)
const tree = parser.document()
```
