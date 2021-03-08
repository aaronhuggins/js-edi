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
	public static readonly DataSeparator = 1;
	public static readonly RepititionSeparator = 2;
	public static readonly ComponentSeparator = 3;
	public static readonly SegmentTerminator = 4;
	public static readonly EndOfLine = 5;
	public static readonly ControlChar = 6;
	public static readonly Char = 7;
	public static readonly InterchangeHeader = 8;
	public static readonly InterchangeTrailer = 9;
	public static readonly GroupHeader = 10;
	public static readonly GroupTrailer = 11;
	public static readonly TransactionHeader = 12;
	public static readonly TransactionTrailer = 13;
	public static readonly Tag = 14;
	public static readonly NonPrintable = 15;
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
	public static readonly RULE_interchangeElement = 13;
	public static readonly RULE_strictElement = 14;
	public static readonly RULE_dataCharElement = 15;
	public static readonly RULE_repititionCharElement = 16;
	public static readonly RULE_componentCharElement = 17;
	public static readonly RULE_repitition = 18;
	public static readonly RULE_component = 19;
	public static readonly RULE_value = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "interchange", "group", "transaction", "segment", "interchangeHeader", 
		"interchangeTrailer", "groupHeader", "groupTrailer", "transactionHeader", 
		"transactionTrailer", "segmentEnd", "element", "interchangeElement", "strictElement", 
		"dataCharElement", "repititionCharElement", "componentCharElement", "repitition", 
		"component", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'ISA'", "'IEA'", "'GS'", "'GE'", "'ST'", "'SE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DataSeparator", "RepititionSeparator", "ComponentSeparator", 
		"SegmentTerminator", "EndOfLine", "ControlChar", "Char", "InterchangeHeader", 
		"InterchangeTrailer", "GroupHeader", "GroupTrailer", "TransactionHeader", 
		"TransactionTrailer", "Tag", "NonPrintable",
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
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 42;
				this.interchange();
				}
				}
				this.state = 45;
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
			this.state = 47;
			this.interchangeHeader();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 48;
				this.group();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.GroupHeader);
			this.state = 53;
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
			this.state = 55;
			this.groupHeader();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 56;
				this.transaction();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.TransactionHeader);
			this.state = 61;
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
			this.state = 63;
			this.transactionHeader();
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 64;
				this.segment();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.Tag);
			this.state = 69;
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
			this.state = 71;
			this.match(EdiX12Parser.Tag);
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 72;
				this.element();
				}
				}
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 77;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(EdiX12Parser.InterchangeHeader);
			this.state = 80;
			this.interchangeElement();
			this.state = 81;
			this.interchangeElement();
			this.state = 82;
			this.interchangeElement();
			this.state = 83;
			this.interchangeElement();
			this.state = 84;
			this.interchangeElement();
			this.state = 85;
			this.interchangeElement();
			this.state = 86;
			this.interchangeElement();
			this.state = 87;
			this.interchangeElement();
			this.state = 88;
			this.interchangeElement();
			this.state = 89;
			this.interchangeElement();
			this.state = 90;
			this.interchangeElement();
			this.state = 91;
			this.interchangeElement();
			this.state = 92;
			this.interchangeElement();
			this.state = 93;
			this.interchangeElement();
			this.state = 94;
			this.interchangeElement();
			this.state = 95;
			this.interchangeElement();
			this.state = 96;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(EdiX12Parser.InterchangeTrailer);
			this.state = 99;
			this.strictElement();
			this.state = 100;
			this.strictElement();
			this.state = 101;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(EdiX12Parser.GroupHeader);
			this.state = 104;
			this.strictElement();
			this.state = 105;
			this.strictElement();
			this.state = 106;
			this.strictElement();
			this.state = 107;
			this.strictElement();
			this.state = 108;
			this.strictElement();
			this.state = 109;
			this.strictElement();
			this.state = 110;
			this.strictElement();
			this.state = 111;
			this.strictElement();
			this.state = 112;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(EdiX12Parser.GroupTrailer);
			this.state = 115;
			this.strictElement();
			this.state = 116;
			this.strictElement();
			this.state = 117;
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
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 119;
				this.match(EdiX12Parser.TransactionHeader);
				this.state = 120;
				this.strictElement();
				this.state = 121;
				this.strictElement();
				this.state = 122;
				this.strictElement();
				this.state = 123;
				this.segmentEnd();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 125;
				this.match(EdiX12Parser.TransactionHeader);
				this.state = 126;
				this.strictElement();
				this.state = 127;
				this.strictElement();
				this.state = 128;
				this.segmentEnd();
				}
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
	public transactionTrailer(): TransactionTrailerContext {
		let _localctx: TransactionTrailerContext = new TransactionTrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, EdiX12Parser.RULE_transactionTrailer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(EdiX12Parser.TransactionTrailer);
			this.state = 133;
			this.strictElement();
			this.state = 134;
			this.strictElement();
			this.state = 135;
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
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.match(EdiX12Parser.ControlChar);
				this.state = 138;
				this.match(EdiX12Parser.ControlChar);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this.match(EdiX12Parser.ControlChar);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 140;
				this.match(EdiX12Parser.SegmentTerminator);
				this.state = 141;
				this.match(EdiX12Parser.EndOfLine);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 142;
				this.match(EdiX12Parser.SegmentTerminator);
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
			this.state = 145;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.RepititionSeparator) | (1 << EdiX12Parser.ComponentSeparator) | (1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				this.state = 149;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 146;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 147;
					this.component();
					}
					break;

				case 3:
					{
					this.state = 148;
					this.repitition();
					}
					break;
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public interchangeElement(): InterchangeElementContext {
		let _localctx: InterchangeElementContext = new InterchangeElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, EdiX12Parser.RULE_interchangeElement);
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.dataCharElement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.strictElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.repititionCharElement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 157;
				this.componentCharElement();
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
	public strictElement(): StrictElementContext {
		let _localctx: StrictElementContext = new StrictElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, EdiX12Parser.RULE_strictElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 161;
				this.value();
				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
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
	public dataCharElement(): DataCharElementContext {
		let _localctx: DataCharElementContext = new DataCharElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, EdiX12Parser.RULE_dataCharElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!(_la === EdiX12Parser.DataSeparator || _la === EdiX12Parser.ControlChar)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 167;
				this.value();
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
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
	public repititionCharElement(): RepititionCharElementContext {
		let _localctx: RepititionCharElementContext = new RepititionCharElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, EdiX12Parser.RULE_repititionCharElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EdiX12Parser.ControlChar:
				{
				this.state = 173;
				this.match(EdiX12Parser.ControlChar);
				}
				break;
			case EdiX12Parser.RepititionSeparator:
				{
				this.state = 174;
				this.match(EdiX12Parser.RepititionSeparator);
				}
				break;
			case EdiX12Parser.Char:
			case EdiX12Parser.InterchangeHeader:
			case EdiX12Parser.InterchangeTrailer:
			case EdiX12Parser.GroupHeader:
			case EdiX12Parser.GroupTrailer:
			case EdiX12Parser.TransactionHeader:
			case EdiX12Parser.TransactionTrailer:
			case EdiX12Parser.Tag:
			case EdiX12Parser.NonPrintable:
				{
				this.state = 175;
				this.value();
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
	public componentCharElement(): ComponentCharElementContext {
		let _localctx: ComponentCharElementContext = new ComponentCharElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, EdiX12Parser.RULE_componentCharElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 179;
			_la = this._input.LA(1);
			if (!(_la === EdiX12Parser.ComponentSeparator || _la === EdiX12Parser.ControlChar)) {
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
	// @RuleVersion(0)
	public repitition(): RepititionContext {
		let _localctx: RepititionContext = new RepititionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, EdiX12Parser.RULE_repitition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.ComponentSeparator) | (1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				this.state = 183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 181;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 182;
					this.component();
					}
					break;
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 196;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 188;
					this.match(EdiX12Parser.RepititionSeparator);
					this.state = 193;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							this.state = 191;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
							case 1:
								{
								this.state = 189;
								this.value();
								}
								break;

							case 2:
								{
								this.state = 190;
								this.component();
								}
								break;
							}
							}
						}
						this.state = 195;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 198;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(_localctx, 38, EdiX12Parser.RULE_component);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				{
				this.state = 200;
				this.value();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 213;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 206;
					this.match(EdiX12Parser.ComponentSeparator);
					this.state = 210;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 207;
							this.value();
							}
							}
						}
						this.state = 212;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(_localctx, 40, EdiX12Parser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11\xDE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x06\x02." +
		"\n\x02\r\x02\x0E\x02/\x03\x03\x03\x03\x06\x034\n\x03\r\x03\x0E\x035\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x06\x04<\n\x04\r\x04\x0E\x04=\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x06\x05D\n\x05\r\x05\x0E\x05E\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x06\x06L\n\x06\r\x06\x0E\x06M\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x85\n\v\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x92\n\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x98\n\x0E\f\x0E\x0E\x0E\x9B\v\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA1\n\x0F\x03\x10\x03\x10\x06" +
		"\x10\xA5\n\x10\r\x10\x0E\x10\xA6\x03\x11\x03\x11\x06\x11\xAB\n\x11\r\x11" +
		"\x0E\x11\xAC\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB3\n\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\xBA\n\x14\f\x14\x0E\x14\xBD\v" +
		"\x14\x03\x14\x03\x14\x03\x14\x07\x14\xC2\n\x14\f\x14\x0E\x14\xC5\v\x14" +
		"\x06\x14\xC7\n\x14\r\x14\x0E\x14\xC8\x03\x15\x07\x15\xCC\n\x15\f\x15\x0E" +
		"\x15\xCF\v\x15\x03\x15\x03\x15\x07\x15\xD3\n\x15\f\x15\x0E\x15\xD6\v\x15" +
		"\x06\x15\xD8\n\x15\r\x15\x0E\x15\xD9\x03\x16\x03\x16\x03\x16\x02\x02\x02" +
		"\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02\x02\x05\x04\x02\x03\x03\b\b\x04\x02\x05\x05\b\b\x03\x02\t\x11" +
		"\x02\xE3\x02-\x03\x02\x02\x02\x041\x03\x02\x02\x02\x069\x03\x02\x02\x02" +
		"\bA\x03\x02\x02\x02\nI\x03\x02\x02\x02\fQ\x03\x02\x02\x02\x0Ed\x03\x02" +
		"\x02\x02\x10i\x03\x02\x02\x02\x12t\x03\x02\x02\x02\x14\x84\x03\x02\x02" +
		"\x02\x16\x86\x03\x02\x02\x02\x18\x91\x03\x02\x02\x02\x1A\x93\x03\x02\x02" +
		"\x02\x1C\xA0\x03\x02\x02\x02\x1E\xA2\x03\x02\x02\x02 \xA8\x03\x02\x02" +
		"\x02\"\xAE\x03\x02\x02\x02$\xB4\x03\x02\x02\x02&\xBB\x03\x02\x02\x02(" +
		"\xCD\x03\x02\x02\x02*\xDB\x03\x02\x02\x02,.\x05\x04\x03\x02-,\x03\x02" +
		"\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x03\x03" +
		"\x02\x02\x0213\x05\f\x07\x0224\x05\x06\x04\x0232\x03\x02\x02\x0245\x03" +
		"\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x0278\x05" +
		"\x0E\b\x028\x05\x03\x02\x02\x029;\x05\x10\t\x02:<\x05\b\x05\x02;:\x03" +
		"\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03" +
		"\x02\x02\x02?@\x05\x12\n\x02@\x07\x03\x02\x02\x02AC\x05\x14\v\x02BD\x05" +
		"\n\x06\x02CB\x03\x02\x02\x02DE\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03" +
		"\x02\x02\x02FG\x03\x02\x02\x02GH\x05\x16\f\x02H\t\x03\x02\x02\x02IK\x07" +
		"\x10\x02\x02JL\x05\x1A\x0E\x02KJ\x03\x02\x02\x02LM\x03\x02\x02\x02MK\x03" +
		"\x02\x02\x02MN\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x05\x18\r\x02P\v\x03" +
		"\x02\x02\x02QR\x07\n\x02\x02RS\x05\x1C\x0F\x02ST\x05\x1C\x0F\x02TU\x05" +
		"\x1C\x0F\x02UV\x05\x1C\x0F\x02VW\x05\x1C\x0F\x02WX\x05\x1C\x0F\x02XY\x05" +
		"\x1C\x0F\x02YZ\x05\x1C\x0F\x02Z[\x05\x1C\x0F\x02[\\\x05\x1C\x0F\x02\\" +
		"]\x05\x1C\x0F\x02]^\x05\x1C\x0F\x02^_\x05\x1C\x0F\x02_`\x05\x1C\x0F\x02" +
		"`a\x05\x1C\x0F\x02ab\x05\x1C\x0F\x02bc\x05\x18\r\x02c\r\x03\x02\x02\x02" +
		"de\x07\v\x02\x02ef\x05\x1E\x10\x02fg\x05\x1E\x10\x02gh\x05\x18\r\x02h" +
		"\x0F\x03\x02\x02\x02ij\x07\f\x02\x02jk\x05\x1E\x10\x02kl\x05\x1E\x10\x02" +
		"lm\x05\x1E\x10\x02mn\x05\x1E\x10\x02no\x05\x1E\x10\x02op\x05\x1E\x10\x02" +
		"pq\x05\x1E\x10\x02qr\x05\x1E\x10\x02rs\x05\x18\r\x02s\x11\x03\x02\x02" +
		"\x02tu\x07\r\x02\x02uv\x05\x1E\x10\x02vw\x05\x1E\x10\x02wx\x05\x18\r\x02" +
		"x\x13\x03\x02\x02\x02yz\x07\x0E\x02\x02z{\x05\x1E\x10\x02{|\x05\x1E\x10" +
		"\x02|}\x05\x1E\x10\x02}~\x05\x18\r\x02~\x85\x03\x02\x02\x02\x7F\x80\x07" +
		"\x0E\x02\x02\x80\x81\x05\x1E\x10\x02\x81\x82\x05\x1E\x10\x02\x82\x83\x05" +
		"\x18\r\x02\x83\x85\x03\x02\x02\x02\x84y\x03\x02\x02\x02\x84\x7F\x03\x02" +
		"\x02\x02\x85\x15\x03\x02\x02\x02\x86\x87\x07\x0F\x02\x02\x87\x88\x05\x1E" +
		"\x10\x02\x88\x89\x05\x1E\x10\x02\x89\x8A\x05\x18\r\x02\x8A\x17\x03\x02" +
		"\x02\x02\x8B\x8C\x07\b\x02\x02\x8C\x92\x07\b\x02\x02\x8D\x92\x07\b\x02" +
		"\x02\x8E\x8F\x07\x06\x02\x02\x8F\x92\x07\x07\x02\x02\x90\x92\x07\x06\x02" +
		"\x02\x91\x8B\x03\x02\x02\x02\x91\x8D\x03\x02\x02\x02\x91\x8E\x03\x02\x02" +
		"\x02\x91\x90\x03\x02\x02\x02\x92\x19\x03\x02\x02\x02\x93\x99\x07\x03\x02" +
		"\x02\x94\x98\x05*\x16\x02\x95\x98\x05(\x15\x02\x96\x98\x05&\x14\x02\x97" +
		"\x94\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98" +
		"\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A" +
		"\x1B\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\xA1\x05 \x11\x02\x9D" +
		"\xA1\x05\x1E\x10\x02\x9E\xA1\x05\"\x12\x02\x9F\xA1\x05$\x13\x02\xA0\x9C" +
		"\x03\x02\x02\x02\xA0\x9D\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\x9F" +
		"\x03\x02\x02\x02\xA1\x1D\x03\x02\x02\x02\xA2\xA4\x07\x03\x02\x02\xA3\xA5" +
		"\x05*\x16\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA4" +
		"\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\x1F\x03\x02\x02\x02\xA8\xAA" +
		"\t\x02\x02\x02\xA9\xAB\x05*\x16\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03" +
		"\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD!\x03" +
		"\x02\x02\x02\xAE\xB2\x07\x03\x02\x02\xAF\xB3\x07\b\x02\x02\xB0\xB3\x07" +
		"\x04\x02\x02\xB1\xB3\x05*\x16\x02\xB2\xAF\x03\x02\x02\x02\xB2\xB0\x03" +
		"\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3#\x03\x02\x02\x02\xB4\xB5\x07" +
		"\x03\x02\x02\xB5\xB6\t\x03\x02\x02\xB6%\x03\x02\x02\x02\xB7\xBA\x05*\x16" +
		"\x02\xB8\xBA\x05(\x15\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03\x02\x02" +
		"\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02" +
		"\x02\xBC\xC6\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC3\x07\x04\x02" +
		"\x02\xBF\xC2\x05*\x16\x02\xC0\xC2\x05(\x15\x02\xC1\xBF\x03\x02\x02\x02" +
		"\xC1\xC0\x03\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02" +
		"\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02" +
		"\xC6\xBE\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02" +
		"\xC8\xC9\x03\x02\x02\x02\xC9\'\x03\x02\x02\x02\xCA\xCC\x05*\x16\x02\xCB" +
		"\xCA\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD" +
		"\xCE\x03\x02\x02\x02\xCE\xD7\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0" +
		"\xD4\x07\x05\x02\x02\xD1\xD3\x05*\x16\x02\xD2\xD1\x03\x02\x02\x02\xD3" +
		"\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5" +
		"\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD0\x03\x02\x02\x02\xD8" +
		"\xD9\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		")\x03\x02\x02\x02\xDB\xDC\t\x04\x02\x02\xDC+\x03\x02\x02\x02\x17/5=EM" +
		"\x84\x91\x97\x99\xA0\xA6\xAC\xB2\xB9\xBB\xC1\xC3\xC8\xCD\xD4\xD9";
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
	public interchangeElement(): InterchangeElementContext[];
	public interchangeElement(i: number): InterchangeElementContext;
	public interchangeElement(i?: number): InterchangeElementContext | InterchangeElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterchangeElementContext);
		} else {
			return this.getRuleContext(i, InterchangeElementContext);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
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
	public strictElement(): StrictElementContext[];
	public strictElement(i: number): StrictElementContext;
	public strictElement(i?: number): StrictElementContext | StrictElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrictElementContext);
		} else {
			return this.getRuleContext(i, StrictElementContext);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
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
	public strictElement(): StrictElementContext[];
	public strictElement(i: number): StrictElementContext;
	public strictElement(i?: number): StrictElementContext | StrictElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrictElementContext);
		} else {
			return this.getRuleContext(i, StrictElementContext);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
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
	public strictElement(): StrictElementContext[];
	public strictElement(i: number): StrictElementContext;
	public strictElement(i?: number): StrictElementContext | StrictElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrictElementContext);
		} else {
			return this.getRuleContext(i, StrictElementContext);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
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
	public TransactionHeader(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.TransactionHeader, 0); }
	public strictElement(): StrictElementContext[];
	public strictElement(i: number): StrictElementContext;
	public strictElement(i?: number): StrictElementContext | StrictElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrictElementContext);
		} else {
			return this.getRuleContext(i, StrictElementContext);
		}
	}
	public segmentEnd(): SegmentEndContext | undefined {
		return this.tryGetRuleContext(0, SegmentEndContext);
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
	public strictElement(): StrictElementContext[];
	public strictElement(i: number): StrictElementContext;
	public strictElement(i?: number): StrictElementContext | StrictElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrictElementContext);
		} else {
			return this.getRuleContext(i, StrictElementContext);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
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
	public ControlChar(): TerminalNode[];
	public ControlChar(i: number): TerminalNode;
	public ControlChar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.ControlChar);
		} else {
			return this.getToken(EdiX12Parser.ControlChar, i);
		}
	}
	public SegmentTerminator(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.SegmentTerminator, 0); }
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


