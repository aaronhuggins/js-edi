# edi-parser

Work in progress, not fit for production use. Parser for both EDIX12 and EDIFACT leveraging Antlr4 grammar.

# Known TO-DOs
- Stabilize "base lexer" class API
  - Use enums for consistency
  - Provide method for setting own options
  - Address custom eventing
- Implement CharStream class for Node Readable streams
- Improve support for defining input encoding(s)
- Improve accuracy of parsing/handling EDIFACT
  - Better service string advice detection
  - Conform to EDIFACt standard with "release indicator"
  - Conform to EDIFACT charactar sets better (technically only UNOA and UNOB supported for now)
- Probably more

# Roadmap
- Complete EDIFACT support and optimize grammar
- Stabilize all APIs
- Expose listener APIs
- Write examples
- Make tests more broadly specific to the parsing of grammars(??)