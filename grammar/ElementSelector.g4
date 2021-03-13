grammar ElementSelector;

selector:
    segmentTag
  | elementSelector
  | parentSegmentSelector
  | hlPathSelector
  | loopPathSelector
  | elementValueSelector
  | elementNotValueSelector
  | elementContainsValueSelector
  | elementPrecedentSelector
  | elementAdjacentSelector
  ;

// Element reference adjacent to selector.
elementAdjacentSelector:
  (ElementReference | hlPathSelector | parentSegmentSelector | loopPathSelector)
  '~'
  (ElementReference | elementValueSelector | elementNotValueSelector | elementContainsValueSelector)
  ;
// Element reference precedent to selector.
elementPrecedentSelector:
  (ElementReference | hlPathSelector | parentSegmentSelector | loopPathSelector)
  ':'
  (ElementReference | elementValueSelector | elementNotValueSelector | elementContainsValueSelector)
  ;
// Element not value selector.
elementContainsValueSelector: ElementReference '*' ElementValue;
// Element not value selector.
elementNotValueSelector: ElementReference '!' ElementValue;
// Element value selector.
elementValueSelector: ElementReference ElementValue;
// Loop path selector.
loopPathSelector: SegmentID '^' SegmentID '-' (ElementReference | parentSegmentSelector);
// Element at HL path selector.
hlPathSelector: 'HL' ('+' AnyCharacter)+ '-' (ElementReference | parentSegmentSelector);
// Element at parent segment path selector.
parentSegmentSelector: (SegmentID '-')+ ElementReference;
// Element reference selector.
elementSelector: ElementReference;
// Segment tag selector.
segmentTag: SegmentID;

// Fragments for printable character detection.
fragment Number: '\u0030'..'\u0039';
fragment Letter: '\u0041'..'\u005A' | '\u0061'..'\u007A';
fragment Special: '\u0020'..'\u002F' | '\u003A'..'\u0040' | '\u005B'..'\u0060' | '\u007B'..'\u007E';
fragment AlphaNumeric: Number | Letter;
fragment SegmentID2: Letter AlphaNumeric;
fragment SegmentID3: Letter AlphaNumeric AlphaNumeric;

// Value identifier
ElementValue: '[' ['"] (AnyCharacter|ElementID|SegmentID|ElementReference)* ['"] ']';
// Element reference
ElementReference: SegmentID ElementID;
// Element identifier.
ElementID: Number Number;
// Segment identifier.
SegmentID: SegmentID2 | SegmentID3;
// Any single unicode character.
AnyCharacter: '\u0000'..'\uFFFF';
