import { EdiDomAbstractNode } from './EdiDomAbstractNode'
import { EdiDomGlobal } from './EdiDomGlobal'
import { containerFromJson, relate, unrelate } from './EdiDomHelpers'
import { EdiDomNodeType } from './EdiDomNodeType'
import type { EdiDomGroup } from './EdiDomGroup'
import type { EdiDomInterchange } from './EdiDomInterchange'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment, EdiJsonSegment } from './EdiDomSegment'
import type { EdiDomNode } from './EdiDomTypes'

export interface EdiJsonMessage {
  header: EdiJsonSegment
  segments: EdiJsonSegment[]
  trailer: EdiJsonSegment
}

/** An EDIFACT UNH message or an X12 ST transaction. */
export class EdiDomMessage extends EdiDomAbstractNode {
  constructor () {
    super()
    this.nodeType = EdiDomNodeType.Message
    this.segments = []
  }

  nodeType: EdiDomNodeType.Message
  parent: EdiDomInterchange | EdiDomGroup
  /** The header of this message. */
  protected _header: EdiDomSegment<'UNH'|'ST'>
  /** The segments contained in this message. */
  segments: EdiDomSegment[]
  /** The root of this instance. */
  root: EdiDomRoot
  /** The trailer of this message. */
  protected _trailer: EdiDomSegment<'UNT'|'SE'>

  /** The header of this message. */
  get header (): EdiDomSegment<'UNH'|'ST'> {
    return this._header
  }

  /** The header of this message. */
  set header (_header: EdiDomSegment<'UNH'|'ST'>) {
    relate(_header, this, this.root)
    this._header = _header
  }

  get innerEDI (): string {
    return this.segments.map(segment => segment.text).join('')
  }

  get outerEDI (): string {
    return this.header.outerEDI + this.innerEDI + this.trailer.outerEDI
  }

  get text (): string {
    return this.outerEDI
  }

  get textContent (): string {
    let content = `BEGIN Message\n`

    if (Array.isArray(this.segments) && this.segments.length > 0) {
      for (const segment of this.segments) {
        const innerContent = segment.textContent.split('\n')

        content += '  ' + innerContent.join('\n  ') + '\n'
      }
    }

    return content + `END Message`
  }

  /** The trailer of this message. */
  get trailer (): EdiDomSegment<'UNT'|'SE'> {
    return this._trailer
  }

  /** The trailer of this message. */
  set trailer (_trailer: EdiDomSegment<'UNT'|'SE'>) {
    relate(_trailer, this, this.root)
    this._trailer = _trailer
  }

  /** Add a segment to this message. */
  addChildNode (child: EdiDomSegment): void {
    if (child.nodeType === EdiDomNodeType.Segment) {
      relate(child, this, this.root)
      this.segments.push(child)
    }
  }

  /** Retrieve the first available segment by tag or by zero-based index. */
  getChildNode (indexOrTag: number | string): EdiDomSegment {
    if (typeof indexOrTag === 'number') {
      return this.segments[indexOrTag]
    } else if (typeof indexOrTag === 'string') {
      return this.segments.find(segment => segment.tag === indexOrTag)
    }
  }

  /** Remove a segment from this message and destroy all descendent relationships to this message. */
  removeChildNode (child: EdiDomSegment): void {
    const index = this.segments.indexOf(child)

    if (index > -1) {
      unrelate(child)
      this.segments.splice(index, 1)
    }
  }

  * walk (): Generator<EdiDomNode> {
    yield this
    if (typeof this.header === 'object') {
      for (const node of this.header.walk()) {
        yield node
      }
    }

    for (const segment of this.segments) {
      for (const node of segment.walk()) {
        yield node
      }
    }

    if (typeof this.trailer === 'object') {
      for (const node of this.trailer.walk()) {
        yield node
      }
    }
  }

  toJSON (): EdiJsonMessage {
    return {
      header: this.header.toJSON(),
      segments: this.segments.map(segment => segment.toJSON()),
      trailer: this.trailer.toJSON()
    }
  }

  fromJSON (input: EdiJsonMessage): void {
    this.segments = []

    containerFromJson(this, input, () => {
      if (Array.isArray(input.segments)) {
        this.segments = []
  
        for (const segment of input.segments) {
          const domSegment = new EdiDomGlobal.Segment()
  
          domSegment.fromJSON(segment)
          relate(domSegment, this, this.root)
          this.segments.push(domSegment)
        }
      }
    })
  }
}

EdiDomGlobal.Message = EdiDomMessage
EdiDomGlobal.Transaction = EdiDomMessage
