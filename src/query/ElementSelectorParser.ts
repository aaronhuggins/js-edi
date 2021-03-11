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
	public static readonly ElementValue = 9;
	public static readonly ElementReference = 10;
	public static readonly ElementID = 11;
	public static readonly SegmentID = 12;
	public static readonly AnyCharacter = 13;
	public static readonly RULE_selector = 0;
	public static readonly RULE_elementAdjacentSelector = 1;
	public static readonly RULE_elementPrecedentSelector = 2;
	public static readonly RULE_elementContainsValueSelector = 3;
	public static readonly RULE_elementNotValueSelector = 4;
	public static readonly RULE_elementValueSelector = 5;
	public static readonly RULE_loopPathSelector = 6;
	public static readonly RULE_hlPathSelector = 7;
	public static readonly RULE_parentSegmentSelector = 8;
	public static readonly RULE_elementSelector = 9;
	public static readonly RULE_segmentTag = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"selector", "elementAdjacentSelector", "elementPrecedentSelector", "elementContainsValueSelector", 
		"elementNotValueSelector", "elementValueSelector", "loopPathSelector", 
		"hlPathSelector", "parentSegmentSelector", "elementSelector", "segmentTag",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'~'", "':'", "'*'", "'!'", "'^'", "'-'", "'HL'", "'+'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ElementValue", "ElementReference", "ElementID", 
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
			this.state = 30;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 22;
				this.segmentTag();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 23;
				this.elementSelector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 24;
				this.parentSegmentSelector();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 25;
				this.hlPathSelector();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 26;
				this.loopPathSelector();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 27;
				this.elementContainsValueSelector();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 28;
				this.elementPrecedentSelector();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 29;
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
			this.state = 36;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 32;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;

			case 2:
				{
				this.state = 33;
				this.hlPathSelector();
				}
				break;

			case 3:
				{
				this.state = 34;
				this.parentSegmentSelector();
				}
				break;

			case 4:
				{
				this.state = 35;
				this.loopPathSelector();
				}
				break;
			}
			this.state = 38;
			this.match(ElementSelectorParser.T__0);
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 39;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;

			case 2:
				{
				this.state = 40;
				this.elementValueSelector();
				}
				break;

			case 3:
				{
				this.state = 41;
				this.elementNotValueSelector();
				}
				break;

			case 4:
				{
				this.state = 42;
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
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 45;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;

			case 2:
				{
				this.state = 46;
				this.hlPathSelector();
				}
				break;

			case 3:
				{
				this.state = 47;
				this.parentSegmentSelector();
				}
				break;

			case 4:
				{
				this.state = 48;
				this.loopPathSelector();
				}
				break;
			}
			this.state = 51;
			this.match(ElementSelectorParser.T__1);
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 52;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;

			case 2:
				{
				this.state = 53;
				this.elementValueSelector();
				}
				break;

			case 3:
				{
				this.state = 54;
				this.elementNotValueSelector();
				}
				break;

			case 4:
				{
				this.state = 55;
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
		this.enterRule(_localctx, 6, ElementSelectorParser.RULE_elementContainsValueSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(ElementSelectorParser.ElementReference);
			this.state = 59;
			this.match(ElementSelectorParser.T__2);
			this.state = 60;
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
		this.enterRule(_localctx, 8, ElementSelectorParser.RULE_elementNotValueSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(ElementSelectorParser.ElementReference);
			this.state = 63;
			this.match(ElementSelectorParser.T__3);
			this.state = 64;
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
		this.enterRule(_localctx, 10, ElementSelectorParser.RULE_elementValueSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(ElementSelectorParser.ElementReference);
			this.state = 67;
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
		this.enterRule(_localctx, 12, ElementSelectorParser.RULE_loopPathSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(ElementSelectorParser.SegmentID);
			this.state = 70;
			this.match(ElementSelectorParser.T__4);
			this.state = 71;
			this.match(ElementSelectorParser.SegmentID);
			this.state = 72;
			this.match(ElementSelectorParser.T__5);
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ElementSelectorParser.ElementReference:
				{
				this.state = 73;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;
			case ElementSelectorParser.SegmentID:
				{
				this.state = 74;
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
		this.enterRule(_localctx, 14, ElementSelectorParser.RULE_hlPathSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(ElementSelectorParser.T__6);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 78;
				this.match(ElementSelectorParser.T__7);
				this.state = 79;
				this.match(ElementSelectorParser.AnyCharacter);
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ElementSelectorParser.T__7);
			this.state = 84;
			this.match(ElementSelectorParser.T__5);
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ElementSelectorParser.ElementReference:
				{
				this.state = 85;
				this.match(ElementSelectorParser.ElementReference);
				}
				break;
			case ElementSelectorParser.SegmentID:
				{
				this.state = 86;
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
		this.enterRule(_localctx, 16, ElementSelectorParser.RULE_parentSegmentSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 89;
				this.match(ElementSelectorParser.SegmentID);
				this.state = 90;
				this.match(ElementSelectorParser.T__5);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ElementSelectorParser.SegmentID);
			this.state = 95;
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
		this.enterRule(_localctx, 18, ElementSelectorParser.RULE_elementSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
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
		this.enterRule(_localctx, 20, ElementSelectorParser.RULE_segmentTag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0Fh\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02!\n\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\'\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03.\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x044\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04;\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bN\n\b\x03\t\x03\t\x03\t\x06" +
		"\tS\n\t\r\t\x0E\tT\x03\t\x03\t\x03\t\x05\tZ\n\t\x03\n\x03\n\x06\n^\n\n" +
		"\r\n\x0E\n_\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x02\x02\x02s\x02 \x03\x02\x02\x02\x04&\x03\x02\x02\x02\x063\x03" +
		"\x02\x02\x02\b<\x03\x02\x02\x02\n@\x03\x02\x02\x02\fD\x03\x02\x02\x02" +
		"\x0EG\x03\x02\x02\x02\x10O\x03\x02\x02\x02\x12]\x03\x02\x02\x02\x14c\x03" +
		"\x02\x02\x02\x16e\x03\x02\x02\x02\x18!\x05\x16\f\x02\x19!\x05\x14\v\x02" +
		"\x1A!\x05\x12\n\x02\x1B!\x05\x10\t\x02\x1C!\x05\x0E\b\x02\x1D!\x05\b\x05" +
		"\x02\x1E!\x05\x06\x04\x02\x1F!\x05\x04\x03\x02 \x18\x03\x02\x02\x02 \x19" +
		"\x03\x02\x02\x02 \x1A\x03\x02\x02\x02 \x1B\x03\x02\x02\x02 \x1C\x03\x02" +
		"\x02\x02 \x1D\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02" +
		"!\x03\x03\x02\x02\x02\"\'\x07\f\x02\x02#\'\x05\x10\t\x02$\'\x05\x12\n" +
		"\x02%\'\x05\x0E\b\x02&\"\x03\x02\x02\x02&#\x03\x02\x02\x02&$\x03\x02\x02" +
		"\x02&%\x03\x02\x02\x02\'(\x03\x02\x02\x02(-\x07\x03\x02\x02).\x07\f\x02" +
		"\x02*.\x05\f\x07\x02+.\x05\n\x06\x02,.\x05\b\x05\x02-)\x03\x02\x02\x02" +
		"-*\x03\x02\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.\x05\x03\x02\x02" +
		"\x02/4\x07\f\x02\x0204\x05\x10\t\x0214\x05\x12\n\x0224\x05\x0E\b\x023" +
		"/\x03\x02\x02\x0230\x03\x02\x02\x0231\x03\x02\x02\x0232\x03\x02\x02\x02" +
		"45\x03\x02\x02\x025:\x07\x04\x02\x026;\x07\f\x02\x027;\x05\f\x07\x028" +
		";\x05\n\x06\x029;\x05\b\x05\x02:6\x03\x02\x02\x02:7\x03\x02\x02\x02:8" +
		"\x03\x02\x02\x02:9\x03\x02\x02\x02;\x07\x03\x02\x02\x02<=\x07\f\x02\x02" +
		"=>\x07\x05\x02\x02>?\x07\v\x02\x02?\t\x03\x02\x02\x02@A\x07\f\x02\x02" +
		"AB\x07\x06\x02\x02BC\x07\v\x02\x02C\v\x03\x02\x02\x02DE\x07\f\x02\x02" +
		"EF\x07\v\x02\x02F\r\x03\x02\x02\x02GH\x07\x0E\x02\x02HI\x07\x07\x02\x02" +
		"IJ\x07\x0E\x02\x02JM\x07\b\x02\x02KN\x07\f\x02\x02LN\x05\x12\n\x02MK\x03" +
		"\x02\x02\x02ML\x03\x02\x02\x02N\x0F\x03\x02\x02\x02OR\x07\t\x02\x02PQ" +
		"\x07\n\x02\x02QS\x07\x0F\x02\x02RP\x03\x02\x02\x02ST\x03\x02\x02\x02T" +
		"R\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VY\x07\b\x02\x02" +
		"WZ\x07\f\x02\x02XZ\x05\x12\n\x02YW\x03\x02\x02\x02YX\x03\x02\x02\x02Z" +
		"\x11\x03\x02\x02\x02[\\\x07\x0E\x02\x02\\^\x07\b\x02\x02][\x03\x02\x02" +
		"\x02^_\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02" +
		"\x02ab\x07\f\x02\x02b\x13\x03\x02\x02\x02cd\x07\f\x02\x02d\x15\x03\x02" +
		"\x02\x02ef\x07\x0E\x02\x02f\x17\x03\x02\x02\x02\v &-3:MTY_";
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
	public elementContainsValueSelector(): ElementContainsValueSelectorContext | undefined {
		return this.tryGetRuleContext(0, ElementContainsValueSelectorContext);
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
	public ElementReference(): TerminalNode[];
	public ElementReference(i: number): TerminalNode;
	public ElementReference(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ElementSelectorParser.ElementReference);
		} else {
			return this.getToken(ElementSelectorParser.ElementReference, i);
		}
	}
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
	public ElementReference(): TerminalNode[];
	public ElementReference(i: number): TerminalNode;
	public ElementReference(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ElementSelectorParser.ElementReference);
		} else {
			return this.getToken(ElementSelectorParser.ElementReference, i);
		}
	}
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


