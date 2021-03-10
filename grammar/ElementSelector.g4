grammar ElementSelector;

selector:
    elementSelector
  | parentSegmentSelector
  | hlPathSelector
  | loopPathSelector
  | elementContainsValueSelector
  | elementPrecedentSelector
  | elementAdjacentSelector
  ;

// Element reference adjacent to selector.
elementAdjacentSelector:
  (elementSelector | hlPathSelector | parentSegmentSelector | loopPathSelector)
  '~'
  (SegmentID ElementID | elementValueSelector | elementNotValueSelector | elementContainsValueSelector)
  ;
// Element reference precedent to selector.
elementPrecedentSelector:
  (elementSelector | hlPathSelector | parentSegmentSelector | loopPathSelector)
  ':'
  (SegmentID ElementID | elementValueSelector | elementNotValueSelector | elementContainsValueSelector)
  ;
// Element not value selector.
elementContainsValueSelector: SegmentID ElementID '*' ElementValue;
// Element not value selector.
elementNotValueSelector: SegmentID ElementID '!' ElementValue;
// Element value selector.
elementValueSelector: SegmentID ElementID ElementValue;
// Loop path selector.
loopPathSelector: SegmentID '^' SegmentID '-' SegmentID ElementID;
// Element at HL path selector.
hlPathSelector: HLPath '-' SegmentID ElementID;
// Element at parent segment path selector.
parentSegmentSelector: SegmentID '-' SegmentID ElementID;
// Element reference selector.
elementSelector: SegmentID ElementID;

// Fragments for printable character detection.
fragment Number: '\u0030'..'\u0039';
fragment Letter: '\u0041'..'\u005A' | '\u0061'..'\u007A';
fragment Special: '\u0020'..'\u002F' | '\u003A'..'\u0040' | '\u005B'..'\u0060' | '\u007B'..'\u007E';
fragment AlphaNumeric: Number | Letter;
fragment SegmentID2: Letter AlphaNumeric;
fragment SegmentID3: Letter AlphaNumeric AlphaNumeric;
fragment SegmentID4: Letter AlphaNumeric AlphaNumeric AlphaNumeric;
fragment ElementID2: Number Number;
fragment ElementID3: Number Number Number;

// HL path identifier.
HLPath: 'HL' ('+' AnyCharacter)+;
// Segment identifier.
SegmentID: SegmentID2 | SegmentID3 | SegmentID4;
// Element identifier.
ElementID: ElementID2 | ElementID3;
// Value identifier
ElementValue: '[' ['"] AnyCharacter* ['"] ']';
// Any single unicode character.
AnyCharacter: '\u0000'..'\uFFFF';
