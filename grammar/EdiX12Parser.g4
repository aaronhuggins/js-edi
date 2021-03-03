parser grammar EdiX12Parser;

options {
  tokenVocab = EdiX12Lexer ;
}

// The document root.
document: interchange+;

// Document structure
interchange:
  interchangeHeader
    group+
  interchangeTrailer;

group:
  groupHeader
    transaction+
  groupTrailer;

transaction:
  transactionHeader
    segment+
  transactionTrailer;

segment:
  Tag
    element+
  segmentEnd;

// Segment header and trailer statements.
interchangeHeader:
  InterchangeHeader
    (ControlChar | DataSeparator) value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator (ControlChar | RepititionSeparator | value)
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator (ControlChar | ComponentSeparator)
  segmentEnd;

interchangeTrailer:
  InterchangeTrailer
    DataSeparator value+
    DataSeparator value+
  segmentEnd;

groupHeader:
  GroupHeader
    DataSeparator value*
    DataSeparator value+
    DataSeparator value+
    DataSeparator value*
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
    DataSeparator value+
  segmentEnd;

groupTrailer:
  GroupTrailer
    DataSeparator value+
    DataSeparator value+
  segmentEnd;

transactionHeader:
    (
    TransactionHeader
      DataSeparator value+
      DataSeparator value+
      DataSeparator value+
    segmentEnd
    )
  | (
    TransactionHeader
      DataSeparator value+
      DataSeparator value+
    segmentEnd
    );

transactionTrailer:
  TransactionTrailer
    DataSeparator value+
    DataSeparator value+
  segmentEnd;

// X12 components.
segmentEnd: ControlChar ControlChar | ControlChar | SegmentTerminator EndOfLine | SegmentTerminator;

element: DataSeparator (value|component|repitition)*;

repitition: (value|component)* (RepititionSeparator (value|component)*)+;

component: value* (ComponentSeparator value*)+;

value: 
    Tag
  | Char
  | NonPrintable
  | InterchangeHeader
  | InterchangeTrailer
  | GroupHeader
  | GroupTrailer
  | TransactionHeader
  | TransactionTrailer;
