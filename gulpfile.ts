import * as shell from 'gulp-shell'
import { existsSync, readFileSync, writeFileSync } from 'fs'

export async function antlr4ts () {
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
