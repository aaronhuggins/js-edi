parser grammar EdiX12Parser;

options {
  tokenVocab = EdiX12Lexer ;
}

document: interchange+;

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

interchangeHeader: InterchangeHeader element+ segmentEnd;
interchangeTrailer: InterchangeTrailer element+ segmentEnd;

groupHeader: GroupHeader element+ segmentEnd;
groupTrailer: GroupTrailer element+ segmentEnd;

transactionHeader: TransactionHeader element+ segmentEnd;
transactionTrailer: TransactionTrailer element+ segmentEnd;

segmentEnd: SegmentTerminator | SegmentTerminator EndOfLine;

element: DataSeparator (value|component|repitition)+;

repitition: (value|component) (RepititionSeparator (value|component))+;

component: value (ComponentSeparator value)+;

value: Numeric | Decimal | String | Binary | NonPrintable;
