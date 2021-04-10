parser grammar EdiFactParser;

options {
  tokenVocab=EdiFactLexer ;
}

// The document root.
document: interchange+;

// Document structure
interchange:
  serviceStringAdvice
  interchangeHeader
    (group+ | message+)
  interchangeTrailer;

group:
  groupHeader
    message+
  groupTrailer;

message:
  messageHeader
    segment+
  messageTrailer;

segment:
  Tag
    element+
  segmentEnd;

serviceStringAdvice:
  SvcStringAdvice
    ControlChar
    ControlChar
    ControlChar
    ControlChar
    ControlChar
  segmentEnd;

// Segment header and trailer statements.
interchangeHeader:
  InterchangeHeader
    element+
  segmentEnd;

interchangeTrailer:
  InterchangeTrailer
    element+
  segmentEnd;

groupHeader:
  GroupHeader
    element+
  segmentEnd;

groupTrailer:
  GroupTrailer
    element+
  segmentEnd;

messageHeader: MessageHeader element+ segmentEnd;

messageTrailer: MessageTrailer element+ segmentEnd;

// EDIFACT components.
segmentEnd: ControlChar ControlChar | ControlChar | SegmentTerminator EndOfLine | SegmentTerminator;

element: DataSeparator (value|component|repitition)*;

repitition: (value|component)* (RepititionSeparator (value|component)*)+;

component: value* (ComponentSeparator value*)+;

value: 
    Tag
  | Char
  | NonPrintable
  | SvcStringAdvice
  | InterchangeHeader
  | InterchangeTrailer
  | GroupHeader
  | GroupTrailer
  | MessageHeader
  | MessageTrailer;
