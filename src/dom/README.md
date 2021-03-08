# Electronic Data Interchange Document Object Model

Data exchanged via Electronic Data Interchange (EDI) formats uses a hierarchical model. This lends itself to being expressed as a document tree, much like a markup language would. This readme describes the Document Object Model (DOM) provided by this library.

## DOM Hierarchy

1. All documents begin with a single Root.
2. All roots contain options for reconstructing the document, and at least one Interchange.
3. An interchange consists of either at least one Group, or (in the case of EDIFACT) at least one Message.
4. A group consists of at least one Message.
5. A message consists of at least one Segment.
6. A segment consists of zero or more Elements.
7. An element consists of one or more repeated elements, a Component value, or a Value.
8. A component value consists of one or more Values
9. A value consists of a single `string` and is the base node of the DOM.

## Method and data expectations in the DOM

### Rules

1. No `null` values.
2. No missing methods.
3. Always return a legal value, `undefined`, or throw an `Error`.
4. No side-effects
5. All nodes provide a `text` property

### Expectations

This means developers should expect:

- Non-existent, non-primitive values return `undefined`.
  > JavaScript `null` values are prohibited in the DOM.
- Primitive `string` data return an empty `''` string by default.
  > Null, undefined, NaN, etc. are prohibited for emppty data.
- Methods in the DOM exist and can be called on any node.
  > Return `undefined` for missing, non-existent, non-primitive values, or an empty `string` for missing data.
- An unexpected or malformed DOM will throw an `Error` to prevent undesired side-effects.
  > All scenarios during DOM construction not meeting expectations should throw.
- A single node can be re-serialized simply by accessing the `text` getter on the node.
  > This means the document root can implicitly provide the entire contents in EDIFACT or EDIX12 format.
