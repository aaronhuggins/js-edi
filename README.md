# JS-EDI

Work in progress, not fit for production use. Parser for both EDIX12 and EDIFACT leveraging Antlr4 grammar.

If I could call it J-EDI, I would. May the force be with you.

# Known TO-DOs

- Finish implementing element selector query language.
- Improve accuracy of parsing/handling EDIFACT
  - Better service string advice detection
  - Conform to EDIFACt standard with "release indicator"
  - Conform to EDIFACT charactar sets better (technically only UNOA and UNOB supported for now)
- Address custom eventing in document parser
- Probably more

# Roadmap
- Complete EDIFACT support and optimize grammar
- Stabilize all APIs
- Expose listener APIs
- Write examples
- Make tests more broadly specific to the parsing of grammars(??)
