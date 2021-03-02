// Generated from grammar/EdiX12Parser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { EdiX12ParserListener } from "./EdiX12ParserListener";
import { EdiX12ParserVisitor } from "./EdiX12ParserVisitor";


export class EdiX12Parser extends Parser {
	public static readonly SegmentTerminator = 1;
	public static readonly DataSeparator = 2;
	public static readonly ComponentSeparator = 3;
	public static readonly RepititionSeparator = 4;
	public static readonly EndOfLine = 5;
	public static readonly InterchangeHeader = 6;
	public static readonly InterchangeTrailer = 7;
	public static readonly GroupHeader = 8;
	public static readonly GroupTrailer = 9;
	public static readonly TransactionHeader = 10;
	public static readonly TransactionTrailer = 11;
	public static readonly Tag = 12;
	public static readonly Numeric = 13;
	public static readonly Decimal = 14;
	public static readonly String = 15;
	public static readonly Binary = 16;
	public static readonly NonPrintable = 17;
	public static readonly Any = 18;
	public static readonly RULE_document = 0;
	public static readonly RULE_interchange = 1;
	public static readonly RULE_group = 2;
	public static readonly RULE_transaction = 3;
	public static readonly RULE_segment = 4;
	public static readonly RULE_interchangeHeader = 5;
	public static readonly RULE_interchangeTrailer = 6;
	public static readonly RULE_groupHeader = 7;
	public static readonly RULE_groupTrailer = 8;
	public static readonly RULE_transactionHeader = 9;
	public static readonly RULE_transactionTrailer = 10;
	public static readonly RULE_segmentEnd = 11;
	public static readonly RULE_element = 12;
	public static readonly RULE_repitition = 13;
	public static readonly RULE_component = 14;
	public static readonly RULE_value = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "interchange", "group", "transaction", "segment", "interchangeHeader", 
		"interchangeTrailer", "groupHeader", "groupTrailer", "transactionHeader", 
		"transactionTrailer", "segmentEnd", "element", "repitition", "component", 
		"value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'ISA'", 
		"'IEA'", "'GS'", "'GE'", "'ST'", "'SE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SegmentTerminator", "DataSeparator", "ComponentSeparator", 
		"RepititionSeparator", "EndOfLine", "InterchangeHeader", "InterchangeTrailer", 
		"GroupHeader", "GroupTrailer", "TransactionHeader", "TransactionTrailer", 
		"Tag", "Numeric", "Decimal", "String", "Binary", "NonPrintable", "Any",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(EdiX12Parser._LITERAL_NAMES, EdiX12Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return EdiX12Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "EdiX12Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return EdiX12Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return EdiX12Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(EdiX12Parser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, EdiX12Parser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 32;
				this.interchange();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.InterchangeHeader);
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
	public interchange(): InterchangeContext {
		let _localctx: InterchangeContext = new InterchangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, EdiX12Parser.RULE_interchange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.interchangeHeader();
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 38;
				this.group();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.GroupHeader);
			this.state = 43;
			this.interchangeTrailer();
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, EdiX12Parser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.groupHeader();
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 46;
				this.transaction();
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.TransactionHeader);
			this.state = 51;
			this.groupTrailer();
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
	public transaction(): TransactionContext {
		let _localctx: TransactionContext = new TransactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, EdiX12Parser.RULE_transaction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.transactionHeader();
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 54;
				this.segment();
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.Tag);
			this.state = 59;
			this.transactionTrailer();
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
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, EdiX12Parser.RULE_segment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.match(EdiX12Parser.Tag);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 62;
				this.element();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 67;
			this.segmentEnd();
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
	public interchangeHeader(): InterchangeHeaderContext {
		let _localctx: InterchangeHeaderContext = new InterchangeHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, EdiX12Parser.RULE_interchangeHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(EdiX12Parser.InterchangeHeader);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				this.element();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 75;
			this.segmentEnd();
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
	public interchangeTrailer(): InterchangeTrailerContext {
		let _localctx: InterchangeTrailerContext = new InterchangeTrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, EdiX12Parser.RULE_interchangeTrailer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(EdiX12Parser.InterchangeTrailer);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 78;
				this.element();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 83;
			this.segmentEnd();
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
	public groupHeader(): GroupHeaderContext {
		let _localctx: GroupHeaderContext = new GroupHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, EdiX12Parser.RULE_groupHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(EdiX12Parser.GroupHeader);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 86;
				this.element();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 91;
			this.segmentEnd();
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
	public groupTrailer(): GroupTrailerContext {
		let _localctx: GroupTrailerContext = new GroupTrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, EdiX12Parser.RULE_groupTrailer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(EdiX12Parser.GroupTrailer);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 94;
				this.element();
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 99;
			this.segmentEnd();
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
	public transactionHeader(): TransactionHeaderContext {
		let _localctx: TransactionHeaderContext = new TransactionHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, EdiX12Parser.RULE_transactionHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(EdiX12Parser.TransactionHeader);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 102;
				this.element();
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 107;
			this.segmentEnd();
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
	public transactionTrailer(): TransactionTrailerContext {
		let _localctx: TransactionTrailerContext = new TransactionTrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, EdiX12Parser.RULE_transactionTrailer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(EdiX12Parser.TransactionTrailer);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 110;
				this.element();
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 115;
			this.segmentEnd();
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
	public segmentEnd(): SegmentEndContext {
		let _localctx: SegmentEndContext = new SegmentEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, EdiX12Parser.RULE_segmentEnd);
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.match(EdiX12Parser.SegmentTerminator);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.match(EdiX12Parser.SegmentTerminator);
				this.state = 119;
				this.match(EdiX12Parser.EndOfLine);
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, EdiX12Parser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 123;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 124;
					this.component();
					}
					break;

				case 3:
					{
					this.state = 125;
					this.repitition();
					}
					break;
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Numeric) | (1 << EdiX12Parser.Decimal) | (1 << EdiX12Parser.String) | (1 << EdiX12Parser.Binary) | (1 << EdiX12Parser.NonPrintable))) !== 0));
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
	public repitition(): RepititionContext {
		let _localctx: RepititionContext = new RepititionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, EdiX12Parser.RULE_repitition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 130;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 131;
				this.component();
				}
				break;
			}
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 134;
				this.match(EdiX12Parser.RepititionSeparator);
				this.state = 137;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 135;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 136;
					this.component();
					}
					break;
				}
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.RepititionSeparator);
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
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, EdiX12Parser.RULE_component);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.value();
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 144;
				this.match(EdiX12Parser.ComponentSeparator);
				this.state = 145;
				this.value();
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.ComponentSeparator);
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, EdiX12Parser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Numeric) | (1 << EdiX12Parser.Decimal) | (1 << EdiX12Parser.String) | (1 << EdiX12Parser.Binary) | (1 << EdiX12Parser.NonPrintable))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\x9B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x06\x02$" +
		"\n\x02\r\x02\x0E\x02%\x03\x03\x03\x03\x06\x03*\n\x03\r\x03\x0E\x03+\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x06\x042\n\x04\r\x04\x0E\x043\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x06\x05:\n\x05\r\x05\x0E\x05;\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x06\x06B\n\x06\r\x06\x0E\x06C\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x06\x07J\n\x07\r\x07\x0E\x07K\x03\x07\x03\x07\x03\b\x03\b\x06\bR" +
		"\n\b\r\b\x0E\bS\x03\b\x03\b\x03\t\x03\t\x06\tZ\n\t\r\t\x0E\t[\x03\t\x03" +
		"\t\x03\n\x03\n\x06\nb\n\n\r\n\x0E\nc\x03\n\x03\n\x03\v\x03\v\x06\vj\n" +
		"\v\r\v\x0E\vk\x03\v\x03\v\x03\f\x03\f\x06\fr\n\f\r\f\x0E\fs\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x05\r{\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E" +
		"\x81\n\x0E\r\x0E\x0E\x0E\x82\x03\x0F\x03\x0F\x05\x0F\x87\n\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\x8C\n\x0F\x06\x0F\x8E\n\x0F\r\x0F\x0E\x0F\x8F" +
		"\x03\x10\x03\x10\x03\x10\x06\x10\x95\n\x10\r\x10\x0E\x10\x96\x03\x11\x03" +
		"\x11\x03\x11\x02\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\x02\x03\x03\x02\x0F\x13\x02\x9D\x02#\x03\x02\x02\x02\x04\'\x03\x02" +
		"\x02\x02\x06/\x03\x02\x02\x02\b7\x03\x02\x02\x02\n?\x03\x02\x02\x02\f" +
		"G\x03\x02\x02\x02\x0EO\x03\x02\x02\x02\x10W\x03\x02\x02\x02\x12_\x03\x02" +
		"\x02\x02\x14g\x03\x02\x02\x02\x16o\x03\x02\x02\x02\x18z\x03\x02\x02\x02" +
		"\x1A|\x03\x02\x02\x02\x1C\x86\x03\x02\x02\x02\x1E\x91\x03\x02\x02\x02" +
		" \x98\x03\x02\x02\x02\"$\x05\x04\x03\x02#\"\x03\x02\x02\x02$%\x03\x02" +
		"\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\x03\x03\x02\x02\x02\')\x05" +
		"\f\x07\x02(*\x05\x06\x04\x02)(\x03\x02\x02\x02*+\x03\x02\x02\x02+)\x03" +
		"\x02\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x05\x0E\b\x02.\x05" +
		"\x03\x02\x02\x02/1\x05\x10\t\x0202\x05\b\x05\x0210\x03\x02\x02\x0223\x03" +
		"\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02\x0256\x05" +
		"\x12\n\x026\x07\x03\x02\x02\x0279\x05\x14\v\x028:\x05\n\x06\x0298\x03" +
		"\x02\x02\x02:;\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03" +
		"\x02\x02\x02=>\x05\x16\f\x02>\t\x03\x02\x02\x02?A\x07\x0E\x02\x02@B\x05" +
		"\x1A\x0E\x02A@\x03\x02\x02\x02BC\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03" +
		"\x02\x02\x02DE\x03\x02\x02\x02EF\x05\x18\r\x02F\v\x03\x02\x02\x02GI\x07" +
		"\b\x02\x02HJ\x05\x1A\x0E\x02IH\x03\x02\x02\x02JK\x03\x02\x02\x02KI\x03" +
		"\x02\x02\x02KL\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x05\x18\r\x02N\r\x03" +
		"\x02\x02\x02OQ\x07\t\x02\x02PR\x05\x1A\x0E\x02QP\x03\x02\x02\x02RS\x03" +
		"\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x05" +
		"\x18\r\x02V\x0F\x03\x02\x02\x02WY\x07\n\x02\x02XZ\x05\x1A\x0E\x02YX\x03" +
		"\x02\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\" +
		"]\x03\x02\x02\x02]^\x05\x18\r\x02^\x11\x03\x02\x02\x02_a\x07\v\x02\x02" +
		"`b\x05\x1A\x0E\x02a`\x03\x02\x02\x02bc\x03\x02\x02\x02ca\x03\x02\x02\x02" +
		"cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\x05\x18\r\x02f\x13\x03\x02\x02" +
		"\x02gi\x07\f\x02\x02hj\x05\x1A\x0E\x02ih\x03\x02\x02\x02jk\x03\x02\x02" +
		"\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x05\x18\r" +
		"\x02n\x15\x03\x02\x02\x02oq\x07\r\x02\x02pr\x05\x1A\x0E\x02qp\x03\x02" +
		"\x02\x02rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02" +
		"\x02\x02uv\x05\x18\r\x02v\x17\x03\x02\x02\x02w{\x07\x03\x02\x02xy\x07" +
		"\x03\x02\x02y{\x07\x07\x02\x02zw\x03\x02\x02\x02zx\x03\x02\x02\x02{\x19" +
		"\x03\x02\x02\x02|\x80\x07\x04\x02\x02}\x81\x05 \x11\x02~\x81\x05\x1E\x10" +
		"\x02\x7F\x81\x05\x1C\x0F\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x80\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02" +
		"\x82\x83\x03\x02\x02\x02\x83\x1B\x03\x02\x02\x02\x84\x87\x05 \x11\x02" +
		"\x85\x87\x05\x1E\x10\x02\x86\x84\x03\x02\x02\x02\x86\x85\x03\x02\x02\x02" +
		"\x87\x8D\x03\x02\x02\x02\x88\x8B\x07\x06\x02\x02\x89\x8C\x05 \x11\x02" +
		"\x8A\x8C\x05\x1E\x10\x02\x8B\x89\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02" +
		"\x8C\x8E\x03\x02\x02\x02\x8D\x88\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02" +
		"\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x1D\x03\x02\x02\x02" +
		"\x91\x94\x05 \x11\x02\x92\x93\x07\x05\x02\x02\x93\x95\x05 \x11\x02\x94" +
		"\x92\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96" +
		"\x97\x03\x02\x02\x02\x97\x1F\x03\x02\x02\x02\x98\x99\t\x02\x02\x02\x99" +
		"!\x03\x02\x02\x02\x14%+3;CKS[cksz\x80\x82\x86\x8B\x8F\x96";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!EdiX12Parser.__ATN) {
			EdiX12Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(EdiX12Parser._serializedATN));
		}

		return EdiX12Parser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public interchange(): InterchangeContext[];
	public interchange(i: number): InterchangeContext;
	public interchange(i?: number): InterchangeContext | InterchangeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterchangeContext);
		} else {
			return this.getRuleContext(i, InterchangeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_document; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterchangeContext extends ParserRuleContext {
	public interchangeHeader(): InterchangeHeaderContext {
		return this.getRuleContext(0, InterchangeHeaderContext);
	}
	public interchangeTrailer(): InterchangeTrailerContext {
		return this.getRuleContext(0, InterchangeTrailerContext);
	}
	public group(): GroupContext[];
	public group(i: number): GroupContext;
	public group(i?: number): GroupContext | GroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupContext);
		} else {
			return this.getRuleContext(i, GroupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_interchange; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterInterchange) {
			listener.enterInterchange(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitInterchange) {
			listener.exitInterchange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitInterchange) {
			return visitor.visitInterchange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public groupHeader(): GroupHeaderContext {
		return this.getRuleContext(0, GroupHeaderContext);
	}
	public groupTrailer(): GroupTrailerContext {
		return this.getRuleContext(0, GroupTrailerContext);
	}
	public transaction(): TransactionContext[];
	public transaction(i: number): TransactionContext;
	public transaction(i?: number): TransactionContext | TransactionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransactionContext);
		} else {
			return this.getRuleContext(i, TransactionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_group; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionContext extends ParserRuleContext {
	public transactionHeader(): TransactionHeaderContext {
		return this.getRuleContext(0, TransactionHeaderContext);
	}
	public transactionTrailer(): TransactionTrailerContext {
		return this.getRuleContext(0, TransactionTrailerContext);
	}
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_transaction; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterTransaction) {
			listener.enterTransaction(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitTransaction) {
			listener.exitTransaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitTransaction) {
			return visitor.visitTransaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public Tag(): TerminalNode { return this.getToken(EdiX12Parser.Tag, 0); }
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_segment; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitSegment) {
			return visitor.visitSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterchangeHeaderContext extends ParserRuleContext {
	public InterchangeHeader(): TerminalNode { return this.getToken(EdiX12Parser.InterchangeHeader, 0); }
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_interchangeHeader; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterInterchangeHeader) {
			listener.enterInterchangeHeader(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitInterchangeHeader) {
			listener.exitInterchangeHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitInterchangeHeader) {
			return visitor.visitInterchangeHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterchangeTrailerContext extends ParserRuleContext {
	public InterchangeTrailer(): TerminalNode { return this.getToken(EdiX12Parser.InterchangeTrailer, 0); }
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_interchangeTrailer; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterInterchangeTrailer) {
			listener.enterInterchangeTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitInterchangeTrailer) {
			listener.exitInterchangeTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitInterchangeTrailer) {
			return visitor.visitInterchangeTrailer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupHeaderContext extends ParserRuleContext {
	public GroupHeader(): TerminalNode { return this.getToken(EdiX12Parser.GroupHeader, 0); }
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_groupHeader; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterGroupHeader) {
			listener.enterGroupHeader(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitGroupHeader) {
			listener.exitGroupHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitGroupHeader) {
			return visitor.visitGroupHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupTrailerContext extends ParserRuleContext {
	public GroupTrailer(): TerminalNode { return this.getToken(EdiX12Parser.GroupTrailer, 0); }
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_groupTrailer; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterGroupTrailer) {
			listener.enterGroupTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitGroupTrailer) {
			listener.exitGroupTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitGroupTrailer) {
			return visitor.visitGroupTrailer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionHeaderContext extends ParserRuleContext {
	public TransactionHeader(): TerminalNode { return this.getToken(EdiX12Parser.TransactionHeader, 0); }
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_transactionHeader; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterTransactionHeader) {
			listener.enterTransactionHeader(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitTransactionHeader) {
			listener.exitTransactionHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitTransactionHeader) {
			return visitor.visitTransactionHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionTrailerContext extends ParserRuleContext {
	public TransactionTrailer(): TerminalNode { return this.getToken(EdiX12Parser.TransactionTrailer, 0); }
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_transactionTrailer; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterTransactionTrailer) {
			listener.enterTransactionTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitTransactionTrailer) {
			listener.exitTransactionTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitTransactionTrailer) {
			return visitor.visitTransactionTrailer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentEndContext extends ParserRuleContext {
	public SegmentTerminator(): TerminalNode { return this.getToken(EdiX12Parser.SegmentTerminator, 0); }
	public EndOfLine(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.EndOfLine, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_segmentEnd; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterSegmentEnd) {
			listener.enterSegmentEnd(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitSegmentEnd) {
			listener.exitSegmentEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitSegmentEnd) {
			return visitor.visitSegmentEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public DataSeparator(): TerminalNode { return this.getToken(EdiX12Parser.DataSeparator, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public component(): ComponentContext[];
	public component(i: number): ComponentContext;
	public component(i?: number): ComponentContext | ComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentContext);
		} else {
			return this.getRuleContext(i, ComponentContext);
		}
	}
	public repitition(): RepititionContext[];
	public repitition(i: number): RepititionContext;
	public repitition(i?: number): RepititionContext | RepititionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RepititionContext);
		} else {
			return this.getRuleContext(i, RepititionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_element; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepititionContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public component(): ComponentContext[];
	public component(i: number): ComponentContext;
	public component(i?: number): ComponentContext | ComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentContext);
		} else {
			return this.getRuleContext(i, ComponentContext);
		}
	}
	public RepititionSeparator(): TerminalNode[];
	public RepititionSeparator(i: number): TerminalNode;
	public RepititionSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.RepititionSeparator);
		} else {
			return this.getToken(EdiX12Parser.RepititionSeparator, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_repitition; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterRepitition) {
			listener.enterRepitition(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitRepitition) {
			listener.exitRepitition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitRepitition) {
			return visitor.visitRepitition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public ComponentSeparator(): TerminalNode[];
	public ComponentSeparator(i: number): TerminalNode;
	public ComponentSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.ComponentSeparator);
		} else {
			return this.getToken(EdiX12Parser.ComponentSeparator, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_component; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterComponent) {
			listener.enterComponent(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitComponent) {
			listener.exitComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public Numeric(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.Numeric, 0); }
	public Decimal(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.Decimal, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.String, 0); }
	public Binary(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.Binary, 0); }
	public NonPrintable(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.NonPrintable, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_value; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


