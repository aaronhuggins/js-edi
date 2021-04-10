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
    (element|repitition)+
  segmentEnd;

// Segment header and trailer statements.
interchangeHeader:
  InterchangeHeader
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
    interchangeElement
  segmentEnd;

interchangeTrailer:
  InterchangeTrailer
    strictElement
    strictElement
  segmentEnd;

groupHeader:
  GroupHeader
    strictElement
    strictElement
    strictElement
    strictElement
    strictElement
    strictElement
    strictElement
    strictElement
  segmentEnd;

groupTrailer:
  GroupTrailer
    strictElement
    strictElement
  segmentEnd;

transactionHeader:
    (
    TransactionHeader
      strictElement
      strictElement
      strictElement
    segmentEnd
    )
  | (
    TransactionHeader
      strictElement
      strictElement
    segmentEnd
    );

transactionTrailer:
  TransactionTrailer
    strictElement
    strictElement
  segmentEnd;

// X12 components.
segmentEnd: ControlChar ControlChar | ControlChar | SegmentTerminator EndOfLine | SegmentTerminator;

repitition: element repeatedElement+;
element: DataSeparator (value|component)*;

interchangeElement: dataCharElement | strictElement | repititionCharElement | componentCharElement;
strictElement: DataSeparator value+;
dataCharElement: (ControlChar | DataSeparator) value+;
repititionCharElement: DataSeparator (ControlChar | RepititionSeparator | value);
componentCharElement: DataSeparator (ControlChar | ComponentSeparator);

repeatedElement: RepititionSeparator (value|component)*;

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
