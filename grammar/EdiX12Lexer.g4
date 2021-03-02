lexer grammar EdiX12Lexer;

options {
  /** Special class implementing context-specific logic for lexing and parsing. */
  superClass=X12BaseLexer;
}

tokens {
  /** Special control tokens used during parsing. */
  SegmentTerminator,
  DataSeparator,
  ComponentSeparator,
  /** Supports EDI X12 5010 */
  RepititionSeparator,
  /** Industry often uses additional line separators for formatting. */
  EndOfLine
}

/** Non-printable control characters. */
fragment SOH: '\u0001';
fragment STX: '\u0002';
fragment ETX: '\u0003';
fragment EOT: '\u0004';
fragment ENQ: '\u0005';
fragment ACK: '\u0006';
fragment BEL: '\u0007';
fragment HT: '\u0009';
fragment LF: '\u000A';
fragment VT: '\u000B';
fragment FF: '\u000C';
fragment CR: '\u000D';
fragment DC1: '\u0011';
fragment DC2: '\u0012';
fragment DC3: '\u0013';
fragment DC4: '\u0014';
fragment NAK: '\u0015';
fragment SYN: '\u0016';
fragment ETB: '\u0017';
fragment FS: '\u001C';
fragment GS: '\u001D';
fragment RS: '\u001E';
fragment US: '\u001F';

/** Define valid printable characters. */
fragment Number: [0-9];
fragment Letter: [a-zA-Z];
fragment Special: [!"&'()*+,-./:;?=%~@[\]_{}\\|<>#$ ];

/**
 * Valid EDI X12 data types. Some caveats apply:
 * - While EDI X12 is limited to ASCII, data transmission is often in UTF8.
 * - Date and Time are ambiguous types and may appear as Numeric due to overlap.
 * - ID is technically any string, as the dictionary of possible IDs is outside the scope of lexing.
 * - Binary is best-effort and may be identified as String/Numeric/etc. if it completely overlaps.
 */
EndOfLine: CR LF | CR | LF;
InterchangeHeader: 'ISA';
InterchangeTrailer: 'IEA';
GroupHeader: 'GS';
GroupTrailer: 'GE';
TransactionHeader: 'ST';
TransactionTrailer: 'SE';
Tag: Letter (Letter|Number) (Letter|Number) (Letter|Number) (Letter|Number);
Numeric: ('-'|Number)+;
Decimal: ('.'|Numeric)+;
String: (Letter|Numeric|Special)+;
Binary: ('\u0000'..'\u00FF')+;
/** Have NonPrintable chars as the last rule after Binary so that the parser prefers Binary. */
NonPrintable: 
  SOH
  | STX
  | ETX
  | EOT
  | ENQ
  | ACK
  | BEL
  | HT
  | LF
  | VT
  | FF
  | CR
  | DC1
  | DC2
  | DC3
  | DC4
  | NAK
  | SYN
  | ETB
  | FS
  | GS
  | RS
  | US;
/**
 * Matches any character so that terminators
 * and separators can be discovered during
 * lexing and used during parsing.
 */
Any: . { this.handleAny(EdiX12Lexer) };