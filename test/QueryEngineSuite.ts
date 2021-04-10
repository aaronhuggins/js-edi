import { readFileSync } from 'fs'
import { EdiParser } from '../packages/documents/index'
import { strictEqual } from 'assert'
import type { EdiDomSegment } from '../packages/dom/index'

const parseLabel = '    query duration'
const parser = new EdiParser({
  throwOnError: true,
  contents: readFileSync('./test/data/856.edi', 'utf8')
})

describe('QueryEngine', () => {
  before(() => {
    parser.parse()
  })

  it('should query a single result', () => {
    const document = parser.documentRoot()
    console.time(parseLabel)
    const result = document.querySelector('GS01')
    console.timeEnd(parseLabel)

    strictEqual(result.nodeType, 'Element')
  })

  it('should query multiple results', () => {
    const document = parser.documentRoot()
    console.time(parseLabel)
    const result = document.querySelectorAll('REF01')
    console.timeEnd(parseLabel)

    strictEqual(result.size, 2)
  })

  it('should query results starting at current node', () => {
    const document = parser.documentRoot()
    const group = document.interchanges[0].groups[0]

    console.time(parseLabel)
    const result = group.querySelector('REF01')
    console.timeEnd(parseLabel)

    strictEqual(result.nodeType, 'Element')

    console.time(parseLabel)
    const result2 = group.querySelector('ISA01')
    console.timeEnd(parseLabel)

    strictEqual(typeof result2, 'undefined')

    console.time(parseLabel)
    const result3 = document.querySelector('ISA01')
    console.timeEnd(parseLabel)

    strictEqual(typeof result3, 'object')
  })

  it('should query for interchanges', () => {
    const document = parser.documentRoot()

    console.time(parseLabel)
    const result = document.querySelector('Interchange')
    console.timeEnd(parseLabel)

    strictEqual(result.nodeType, 'Interchange')
  })

  it('should query for all nodes', () => {
    const document = parser.documentRoot()

    console.time(parseLabel)
    const result = document.querySelector('All')
    console.timeEnd(parseLabel)

    strictEqual(result.nodeType, 'Root')
  })

  it('should query for segments by tag', () => {
    const document = parser.documentRoot()

    console.time(parseLabel)
    const result = document.querySelector<EdiDomSegment>('HL')
    console.timeEnd(parseLabel)

    strictEqual(result.nodeType, 'Segment')
    strictEqual(result.tag, 'HL')
  })

  it('should query for element by parent segment path', () => {
    const document = parser.documentRoot()

    console.time(parseLabel)
    const result = document.querySelector('GS-ST-BSN03')
    console.timeEnd(parseLabel)

    strictEqual(result.nodeType, 'Element')
  })

  it('should query for element by hierarchical level', () => {
    const document = parser.documentRoot()

    console.time(parseLabel)
    const result = document.querySelector('HL+S+O+I-PO4-PID05')
    console.timeEnd(parseLabel)

    strictEqual(result.nodeType, 'Element')

    console.time(parseLabel)
    const result2 = document.querySelector('HL+S+O+I-PO401')
    console.timeEnd(parseLabel)

    strictEqual(result2.nodeType, 'Element')

    console.time(parseLabel)
    const result3 = document.querySelector('HL+S+O+I-HL03')
    console.timeEnd(parseLabel)

    strictEqual(result3.nodeType, 'Element')
  })

  it('should query for element by loop context', () => {
    const document = parser.documentRoot()

    console.time(parseLabel)
    const result = document.querySelector('N1^N4-N301')
    console.timeEnd(parseLabel)

    strictEqual(result.nodeType, 'Element')

    console.time(parseLabel)
    const result2 = document.querySelector('N1^N4-N1-N301')
    console.timeEnd(parseLabel)

    strictEqual(result2.nodeType, 'Element')
  })
})
