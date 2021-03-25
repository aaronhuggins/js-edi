import type { EdiDomRoot } from './EdiDomRoot'
import type { EdiDomNode, ElementChild } from './EdiDomTypes'

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
export function isArrayType <T extends ElementChild> (array: any[], compare: T): array is Array<T> {
  return array.length === 0 || array[0].nodeType === compare.nodeType
}
