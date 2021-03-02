import { strictEqual } from 'assert'
import { readFileSync } from 'fs'
import { EdiParser } from '../src/EdiParser'

describe('EdiParser', () => {
  it('should parse', () => {
    const fileName = './test/data/850.edi'
    const contents = readFileSync(fileName)
    const parser = new EdiParser({
      ediType: 'EDIX12',
      fileName,
      contents
    })
    const result = parser.parse()

    strictEqual(typeof result, 'object')
  })
})