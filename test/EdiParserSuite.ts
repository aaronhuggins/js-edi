import { strictEqual, throws } from 'assert'
import { readFileSync } from 'fs'
import { EdiParser } from '../packages/documents/index'

const parseLabel = '    parse duration'

describe('EdiParser', () => {
  it('should construct an instance', () => {
    const fake = ''
    const result1 = new EdiParser({
      encoding: 'ascii',
      keepInitialListeners: true,
      contents: fake
    })
    const parser1 = result1.getParser()

    strictEqual(result1 instanceof EdiParser, true)
    strictEqual(typeof parser1, 'object')

    const result2 = new EdiParser({
      // Fake a readable to follow a code path, we're not really going to use it for now.
      contents: {} as any,
      ediType: 'EDIFACT'
    })
    const parser2 = result2.getParser()

    strictEqual(result2 instanceof EdiParser, true)
    strictEqual(typeof parser2, 'object')
  })

  it('should parse an EDIFACT document', () => {
    const fileName = './test/data/EdifactSample.edi'
    const contents = readFileSync(fileName)
    const parser = new EdiParser({
      ediType: 'EDIFACT',
      keepInitialListeners: false,
      throwOnError: true,
      fileName,
      contents
    })
    console.time(parseLabel)
    const result = parser.parse()
    console.timeEnd(parseLabel)

    // Document successfully returned.
    strictEqual(typeof result, 'object')
    // Parsed document tree matches original input.
    strictEqual(result.text, contents.toString('utf8'))
  })

  it('should parse a complex EDIX12 version 5010 document', () => {
    const fileName = './test/data/271.edi'
    const contents = readFileSync(fileName)
    const parser = new EdiParser({
      ediType: 'EDIX12',
      keepInitialListeners: false,
      throwOnError: true,
      fileName,
      contents
    })
    console.time(parseLabel)
    const result = parser.documentRoot()
    console.timeEnd(parseLabel)

    // Document successfully returned.
    strictEqual(typeof result, 'object')
    // Parsed document tree matches original input.
    strictEqual(result.text, contents.toString('utf8'))
  })

  it('should parse an EDIX12 version 4010 document and return a matching EDI DOM', () => {
    const fileName = './test/data/850_2.edi'
    const contents = readFileSync(fileName)
    const parser = new EdiParser({
      ediType: 'EDIX12',
      keepInitialListeners: false,
      throwOnError: true,
      fileName,
      contents
    })
    console.time(parseLabel)
    const result = parser.parse()
    console.timeEnd(parseLabel)

    const document = parser.documentRoot()

    // Document successfully returned.
    strictEqual(typeof result, 'object')
    // Parsed document tree matches original input.
    strictEqual(result.text, contents.toString('utf8'))
    // Constructed EDI DOM matches original input.
    strictEqual(document.text, contents.toString('utf8'))
  })

  it('should parse an EDIX12 fat document', () => {
    const fileName = './test/data/850_fat.edi'
    const contents = readFileSync(fileName, 'utf8')
    const parser = new EdiParser({
      ediType: 'EDIX12',
      keepInitialListeners: false,
      throwOnError: true,
      fileName,
      contents
    })
    console.time(parseLabel)
    const result = parser.parse()
    console.timeEnd(parseLabel)

    // Document successfully returned.
    strictEqual(typeof result, 'object')
    // Parsed document tree matches original input.
    strictEqual(result.text, contents)
  })

  it('should error on an incomplete document', () => {
    const fileName = './test/data/856.edi'
    const contents = readFileSync(fileName).slice(0,300)
    const parser = new EdiParser({
      ediType: 'EDIX12',
      keepInitialListeners: false,
      throwOnError: true,
      fileName,
      contents
    })
    throws(() => {
      parser.parse()
    })
  })
})
