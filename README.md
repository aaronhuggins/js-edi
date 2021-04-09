# JS-EDI

Work in progress, not fit for production use. Parser for both EDIX12 and EDIFACT leveraging Antlr4 grammar.

If I could call it J-EDI, I would. May the force be with you.

# Features

- Support for EDI X12 and EDIFACT
- Parse natively in JS to a document object model (DOM)
- Generate from a constructed dom
- Query the dom using element selectors
- Traverse as a hierarchical dom
- Transform to and from JS objects
- Serialize to and from JSON EDI notation
- Validate parsed EDI using JSON Schema

# What's done prior to alpha so far

- EDI X12 support; parser in antlr4ts is fully functional, detects component and repeated elements
- Document object model, supports detecting difference between EDI flavors and complexe nodes
- Validator, works with the DOM to be able to validate a document with JSON Schema

# Known TO-DOs

## Before alpha release
- Finish implementing element selector query language.
- Complete initial documentation

## Before beta release
- Improve accuracy of parsing/handling EDIFACT
  - Better service string advice detection
  - Conform to EDIFACT standard with "release indicator"
  - Conform to EDIFACT charactar sets better (technically only UNOA and UNOB supported for now)

## Before release candidate
- Add custom eventing in document parser
  - Events for each node type generated
  - on errors
  - on parse start and stop
- Stabilize 
- Finish writing tests

# Roadmap
- Complete EDIFACT support and optimize grammar
- Stabilize all APIs
- Expose listener APIs
- Write examples
- Make tests more broadly specific to the parsing of grammars(??)
