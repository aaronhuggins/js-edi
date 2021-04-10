import { EdiDomGlobal } from './EdiDomGlobal'
import type { EdiDomGroup } from './EdiDomGroup'
import type { EdiDomInterchange } from './EdiDomInterchange'
import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomSegment } from './EdiDomSegment'
import type { EdiDomContainer, EdiDomNode, ElementChild } from './EdiDomTypes'

/** Method for relating a child, parent, and root node. */
export function relate (child: EdiDomNode, parent: typeof child['parent'], root: EdiDomRoot): void {
  child.parent = parent

  for (const node of child.walk()) {
    node.root = root
  }
}

/** Method to destroy the relationship of a child to its parent and root nodes. */
export function unrelate (child: EdiDomNode): void {
  child.parent = undefined

  for (const node of child.walk()) {
    node.root = undefined
  }
}

/** Method for narrowing the type of array of nodes. */
export function isArrayType <T extends ElementChild> (array: any[], compare: T): array is T[] {
  return array.length === 0 || array[0].nodeType === compare.nodeType
}

export function containerFromJson <R extends EdiDomContainer, D extends Record<string, any>> (recipient: R, donor: D, assignChildren: () => void): void {
  const genericSegment = (donorData: any): EdiDomSegment<any> => {
    const domSegment = new EdiDomGlobal.Segment<any>()

    domSegment.fromJSON(donorData)

    return domSegment
  }

  if ('header' in donor) {
    recipient.header = genericSegment(donor.header)
  }

  assignChildren()

  if ('trailer' in donor) {
    recipient.trailer = genericSegment(donor.trailer)
  }
}

export function assignMessagesFromJson (recipient: EdiDomInterchange | EdiDomGroup, donor: Record<string, any>): void {
  if (Array.isArray(donor.messages) && donor.messages.length > 0) {
    for (const message of donor.messages) {
      const domMessage = new EdiDomGlobal.Message()

      domMessage.fromJSON(message)
      relate(domMessage, recipient, recipient.root)
      recipient.messages.push(domMessage)
    }
  }
}

export function messagesAsContent (node: EdiDomInterchange | EdiDomGroup): string {
  let content = ''

  if (Array.isArray(node.messages) && node.messages.length > 0) {
    for (const message of node.messages) {
      const innerContent = message.textContent.split('\n')

      content += '  ' + innerContent.join('\n  ') + '\n'
    }
  }

  return content
}