# JS-EDI Document Validator

Library `@js-edi/validator` takes an EDI Document Object Model or JSON EDI Notation (JSEN) and validates the document against JSON Schema. The schema which ships in this library will do a minimal check to make sure that a given document meets the bare minimum criteria for being an EDI document. It can be extended so that full segments and elements in a document may be validated using JSON Schema provided by the user.

## Usage

Install from npm and then:

```TypeScript
import { ediDomValidate } from '@js-edi/validator'

const text = fs.readFileSync('my-edi-dom.json', 'utf8')
const jsen = JSON.parse(text)
const valid = ediDomValidate(jsen)
```
