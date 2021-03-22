// Generated from grammar/ElementSelector.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ElementSelectorListener } from "./ElementSelectorListener";
import { ElementSelectorVisitor } from "./ElementSelectorVisitor";


export class ElementSelectorParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly ElementValue = 10;
	public static readonly ElementReference = 11;
	public static readonly ElementID = 12;
	public static readonly SegmentID = 13;
	public static readonly AnyCharacter = 14;
	public static readonly RULE_selector = 0;
	public static readonly RULE_elementAdjacentSelector = 1;
	public static readonly RULE_elementPrecedentSelector = 2;
	public static readonly RULE_elementSiblingSelector = 3;
	public static readonly RULE_elementContainsValueSelector = 4;
	public static readonly RULE_elementNotValueSelector = 5;
	public static readonly RULE_elementValueSelector = 6;
	public static readonly RULE_loopPathSelector = 7;
	public static readonly RULE_hlPathSelector = 8;
	public static readonly RULE_parentSegmentSelector = 9;
	public static readonly RULE_elementSelector = 10;
	public static readonly RULE_segmentTag = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"selector", "elementAdjacentSelector", "elementPrecedentSelector", "elementSiblingSelector", 
		"elementContainsValueSelector", "elementNotValueSelector", "elementValueSelector", 
		"loopPathSelector", "hlPathSelector", "parentSegmentSelector", "elementSelector", 
		"segmentTag",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'~'", "'?'", "':'", "'*'", "'!'", "'^'", "'-'", "'HL'", "'+'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ElementValue", "ElementReference", "ElementID", 
		"SegmentID", "AnyCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ElementSelectorParser._LITERAL_NAMES, ElementSelectorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ElementSelectorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ElementSelector.g4"; }

	// @Override
	public get ruleNames(): string[] { return ElementSelectorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ElementSelectorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ElementSelectorParser._ATN, this);
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ElementSelectorParser.RULE_selector);
		try {
			this.state = 35;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 24;
				this.segmentTag();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 25;
				this.elementSelector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 26;
				this.parentSegmentSelector();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 27;
				this.hlPathSelector();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 28;
				this.loopPathSelector();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 29;
				this.elementValueSelector();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 30;
				this.elementNotValueSelector();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 31;
				this.elementContainsValueSelector();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 32;
				this.elementSiblingSelector();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 33;
				this.elementPrecedentSelector();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 34;
				this.elementAdjacentSelector();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementAdjacentSelector(): ElementAdjacentSelectorContext {
		let _localctx: ElementAdjacentSelectorContext = new ElementAdjacentSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ElementSelectorParser.RULE_elementAdjacentSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 37;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;

			case 2:
				{
				this.state = 38;
				this.hlPathSelector();
				}
				break;

			case 3:
				{
				this.state = 39;
				this.parentSegmentSelector();
				}
				break;

			case 4:
				{
				this.state = 40;
				this.loopPathSelector();
				}
				break;
			}
			this.state = 43;
			this.match(ElementSelectorParser.T__0);
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 44;
				this.elementValueSelector();
				}
				break;

			case 2:
				{
				this.state = 45;
				this.elementNotValueSelector();
				}
				break;

			case 3:
				{
				this.state = 46;
				this.elementContainsValueSelector();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementPrecedentSelector(): ElementPrecedentSelectorContext {
		let _localctx: ElementPrecedentSelectorContext = new ElementPrecedentSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ElementSelectorParser.RULE_elementPrecedentSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 49;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;

			case 2:
				{
				this.state = 50;
				this.hlPathSelector();
				}
				break;

			case 3:
				{
				this.state = 51;
				this.parentSegmentSelector();
				}
				break;

			case 4:
				{
				this.state = 52;
				this.loopPathSelector();
				}
				break;
			}
			this.state = 55;
			this.match(ElementSelectorParser.T__1);
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 56;
				this.elementValueSelector();
				}
				break;

			case 2:
				{
				this.state = 57;
				this.elementNotValueSelector();
				}
				break;

			case 3:
				{
				this.state = 58;
				this.elementContainsValueSelector();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementSiblingSelector(): ElementSiblingSelectorContext {
		let _localctx: ElementSiblingSelectorContext = new ElementSiblingSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ElementSelectorParser.RULE_elementSiblingSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 61;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;

			case 2:
				{
				this.state = 62;
				this.hlPathSelector();
				}
				break;

			case 3:
				{
				this.state = 63;
				this.parentSegmentSelector();
				}
				break;

			case 4:
				{
				this.state = 64;
				this.loopPathSelector();
				}
				break;
			}
			this.state = 67;
			this.match(ElementSelectorParser.T__2);
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 68;
				this.elementValueSelector();
				}
				break;

			case 2:
				{
				this.state = 69;
				this.elementNotValueSelector();
				}
				break;

			case 3:
				{
				this.state = 70;
				this.elementContainsValueSelector();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementContainsValueSelector(): ElementContainsValueSelectorContext {
		let _localctx: ElementContainsValueSelectorContext = new ElementContainsValueSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ElementSelectorParser.RULE_elementContainsValueSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(ElementSelectorParser.ElementReference);
			this.state = 74;
			this.match(ElementSelectorParser.T__3);
			this.state = 75;
			this.match(ElementSelectorParser.ElementValue);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementNotValueSelector(): ElementNotValueSelectorContext {
		let _localctx: ElementNotValueSelectorContext = new ElementNotValueSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ElementSelectorParser.RULE_elementNotValueSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(ElementSelectorParser.ElementReference);
			this.state = 78;
			this.match(ElementSelectorParser.T__4);
			this.state = 79;
			this.match(ElementSelectorParser.ElementValue);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueSelector(): ElementValueSelectorContext {
		let _localctx: ElementValueSelectorContext = new ElementValueSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ElementSelectorParser.RULE_elementValueSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(ElementSelectorParser.ElementReference);
			this.state = 82;
			this.match(ElementSelectorParser.ElementValue);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopPathSelector(): LoopPathSelectorContext {
		let _localctx: LoopPathSelectorContext = new LoopPathSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ElementSelectorParser.RULE_loopPathSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(ElementSelectorParser.SegmentID);
			this.state = 85;
			this.match(ElementSelectorParser.T__5);
			this.state = 86;
			this.match(ElementSelectorParser.SegmentID);
			this.state = 87;
			this.match(ElementSelectorParser.T__6);
			this.state = 90;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ElementSelectorParser.ElementReference:
				{
				this.state = 88;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;
			case ElementSelectorParser.SegmentID:
				{
				this.state = 89;
				this.parentSegmentSelector();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hlPathSelector(): HlPathSelectorContext {
		let _localctx: HlPathSelectorContext = new HlPathSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ElementSelectorParser.RULE_hlPathSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(ElementSelectorParser.T__7);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 93;
				this.match(ElementSelectorParser.T__8);
				this.state = 94;
				this.match(ElementSelectorParser.AnyCharacter);
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ElementSelectorParser.T__8);
			this.state = 99;
			this.match(ElementSelectorParser.T__6);
			this.state = 102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ElementSelectorParser.ElementReference:
				{
				this.state = 100;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;
			case ElementSelectorParser.SegmentID:
				{
				this.state = 101;
				this.parentSegmentSelector();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parentSegmentSelector(): ParentSegmentSelectorContext {
		let _localctx: ParentSegmentSelectorContext = new ParentSegmentSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ElementSelectorParser.RULE_parentSegmentSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 104;
				this.match(ElementSelectorParser.SegmentID);
				this.state = 105;
				this.match(ElementSelectorParser.T__6);
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ElementSelectorParser.SegmentID);
			this.state = 110;
			this.match(ElementSelectorParser.ElementReference);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementSelector(): ElementSelectorContext {
		let _localctx: ElementSelectorContext = new ElementSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ElementSelectorParser.RULE_elementSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(ElementSelectorParser.ElementReference);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public segmentTag(): SegmentTagContext {
		let _localctx: SegmentTagContext = new SegmentTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ElementSelectorParser.RULE_segmentTag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(ElementSelectorParser.SegmentID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10w\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x05\x02&\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03,\n" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x032\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x048\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04>\n" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05D\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05J\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t]\n\t\x03\n\x03\n\x03\n\x06\nb\n\n\r\n\x0E\nc\x03\n\x03\n\x03" +
		"\n\x05\ni\n\n\x03\v\x03\v\x06\vm\n\v\r\v\x0E\vn\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x02\x02\x87" +
		"\x02%\x03\x02\x02\x02\x04+\x03\x02\x02\x02\x067\x03\x02\x02\x02\bC\x03" +
		"\x02\x02\x02\nK\x03\x02\x02\x02\fO\x03\x02\x02\x02\x0ES\x03\x02\x02\x02" +
		"\x10V\x03\x02\x02\x02\x12^\x03\x02\x02\x02\x14l\x03\x02\x02\x02\x16r\x03" +
		"\x02\x02\x02\x18t\x03\x02\x02\x02\x1A&\x05\x18\r\x02\x1B&\x05\x16\f\x02" +
		"\x1C&\x05\x14\v\x02\x1D&\x05\x12\n\x02\x1E&\x05\x10\t\x02\x1F&\x05\x0E" +
		"\b\x02 &\x05\f\x07\x02!&\x05\n\x06\x02\"&\x05\b\x05\x02#&\x05\x06\x04" +
		"\x02$&\x05\x04\x03\x02%\x1A\x03\x02\x02\x02%\x1B\x03\x02\x02\x02%\x1C" +
		"\x03\x02\x02\x02%\x1D\x03\x02\x02\x02%\x1E\x03\x02\x02\x02%\x1F\x03\x02" +
		"\x02\x02% \x03\x02\x02\x02%!\x03\x02\x02\x02%\"\x03\x02\x02\x02%#\x03" +
		"\x02\x02\x02%$\x03\x02\x02\x02&\x03\x03\x02\x02\x02\',\x07\r\x02\x02(" +
		",\x05\x12\n\x02),\x05\x14\v\x02*,\x05\x10\t\x02+\'\x03\x02\x02\x02+(\x03" +
		"\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02-1\x07" +
		"\x03\x02\x02.2\x05\x0E\b\x02/2\x05\f\x07\x0202\x05\n\x06\x021.\x03\x02" +
		"\x02\x021/\x03\x02\x02\x0210\x03\x02\x02\x022\x05\x03\x02\x02\x0238\x07" +
		"\r\x02\x0248\x05\x12\n\x0258\x05\x14\v\x0268\x05\x10\t\x0273\x03\x02\x02" +
		"\x0274\x03\x02\x02\x0275\x03\x02\x02\x0276\x03\x02\x02\x0289\x03\x02\x02" +
		"\x029=\x07\x04\x02\x02:>\x05\x0E\b\x02;>\x05\f\x07\x02<>\x05\n\x06\x02" +
		"=:\x03\x02\x02\x02=;\x03\x02\x02\x02=<\x03\x02\x02\x02>\x07\x03\x02\x02" +
		"\x02?D\x07\r\x02\x02@D\x05\x12\n\x02AD\x05\x14\v\x02BD\x05\x10\t\x02C" +
		"?\x03\x02\x02\x02C@\x03\x02\x02\x02CA\x03\x02\x02\x02CB\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02EI\x07\x05\x02\x02FJ\x05\x0E\b\x02GJ\x05\f\x07\x02H" +
		"J\x05\n\x06\x02IF\x03\x02\x02\x02IG\x03\x02\x02\x02IH\x03\x02\x02\x02" +
		"J\t\x03\x02\x02\x02KL\x07\r\x02\x02LM\x07\x06\x02\x02MN\x07\f\x02\x02" +
		"N\v\x03\x02\x02\x02OP\x07\r\x02\x02PQ\x07\x07\x02\x02QR\x07\f\x02\x02" +
		"R\r\x03\x02\x02\x02ST\x07\r\x02\x02TU\x07\f\x02\x02U\x0F\x03\x02\x02\x02" +
		"VW\x07\x0F\x02\x02WX\x07\b\x02\x02XY\x07\x0F\x02\x02Y\\\x07\t\x02\x02" +
		"Z]\x07\r\x02\x02[]\x05\x14\v\x02\\Z\x03\x02\x02\x02\\[\x03\x02\x02\x02" +
		"]\x11\x03\x02\x02\x02^a\x07\n\x02\x02_`\x07\v\x02\x02`b\x07\x10\x02\x02" +
		"a_\x03\x02\x02\x02bc\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02" +
		"de\x03\x02\x02\x02eh\x07\t\x02\x02fi\x07\r\x02\x02gi\x05\x14\v\x02hf\x03" +
		"\x02\x02\x02hg\x03\x02\x02\x02i\x13\x03\x02\x02\x02jk\x07\x0F\x02\x02" +
		"km\x07\t\x02\x02lj\x03\x02\x02\x02mn\x03\x02\x02\x02nl\x03\x02\x02\x02" +
		"no\x03\x02\x02\x02op\x03\x02\x02\x02pq\x07\r\x02\x02q\x15\x03\x02\x02" +
		"\x02rs\x07\r\x02\x02s\x17\x03\x02\x02\x02tu\x07\x0F\x02\x02u\x19\x03\x02" +
		"\x02\x02\r%+17=CI\\chn";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ElementSelectorParser.__ATN) {
			ElementSelectorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ElementSelectorParser._serializedATN));
		}

		return ElementSelectorParser.__ATN;
	}

}

export class SelectorContext extends ParserRuleContext {
	public segmentTag(): SegmentTagContext | undefined {
		return this.tryGetRuleContext(0, SegmentTagContext);
	}
	public elementSelector(): ElementSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementSelectorContext);
	}
	public parentSegmentSelector(): ParentSegmentSelectorContext | undefined {
		return this.tryGetRuleContext(0, ParentSegmentSelectorContext);
	}
	public hlPathSelector(): HlPathSelectorContext | undefined {
		return this.tryGetRuleContext(0, HlPathSelectorContext);
	}
	public loopPathSelector(): LoopPathSelectorContext | undefined {
		return this.tryGetRuleContext(0, LoopPathSelectorContext);
	}
	public elementValueSelector(): ElementValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementValueSelectorContext);
	}
	public elementNotValueSelector(): ElementNotValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementNotValueSelectorContext);
	}
	public elementContainsValueSelector(): ElementContainsValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementContainsValueSelectorContext);
	}
	public elementSiblingSelector(): ElementSiblingSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementSiblingSelectorContext);
	}
	public elementPrecedentSelector(): ElementPrecedentSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementPrecedentSelectorContext);
	}
	public elementAdjacentSelector(): ElementAdjacentSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementAdjacentSelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_selector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementAdjacentSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode | undefined { return this.tryGetToken(ElementSelectorParser.ElementReference, 0); }
	public hlPathSelector(): HlPathSelectorContext | undefined {
		return this.tryGetRuleContext(0, HlPathSelectorContext);
	}
	public parentSegmentSelector(): ParentSegmentSelectorContext | undefined {
		return this.tryGetRuleContext(0, ParentSegmentSelectorContext);
	}
	public loopPathSelector(): LoopPathSelectorContext | undefined {
		return this.tryGetRuleContext(0, LoopPathSelectorContext);
	}
	public elementValueSelector(): ElementValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementValueSelectorContext);
	}
	public elementNotValueSelector(): ElementNotValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementNotValueSelectorContext);
	}
	public elementContainsValueSelector(): ElementContainsValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementContainsValueSelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_elementAdjacentSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterElementAdjacentSelector) {
			listener.enterElementAdjacentSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitElementAdjacentSelector) {
			listener.exitElementAdjacentSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitElementAdjacentSelector) {
			return visitor.visitElementAdjacentSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementPrecedentSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode | undefined { return this.tryGetToken(ElementSelectorParser.ElementReference, 0); }
	public hlPathSelector(): HlPathSelectorContext | undefined {
		return this.tryGetRuleContext(0, HlPathSelectorContext);
	}
	public parentSegmentSelector(): ParentSegmentSelectorContext | undefined {
		return this.tryGetRuleContext(0, ParentSegmentSelectorContext);
	}
	public loopPathSelector(): LoopPathSelectorContext | undefined {
		return this.tryGetRuleContext(0, LoopPathSelectorContext);
	}
	public elementValueSelector(): ElementValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementValueSelectorContext);
	}
	public elementNotValueSelector(): ElementNotValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementNotValueSelectorContext);
	}
	public elementContainsValueSelector(): ElementContainsValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementContainsValueSelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_elementPrecedentSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterElementPrecedentSelector) {
			listener.enterElementPrecedentSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitElementPrecedentSelector) {
			listener.exitElementPrecedentSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitElementPrecedentSelector) {
			return visitor.visitElementPrecedentSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementSiblingSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode | undefined { return this.tryGetToken(ElementSelectorParser.ElementReference, 0); }
	public hlPathSelector(): HlPathSelectorContext | undefined {
		return this.tryGetRuleContext(0, HlPathSelectorContext);
	}
	public parentSegmentSelector(): ParentSegmentSelectorContext | undefined {
		return this.tryGetRuleContext(0, ParentSegmentSelectorContext);
	}
	public loopPathSelector(): LoopPathSelectorContext | undefined {
		return this.tryGetRuleContext(0, LoopPathSelectorContext);
	}
	public elementValueSelector(): ElementValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementValueSelectorContext);
	}
	public elementNotValueSelector(): ElementNotValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementNotValueSelectorContext);
	}
	public elementContainsValueSelector(): ElementContainsValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementContainsValueSelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_elementSiblingSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterElementSiblingSelector) {
			listener.enterElementSiblingSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitElementSiblingSelector) {
			listener.exitElementSiblingSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitElementSiblingSelector) {
			return visitor.visitElementSiblingSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContainsValueSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode { return this.getToken(ElementSelectorParser.ElementReference, 0); }
	public ElementValue(): TerminalNode { return this.getToken(ElementSelectorParser.ElementValue, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_elementContainsValueSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterElementContainsValueSelector) {
			listener.enterElementContainsValueSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitElementContainsValueSelector) {
			listener.exitElementContainsValueSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitElementContainsValueSelector) {
			return visitor.visitElementContainsValueSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementNotValueSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode { return this.getToken(ElementSelectorParser.ElementReference, 0); }
	public ElementValue(): TerminalNode { return this.getToken(ElementSelectorParser.ElementValue, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_elementNotValueSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterElementNotValueSelector) {
			listener.enterElementNotValueSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitElementNotValueSelector) {
			listener.exitElementNotValueSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitElementNotValueSelector) {
			return visitor.visitElementNotValueSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode { return this.getToken(ElementSelectorParser.ElementReference, 0); }
	public ElementValue(): TerminalNode { return this.getToken(ElementSelectorParser.ElementValue, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_elementValueSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterElementValueSelector) {
			listener.enterElementValueSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitElementValueSelector) {
			listener.exitElementValueSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitElementValueSelector) {
			return visitor.visitElementValueSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopPathSelectorContext extends ParserRuleContext {
	public SegmentID(): TerminalNode[];
	public SegmentID(i: number): TerminalNode;
	public SegmentID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ElementSelectorParser.SegmentID);
		} else {
			return this.getToken(ElementSelectorParser.SegmentID, i);
		}
	}
	public ElementReference(): TerminalNode | undefined { return this.tryGetToken(ElementSelectorParser.ElementReference, 0); }
	public parentSegmentSelector(): ParentSegmentSelectorContext | undefined {
		return this.tryGetRuleContext(0, ParentSegmentSelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_loopPathSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterLoopPathSelector) {
			listener.enterLoopPathSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitLoopPathSelector) {
			listener.exitLoopPathSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitLoopPathSelector) {
			return visitor.visitLoopPathSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HlPathSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode | undefined { return this.tryGetToken(ElementSelectorParser.ElementReference, 0); }
	public parentSegmentSelector(): ParentSegmentSelectorContext | undefined {
		return this.tryGetRuleContext(0, ParentSegmentSelectorContext);
	}
	public AnyCharacter(): TerminalNode[];
	public AnyCharacter(i: number): TerminalNode;
	public AnyCharacter(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ElementSelectorParser.AnyCharacter);
		} else {
			return this.getToken(ElementSelectorParser.AnyCharacter, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_hlPathSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterHlPathSelector) {
			listener.enterHlPathSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitHlPathSelector) {
			listener.exitHlPathSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitHlPathSelector) {
			return visitor.visitHlPathSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParentSegmentSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode { return this.getToken(ElementSelectorParser.ElementReference, 0); }
	public SegmentID(): TerminalNode[];
	public SegmentID(i: number): TerminalNode;
	public SegmentID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ElementSelectorParser.SegmentID);
		} else {
			return this.getToken(ElementSelectorParser.SegmentID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_parentSegmentSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterParentSegmentSelector) {
			listener.enterParentSegmentSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitParentSegmentSelector) {
			listener.exitParentSegmentSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitParentSegmentSelector) {
			return visitor.visitParentSegmentSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementSelectorContext extends ParserRuleContext {
	public ElementReference(): TerminalNode { return this.getToken(ElementSelectorParser.ElementReference, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_elementSelector; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterElementSelector) {
			listener.enterElementSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitElementSelector) {
			listener.exitElementSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitElementSelector) {
			return visitor.visitElementSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentTagContext extends ParserRuleContext {
	public SegmentID(): TerminalNode { return this.getToken(ElementSelectorParser.SegmentID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ElementSelectorParser.RULE_segmentTag; }
	// @Override
	public enterRule(listener: ElementSelectorListener): void {
		if (listener.enterSegmentTag) {
			listener.enterSegmentTag(this);
		}
	}
	// @Override
	public exitRule(listener: ElementSelectorListener): void {
		if (listener.exitSegmentTag) {
			listener.exitSegmentTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElementSelectorVisitor<Result>): Result {
		if (visitor.visitSegmentTag) {
			return visitor.visitSegmentTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


