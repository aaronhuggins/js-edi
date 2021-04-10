import Ajv from 'ajv'
import * as EdiDomSchema from './edi-dom.schema.json'
import type { ValidateFunction, SchemaObject, ErrorObject } from 'ajv'

export class EdiDomValidator {
  constructor () {
    this._ajv = new Ajv({
      allErrors: true
    })
  }

  private readonly _ajv: Ajv
  private _validator: ValidateFunction

  get errors (): ErrorObject[] {
    if (Array.isArray(this._validator.errors)) {
      return this._validator.errors
    }

    return []
  }

  private compile (schema?: SchemaObject): void {
    this._validator = this._ajv.compile(schema ?? EdiDomSchema)
  }

  validate <T = unknown> (object: T, schema?: SchemaObject): object is T {
    if (typeof schema === 'object') {
      if (typeof schema.definitions === 'object') {
        schema.definitions = {
          ...EdiDomSchema.definitions,
          ...schema.definitions
        }
      } else {
        schema.definitions = EdiDomSchema.definitions
      }
    }

    this.compile(schema)

    return this._validator(object)
  }
}
