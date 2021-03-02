import * as shell from 'gulp-shell'
import * as del from 'del'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { series } from 'gulp'

export async function cleanup (): Promise<void> {
  await del([
    '**/*.d.ts',
    '**/*.js',
    '**/*.js.map'
  ], {
    ignore: ['**/node_modules/**']
  })
}

export async function lint (): Promise<void> {
  await shell.task('ts-standard --report codeframe')()
}

export async function fix (): Promise<void> {
  await shell.task('ts-standard --fix --report codeframe')()
}

export async function mocha (): Promise<void> {
  await shell.task('mocha')()
}

export async function nyc (): Promise<void> {
  await shell.task('nyc mocha')()
}

export const test = series(cleanup, mocha)
export const coverage = series(cleanup, nyc)

export async function antlr4ts (): Promise<void> {
  const lexerX12ClassPath = 'src/x12/EdiX12Lexer.ts'
  const lexerX12ImportRx = /import \{ X12BaseLexer \} from ['"]\.\/X12BaseLexer['"]/gu
  const lexerX12ImportStatment = "import { X12BaseLexer } from './X12BaseLexer'\n"

  await shell.task(['antlr4ts -visitor grammar/EdiX12Lexer.g4 grammar/EdiX12Parser.g4 -o src/x12'])()

  if (existsSync(lexerX12ClassPath)) {
    const contents: string = readFileSync(lexerX12ClassPath, 'utf8')

    if (!lexerX12ImportRx.test(contents)) {
      writeFileSync(
        lexerX12ClassPath,
        lexerX12ImportStatment + contents
      )
    }
  }
}
