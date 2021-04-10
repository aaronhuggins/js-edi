import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomElement, EdiJsonElement } from './EdiDomElement'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomNode } from './EdiDomTypes'
import type { EdiDomInterchange } from './EdiDomInterchange'
import type { EdiDomGroup } from './EdiDomGroup'
import type { EdiDomMessage } from './EdiDomMessage'

export interface EdiJsonSegment {
  tag: string
  elements: EdiJsonElement[]
}

/** The segment of an EDI document. */
export class EdiDomSegment<T extends string = string> extends EdiDomAbstractNode {
  constructor (tag?: T) {
    super()
    this.nodeType = EdiDomNodeType.Segment
    this.tag = tag ?? ('' as T)
    this.elements = []
  }

  nodeType: EdiDomNodeType.Segment
  parent: EdiDomInterchange | EdiDomGroup | EdiDomMessage
  /** The tag for this node. */
  tag: T
  /** The child elements of this node. */
  elements: EdiDomElement[]
  /** The root of this instance. */
  root: EdiDomRoot

  get innerEDI (): string {
    return this.elements.map(element => element.text).join('')
  }

  get outerEDI (): string {
    const contents = this.tag + this.elements
      .map(element => element.text)
      .join('') +
      this.root.options.segmentTerminator

    if (typeof this.root.options.endOfLine === 'string') {
      return contents + this.root.options.endOfLine
    }

    return contents
  }

  get text (): string {
    return this.outerEDI
  }

  get textContent (): string {
    let content = `BEGIN Segment ${this.tag}\n`

    if (Array.isArray(this.elements) && this.elements.length > 0) {
      for (const element of this.elements) {
        const innerContent = element.textContent.split('\n')

        content += '  ' + innerContent.join('\n  ') + '\n'
      }
    }

    return content + `END Segment ${this.tag}`
  }

  /** Add a child element to this segment, optionally at a given 1-based position. */
  addChildNode (child: EdiDomElement, position?: string | number): void {
    if (child.nodeType === EdiDomNodeType.Element) {
      let index = -1

      relate(child, this, this.root)

      switch (typeof position) {
        case 'number':
          index = position - 1
          break
        case 'string':
          index = parseFloat(position) - 1
          if (Number.isNaN(index)) index = -1
          break
      }

      if (index > -1) {
        this.elements[index] = child

        for (let i = 0; i < index; i += 1) {
          if (typeof this.elements[i] === 'undefined') {
            this.elements[i] = new EdiDomGlobal.Element()
            relate(this.elements[i], this, this.root)
          }
        }
      } else {
        this.elements.push(child)
      }
    }
  }

  /** Get an element at a 1-based position. */
  getChildNode (position: string | number): EdiDomElement {
    const index = typeof position === 'string' ? parseFloat(position) - 1 : position - 1

    return this.elements[index]
  }

  /** Remove an element by instance or 1-based position from this segment. */
  removeChildNode (child: EdiDomElement): void
  removeChildNode (position: string | number): void
  removeChildNode (child: EdiDomElement | string | number): void {
    let element: EdiDomElement

    if (typeof child === 'object') {
      if (child.nodeType === EdiDomNodeType.Element) {
        const index = this.elements.indexOf(child)
        element = child

        if (index > -1) this.elements.splice(index, 1)
      }
    } else {
      const index = typeof child === 'string' ? parseFloat(child) - 1 : child - 1

      if (index > -1) {
        element = this.elements[index]

        this.elements.splice(index, 1)
      }
    }

    if (typeof element === 'object') unrelate(element)
  }

  * walk (): Generator<EdiDomNode> {
    yield this

    for (const element of this.elements) {
      for (const node of element.walk()) {
        yield node
      }
    }
  }

  toJSON (): EdiJsonSegment {
    return {
      tag: this.tag,
      elements: this.elements.map(element => element.toJSON())
    }
  }

  fromJSON (input: EdiJsonSegment): void {
    if ('tag' in input) {
      this.tag = input.tag as T
    }

    if (Array.isArray(input.elements)) {
      this.elements = []

      for (const element of input.elements) {
        const domElement = new EdiDomGlobal.Element()

        domElement.fromJSON(element)
        relate(domElement, this, this.root)
        this.elements.push(domElement)
      }
    }
  }
}

EdiDomGlobal.Segment = EdiDomSegment
