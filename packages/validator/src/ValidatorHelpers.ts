import type { EdiDomNode } from '@js-edi/dom'
import type { SchemaObject } from 'ajv'
import { EdiDomValidator } from './EdiDomValidator'

/** Helper function for validating a parsed EDI DOM or JSON EDI notation against a JSON Schema. */
export function ediDomValidate<T extends EdiDomNode = any> (object: any, schema?: SchemaObject): object is T {
  const validator = new EdiDomValidator()

  return validator.validate<T>(object, schema)
}
