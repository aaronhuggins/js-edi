# Element Selector Query Language

Element selectors define the nodes to which a query applies. Results are returned inclusively for descendants of the node which was queried.

> Note: There are no selectors or combinators to select parent nodes, siblings of parents, or children of parent siblings

## Basic Selectors

### Universal selector
- Selects all nodes.
- **Syntax**: `*` | `All`
- **Example**: `*` will match all nodes of the document.

### Type selector
- Selects all nodes of the given node type.
- **Syntax**: `Typename`
- **Example**: `Segment` will match any EdiDomSegment node.

### Segment Tag selector
- Selects all nodes of the given tag name.
- **Syntax**: `TAG`
- **Example**: `REF` will match any node with the tag of "REF".

### Element Reference selector
- Selects all element nodes matching the reference.
- **Syntax**: `TAG##`
- **Example**: `ST01` will match any element node in segment "ST" at position "01"

## Element Value Selectors
### Element Reference Value selector
- Selects all element nodes matching the reference and which equals the value.
- **Syntax**: `TAG##['VALUE']` Single or duoble quotes are permitted.
- **Example**: `N102['Kai']` will match any element node which strictly equals the word "Kai".

### Element Reference Not Value selector
- Selects all element nodes matching the reference and which do not equal the value.
- **Syntax**: `TAG##!['VALUE']` Single or duoble quotes are permitted.
- **Example**: `N102!['Kai']` will match any element node containing the word "Kai".

### Element Reference Contains Value selector
- Selects all element nodes matching the reference and which contains the value.
- **Syntax**: `TAG##*['VALUE']` Single or duoble quotes are permitted.
- **Example**: `N102*['Kai']` will match any element node containing the word "Kai".

## Path Selectors

### Parent Segment selector
- Selects all element nodes matching the given path of preceding segment tags. Ends with an **Element Reference selector**.
- **Syntax**: `TAG...[-TAG]-TAG##`
- **Example**: `BEG-REF-REF02` will match the element reference at "REF02" which is preceded, in order, by segment BEG and segment REF.

### Hierarchical Level selector
- Selects all element nodes matching the given path through a hierarchical tree in the DOM. Ends with **Parent Segment selector** or **Element Reference selector**.
- **Syntax**: `HL+CODE...[+CODE]-TAG##` | `HL+CODE...[+CODE]-TAG...[-TAG]-TAG##`
- **Example**: `HL+S+O+P+I-PID05` will match the element reference in the "I" of a "SOPI" hierarchical level tree.

### Loop selector
- Selects all element nodes inclusively within the matching loop start and end. Ends with **Parent Segment selector** or **Element Reference selector**.
- **Syntax**: `START^END-TAG##` | `START^END-TAG...[-TAG]-TAG##`
- **Example**: `LS^LE-REF-PID01` will match the element reference between segments "LS" and "LE at "PID01" which is preceded by segment REF.

## Combinator Selectors

### Sibling selector
- Selects an element reference sibling to an element reference value.
- **Syntax**: Selector `:` Value
  - The left-hand side must be strictly an **Element Reference selector** or any of the **Path Selectors**.
  - The right-hand side may be an **Element Reference selector** or any of the **Element Value Selectors**
- **Example**: `N102:N101['SH']` will match any "N102" where its sibling "N101" equals the value "SH".

### Adjacent selector
- Selects an element reference contextually adjacent to an element reference value.
- **Syntax**: Selector `~` Value
  - The left-hand side must be strictly an **Element Reference selector** or any of the **Path Selectors**.
  - The right-hand side may be an **Element Reference selector** or any of the **Element Value Selectors**
- **Example**: `HL+S+O+P+I-LIN03~PID05*['blue']` will match any "LIN03" within a hierarchical level "I" where an adjacent "PID05" contains the word "blue".

### Precedent selector
- Selects an element reference contextually preceded by an element reference value.
- **Syntax**: Selector `?` Value
  - The left-hand side must be strictly an **Element Reference selector** or any of the **Path Selectors**.
  - The right-hand side may be an **Element Reference selector** or any of the **Element Value Selectors**
- **Example**: `N1^N4-N403?N101['SH']` will match any "N403" within a loop where a preceding "N101" within the loop equals the value "SH".