export class InterchangeElementContext extends ParserRuleContext {
	public dataCharElement(): DataCharElementContext | undefined {
		return this.tryGetRuleContext(0, DataCharElementContext);
	}
	public strictElement(): StrictElementContext | undefined {
		return this.tryGetRuleContext(0, StrictElementContext);
	}
	public repititionCharElement(): RepititionCharElementContext | undefined {
		return this.tryGetRuleContext(0, RepititionCharElementContext);
	}
	public componentCharElement(): ComponentCharElementContext | undefined {
		return this.tryGetRuleContext(0, ComponentCharElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_interchangeElement; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterInterchangeElement) {
			listener.enterInterchangeElement(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitInterchangeElement) {
			listener.exitInterchangeElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitInterchangeElement) {
			return visitor.visitInterchangeElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictElementContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_strictElement; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterStrictElement) {
			listener.enterStrictElement(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitStrictElement) {
			listener.exitStrictElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitStrictElement) {
			return visitor.visitStrictElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataCharElementContext extends ParserRuleContext {
	public ControlChar(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.ControlChar, 0); }
	public DataSeparator(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.DataSeparator, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_dataCharElement; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterDataCharElement) {
			listener.enterDataCharElement(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitDataCharElement) {
			listener.exitDataCharElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitDataCharElement) {
			return visitor.visitDataCharElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepititionCharElementContext extends ParserRuleContext {
	public DataSeparator(): TerminalNode { return this.getToken(EdiX12Parser.DataSeparator, 0); }
	public ControlChar(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.ControlChar, 0); }
	public RepititionSeparator(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.RepititionSeparator, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_repititionCharElement; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterRepititionCharElement) {
			listener.enterRepititionCharElement(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitRepititionCharElement) {
			listener.exitRepititionCharElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitRepititionCharElement) {
			return visitor.visitRepititionCharElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentCharElementContext extends ParserRuleContext {
	public DataSeparator(): TerminalNode { return this.getToken(EdiX12Parser.DataSeparator, 0); }
	public ControlChar(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.ControlChar, 0); }
	public ComponentSeparator(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.ComponentSeparator, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_componentCharElement; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterComponentCharElement) {
			listener.enterComponentCharElement(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitComponentCharElement) {
			listener.exitComponentCharElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitComponentCharElement) {
			return visitor.visitComponentCharElement(this);
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
	public Tag(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.Tag, 0); }
	public Char(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.Char, 0); }
	public NonPrintable(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.NonPrintable, 0); }
	public InterchangeHeader(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.InterchangeHeader, 0); }
	public InterchangeTrailer(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.InterchangeTrailer, 0); }
	public GroupHeader(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.GroupHeader, 0); }
	public GroupTrailer(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.GroupTrailer, 0); }
	public TransactionHeader(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.TransactionHeader, 0); }
	public TransactionTrailer(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.TransactionTrailer, 0); }
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


