import { strictEqual } from 'assert'
import { readFileSync } from 'fs'
import { EdiParser } from '../src/EdiParser'

describe('EdiParser', () => {
  it('should parse', () => {
    const fileName = './test/data/850_fat.edi'
    const contents = readFileSync(fileName)
    const parser = new EdiParser({
      ediType: 'EDIX12',
      keepInitialListeners: false,
      throwOnError: true,
      fileName,
      contents
    })
    console.time('parse')
    const result = parser.parse()
    console.timeEnd('parse')

    strictEqual(typeof result, 'object')
  })
})
