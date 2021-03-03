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
			this.state = 70;
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
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 71;
				this.value();
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 76;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 77;
				this.value();
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 82;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 83;
				this.value();
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 88;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 89;
				this.value();
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 94;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 95;
				this.value();
				}
				}
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 100;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 101;
				this.value();
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 106;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 107;
				this.value();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 112;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 113;
				this.value();
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 118;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 119;
				this.value();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 124;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 125;
				this.value();
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 130;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EdiX12Parser.ControlChar:
				{
				this.state = 131;
				this.match(EdiX12Parser.ControlChar);
				}
				break;
			case EdiX12Parser.RepititionSeparator:
				{
				this.state = 132;
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
				this.state = 133;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 136;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 137;
				this.value();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 142;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 143;
				this.value();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 148;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 149;
				this.value();
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 154;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 155;
				this.value();
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 160;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 161;
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
			this.state = 162;
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
			this.state = 164;
			this.match(EdiX12Parser.InterchangeTrailer);
			this.state = 165;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 166;
				this.value();
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 171;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 172;
				this.value();
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 177;
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
			this.state = 179;
			this.match(EdiX12Parser.GroupHeader);
			this.state = 180;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				{
				this.state = 181;
				this.value();
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 187;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 188;
				this.value();
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 193;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 194;
				this.value();
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 199;
			this.match(EdiX12Parser.DataSeparator);
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
			this.state = 206;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 207;
				this.value();
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 212;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 213;
				this.value();
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 218;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 219;
				this.value();
				}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 224;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 225;
				this.value();
				}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 230;
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
			this.state = 232;
			this.match(EdiX12Parser.GroupTrailer);
			this.state = 233;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 234;
				this.value();
				}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 239;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 240;
				this.value();
				}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 245;
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
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 247;
				this.match(EdiX12Parser.TransactionHeader);
				this.state = 248;
				this.match(EdiX12Parser.DataSeparator);
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 249;
					this.value();
					}
					}
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
				this.state = 254;
				this.match(EdiX12Parser.DataSeparator);
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 255;
					this.value();
					}
					}
					this.state = 258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
				this.state = 260;
				this.match(EdiX12Parser.DataSeparator);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 261;
					this.value();
					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
				this.state = 266;
				this.segmentEnd();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 268;
				this.match(EdiX12Parser.TransactionHeader);
				this.state = 269;
				this.match(EdiX12Parser.DataSeparator);
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 270;
					this.value();
					}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
				this.state = 275;
				this.match(EdiX12Parser.DataSeparator);
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 276;
					this.value();
					}
					}
					this.state = 279;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
				this.state = 281;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(EdiX12Parser.TransactionTrailer);
			this.state = 286;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 287;
				this.value();
				}
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 292;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 293;
				this.value();
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0));
			this.state = 298;
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
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				this.match(EdiX12Parser.ControlChar);
				this.state = 301;
				this.match(EdiX12Parser.ControlChar);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 302;
				this.match(EdiX12Parser.ControlChar);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 303;
				this.match(EdiX12Parser.SegmentTerminator);
				this.state = 304;
				this.match(EdiX12Parser.EndOfLine);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 305;
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
			this.state = 308;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.RepititionSeparator) | (1 << EdiX12Parser.ComponentSeparator) | (1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				this.state = 312;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 309;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 310;
					this.component();
					}
					break;

				case 3:
					{
					this.state = 311;
					this.repitition();
					}
					break;
				}
				}
				this.state = 316;
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
	public repitition(): RepititionContext {
		let _localctx: RepititionContext = new RepititionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, EdiX12Parser.RULE_repitition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.ComponentSeparator) | (1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				this.state = 319;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 317;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 318;
					this.component();
					}
					break;
				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 332;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 324;
					this.match(EdiX12Parser.RepititionSeparator);
					this.state = 329;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							this.state = 327;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
							case 1:
								{
								this.state = 325;
								this.value();
								}
								break;

							case 2:
								{
								this.state = 326;
								this.component();
								}
								break;
							}
							}
						}
						this.state = 331;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
		this.enterRule(_localctx, 28, EdiX12Parser.RULE_component);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				{
				this.state = 336;
				this.value();
				}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 349;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 342;
					this.match(EdiX12Parser.ComponentSeparator);
					this.state = 346;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 343;
							this.value();
							}
							}
						}
						this.state = 348;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 351;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
		this.enterRule(_localctx, 30, EdiX12Parser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11\u0166\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x06\x02" +
		"$\n\x02\r\x02\x0E\x02%\x03\x03\x03\x03\x06\x03*\n\x03\r\x03\x0E\x03+\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x06\x042\n\x04\r\x04\x0E\x043\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x06\x05:\n\x05\r\x05\x0E\x05;\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x06\x06B\n\x06\r\x06\x0E\x06C\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x06\x07K\n\x07\r\x07\x0E\x07L\x03\x07\x03\x07\x06\x07Q\n" +
		"\x07\r\x07\x0E\x07R\x03\x07\x03\x07\x06\x07W\n\x07\r\x07\x0E\x07X\x03" +
		"\x07\x03\x07\x06\x07]\n\x07\r\x07\x0E\x07^\x03\x07\x03\x07\x06\x07c\n" +
		"\x07\r\x07\x0E\x07d\x03\x07\x03\x07\x06\x07i\n\x07\r\x07\x0E\x07j\x03" +
		"\x07\x03\x07\x06\x07o\n\x07\r\x07\x0E\x07p\x03\x07\x03\x07\x06\x07u\n" +
		"\x07\r\x07\x0E\x07v\x03\x07\x03\x07\x06\x07{\n\x07\r\x07\x0E\x07|\x03" +
		"\x07\x03\x07\x06\x07\x81\n\x07\r\x07\x0E\x07\x82\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\x89\n\x07\x03\x07\x03\x07\x06\x07\x8D\n\x07\r\x07\x0E" +
		"\x07\x8E\x03\x07\x03\x07\x06\x07\x93\n\x07\r\x07\x0E\x07\x94\x03\x07\x03" +
		"\x07\x06\x07\x99\n\x07\r\x07\x0E\x07\x9A\x03\x07\x03\x07\x06\x07\x9F\n" +
		"\x07\r\x07\x0E\x07\xA0\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x06\b\xAA\n\b\r\b\x0E\b\xAB\x03\b\x03\b\x06\b\xB0\n\b\r\b\x0E\b\xB1" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t\xB9\n\t\f\t\x0E\t\xBC\v\t\x03\t\x03" +
		"\t\x06\t\xC0\n\t\r\t\x0E\t\xC1\x03\t\x03\t\x06\t\xC6\n\t\r\t\x0E\t\xC7" +
		"\x03\t\x03\t\x07\t\xCC\n\t\f\t\x0E\t\xCF\v\t\x03\t\x03\t\x06\t\xD3\n\t" +
		"\r\t\x0E\t\xD4\x03\t\x03\t\x06\t\xD9\n\t\r\t\x0E\t\xDA\x03\t\x03\t\x06" +
		"\t\xDF\n\t\r\t\x0E\t\xE0\x03\t\x03\t\x06\t\xE5\n\t\r\t\x0E\t\xE6\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x06\n\xEE\n\n\r\n\x0E\n\xEF\x03\n\x03\n\x06\n" +
		"\xF4\n\n\r\n\x0E\n\xF5\x03\n\x03\n\x03\v\x03\v\x03\v\x06\v\xFD\n\v\r\v" +
		"\x0E\v\xFE\x03\v\x03\v\x06\v\u0103\n\v\r\v\x0E\v\u0104\x03\v\x03\v\x06" +
		"\v\u0109\n\v\r\v\x0E\v\u010A\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\u0112" +
		"\n\v\r\v\x0E\v\u0113\x03\v\x03\v\x06\v\u0118\n\v\r\v\x0E\v\u0119\x03\v" +
		"\x03\v\x05\v\u011E\n\v\x03\f\x03\f\x03\f\x06\f\u0123\n\f\r\f\x0E\f\u0124" +
		"\x03\f\x03\f\x06\f\u0129\n\f\r\f\x0E\f\u012A\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0135\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\u013B\n\x0E\f\x0E\x0E\x0E\u013E\v\x0E\x03\x0F\x03\x0F\x07\x0F\u0142" +
		"\n\x0F\f\x0F\x0E\x0F\u0145\v\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u014A" +
		"\n\x0F\f\x0F\x0E\x0F\u014D\v\x0F\x06\x0F\u014F\n\x0F\r\x0F\x0E\x0F\u0150" +
		"\x03\x10\x07\x10\u0154\n\x10\f\x10\x0E\x10\u0157\v\x10\x03\x10\x03\x10" +
		"\x07\x10\u015B\n\x10\f\x10\x0E\x10\u015E\v\x10\x06\x10\u0160\n\x10\r\x10" +
		"\x0E\x10\u0161\x03\x11\x03\x11\x03\x11\x02\x02\x02\x12\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x05\x04\x02\x03\x03\b\b\x04\x02" +
		"\x05\x05\b\b\x03\x02\t\x11\x02\u018C\x02#\x03\x02\x02\x02\x04\'\x03\x02" +
		"\x02\x02\x06/\x03\x02\x02\x02\b7\x03\x02\x02\x02\n?\x03\x02\x02\x02\f" +
		"G\x03\x02\x02\x02\x0E\xA6\x03\x02\x02\x02\x10\xB5\x03\x02\x02\x02\x12" +
		"\xEA\x03\x02\x02\x02\x14\u011D\x03\x02\x02\x02\x16\u011F\x03\x02\x02\x02" +
		"\x18\u0134\x03\x02\x02\x02\x1A\u0136\x03\x02\x02\x02\x1C\u0143\x03\x02" +
		"\x02\x02\x1E\u0155\x03\x02\x02\x02 \u0163\x03\x02\x02\x02\"$\x05\x04\x03" +
		"\x02#\"\x03\x02\x02\x02$%\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02" +
		"\x02\x02&\x03\x03\x02\x02\x02\')\x05\f\x07\x02(*\x05\x06\x04\x02)(\x03" +
		"\x02\x02\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03" +
		"\x02\x02\x02-.\x05\x0E\b\x02.\x05\x03\x02\x02\x02/1\x05\x10\t\x0202\x05" +
		"\b\x05\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03" +
		"\x02\x02\x0245\x03\x02\x02\x0256\x05\x12\n\x026\x07\x03\x02\x02\x0279" +
		"\x05\x14\v\x028:\x05\n\x06\x0298\x03\x02\x02\x02:;\x03\x02\x02\x02;9\x03" +
		"\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x05\x16\f\x02>\t\x03" +
		"\x02\x02\x02?A\x07\x10\x02\x02@B\x05\x1A\x0E\x02A@\x03\x02\x02\x02BC\x03" +
		"\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x05" +
		"\x18\r\x02F\v\x03\x02\x02\x02GH\x07\n\x02\x02HJ\t\x02\x02\x02IK\x05 \x11" +
		"\x02JI\x03\x02\x02\x02KL\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02" +
		"\x02MN\x03\x02\x02\x02NP\x07\x03\x02\x02OQ\x05 \x11\x02PO\x03\x02\x02" +
		"\x02QR\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x03\x02\x02" +
		"\x02TV\x07\x03\x02\x02UW\x05 \x11\x02VU\x03\x02\x02\x02WX\x03\x02\x02" +
		"\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x07\x03" +
		"\x02\x02[]\x05 \x11\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03\x02" +
		"\x02\x02^_\x03\x02\x02\x02_`\x03\x02\x02\x02`b\x07\x03\x02\x02ac\x05 " +
		"\x11\x02ba\x03\x02\x02\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02" +
		"\x02\x02ef\x03\x02\x02\x02fh\x07\x03\x02\x02gi\x05 \x11\x02hg\x03\x02" +
		"\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02ln\x07\x03\x02\x02mo\x05 \x11\x02nm\x03\x02\x02\x02op\x03\x02" +
		"\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02rt\x07\x03" +
		"\x02\x02su\x05 \x11\x02ts\x03\x02\x02\x02uv\x03\x02\x02\x02vt\x03\x02" +
		"\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x07\x03\x02\x02y{\x05 " +
		"\x11\x02zy\x03\x02\x02\x02{|\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02" +
		"\x02\x02}~\x03\x02\x02\x02~\x80\x07\x03\x02\x02\x7F\x81\x05 \x11\x02\x80" +
		"\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82" +
		"\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x88\x07\x03\x02\x02\x85" +
		"\x89\x07\b\x02\x02\x86\x89\x07\x04\x02\x02\x87\x89\x05 \x11\x02\x88\x85" +
		"\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x87\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\x8C\x07\x03\x02\x02\x8B\x8D\x05 \x11\x02\x8C\x8B" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F" +
		"\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x07\x03\x02\x02\x91\x93" +
		"\x05 \x11\x02\x92\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x92" +
		"\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98" +
		"\x07\x03\x02\x02\x97\x99\x05 \x11\x02\x98\x97\x03\x02\x02\x02\x99\x9A" +
		"\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C" +
		"\x03\x02\x02\x02\x9C\x9E\x07\x03\x02\x02\x9D\x9F\x05 \x11\x02\x9E\x9D" +
		"\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1" +
		"\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x07\x03\x02\x02\xA3\xA4" +
		"\t\x03\x02\x02\xA4\xA5\x05\x18\r\x02\xA5\r\x03\x02\x02\x02\xA6\xA7\x07" +
		"\v\x02\x02\xA7\xA9\x07\x03\x02\x02\xA8\xAA\x05 \x11\x02\xA9\xA8\x03\x02" +
		"\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02" +
		"\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x07\x03\x02\x02\xAE\xB0\x05 " +
		"\x11\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xAF\x03\x02" +
		"\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x05\x18" +
		"\r\x02\xB4\x0F\x03\x02\x02\x02\xB5\xB6\x07\f\x02\x02\xB6\xBA\x07\x03\x02" +
		"\x02\xB7\xB9\x05 \x11\x02\xB8\xB7\x03\x02\x02\x02\xB9\xBC\x03\x02\x02" +
		"\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x03\x02\x02" +
		"\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBF\x07\x03\x02\x02\xBE\xC0\x05 \x11" +
		"\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xBF\x03\x02\x02" +
		"\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x07\x03\x02" +
		"\x02\xC4\xC6\x05 \x11\x02\xC5\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02" +
		"\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02" +
		"\x02\xC9\xCD\x07\x03\x02\x02\xCA\xCC\x05 \x11\x02\xCB\xCA\x03\x02\x02" +
		"\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02" +
		"\x02\xCE\xD0\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD2\x07\x03\x02" +
		"\x02\xD1\xD3\x05 \x11\x02\xD2\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
		"\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6\x03\x02\x02" +
		"\x02\xD6\xD8\x07\x03\x02\x02\xD7\xD9\x05 \x11\x02\xD8\xD7\x03\x02\x02" +
		"\x02\xD9\xDA\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02" +
		"\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x07\x03\x02\x02\xDD\xDF\x05 \x11" +
		"\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xDE\x03\x02\x02" +
		"\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x07\x03\x02" +
		"\x02\xE3\xE5\x05 \x11\x02\xE4\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02" +
		"\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02" +
		"\x02\xE8\xE9\x05\x18\r\x02\xE9\x11\x03\x02\x02\x02\xEA\xEB\x07\r\x02\x02" +
		"\xEB\xED\x07\x03\x02\x02\xEC\xEE\x05 \x11\x02\xED\xEC\x03\x02\x02\x02" +
		"\xEE\xEF\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02" +
		"\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x07\x03\x02\x02\xF2\xF4\x05 \x11\x02" +
		"\xF3\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02" +
		"\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x05\x18\r\x02" +
		"\xF8\x13\x03\x02\x02\x02\xF9\xFA\x07\x0E\x02\x02\xFA\xFC\x07\x03\x02\x02" +
		"\xFB\xFD\x05 \x11\x02\xFC\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02" +
		"\x02\u0100\u0102\x07\x03\x02\x02\u0101\u0103\x05 \x11\x02\u0102\u0101" +
		"\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02" +
		"\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x07" +
		"\x03\x02\x02\u0107\u0109\x05 \x11\x02\u0108\u0107\x03\x02\x02\x02\u0109" +
		"\u010A\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02" +
		"\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x05\x18\r\x02\u010D\u011E" +
		"\x03\x02\x02\x02\u010E\u010F\x07\x0E\x02\x02\u010F\u0111\x07\x03\x02\x02" +
		"\u0110\u0112\x05 \x11\x02\u0111\u0110\x03\x02\x02\x02\u0112\u0113\x03" +
		"\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u0117\x07\x03\x02\x02\u0116\u0118\x05 \x11" +
		"\x02\u0117\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u0117" +
		"\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02" +
		"\u011B\u011C\x05\x18\r\x02\u011C\u011E\x03\x02\x02\x02\u011D\xF9\x03\x02" +
		"\x02\x02\u011D\u010E\x03\x02\x02\x02\u011E\x15\x03\x02\x02\x02\u011F\u0120" +
		"\x07\x0F\x02\x02\u0120\u0122\x07\x03\x02\x02\u0121\u0123\x05 \x11\x02" +
		"\u0122\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0122\x03" +
		"\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126" +
		"\u0128\x07\x03\x02\x02\u0127\u0129\x05 \x11\x02\u0128\u0127\x03\x02\x02" +
		"\x02\u0129\u012A\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B" +
		"\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x05\x18\r\x02" +
		"\u012D\x17\x03\x02\x02\x02\u012E\u012F\x07\b\x02\x02\u012F\u0135\x07\b" +
		"\x02\x02\u0130\u0135\x07\b\x02\x02\u0131\u0132\x07\x06\x02\x02\u0132\u0135" +
		"\x07\x07\x02\x02\u0133\u0135\x07\x06\x02\x02\u0134\u012E\x03\x02\x02\x02" +
		"\u0134\u0130\x03\x02\x02\x02\u0134\u0131\x03\x02\x02\x02\u0134\u0133\x03" +
		"\x02\x02\x02\u0135\x19\x03\x02\x02\x02\u0136\u013C\x07\x03\x02\x02\u0137" +
		"\u013B\x05 \x11\x02\u0138\u013B\x05\x1E\x10\x02\u0139\u013B\x05\x1C\x0F" +
		"\x02\u013A\u0137\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u0139" +
		"\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02" +
		"\u013C\u013D\x03\x02\x02\x02\u013D\x1B\x03\x02\x02\x02\u013E\u013C\x03" +
		"\x02\x02\x02\u013F\u0142\x05 \x11\x02\u0140\u0142\x05\x1E\x10\x02\u0141" +
		"\u013F\x03\x02\x02\x02\u0141\u0140\x03\x02\x02\x02\u0142\u0145\x03\x02" +
		"\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144" +
		"\u014E\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u014B\x07\x04" +
		"\x02\x02\u0147\u014A\x05 \x11\x02\u0148\u014A\x05\x1E\x10\x02\u0149\u0147" +
		"\x03\x02\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02" +
		"\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014F\x03" +
		"\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u0146\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02" +
		"\x02\x02\u0151\x1D\x03\x02\x02\x02\u0152\u0154\x05 \x11\x02\u0153\u0152" +
		"\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02" +
		"\u0155\u0156\x03\x02\x02\x02\u0156\u015F\x03\x02\x02\x02\u0157\u0155\x03" +
		"\x02\x02\x02\u0158\u015C\x07\x05\x02\x02\u0159\u015B\x05 \x11\x02\u015A" +
		"\u0159\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02" +
		"\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E" +
		"\u015C\x03\x02\x02\x02\u015F\u0158\x03\x02\x02\x02\u0160\u0161\x03\x02" +
		"\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
		"\x1F\x03\x02\x02\x02\u0163\u0164\t\x04\x02\x02\u0164!\x03\x02\x02\x02" +
		"5%+3;CLRX^djpv|\x82\x88\x8E\x94\x9A\xA0\xAB\xB1\xBA\xC1\xC7\xCD\xD4\xDA" +
		"\xE0\xE6\xEF\xF5\xFE\u0104\u010A\u0113\u0119\u011D\u0124\u012A\u0134\u013A" +
		"\u013C\u0141\u0143\u0149\u014B\u0150\u0155\u015C\u0161";
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
	public DataSeparator(): TerminalNode[];
	public DataSeparator(i: number): TerminalNode;
	public DataSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.DataSeparator);
		} else {
			return this.getToken(EdiX12Parser.DataSeparator, i);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	public ControlChar(): TerminalNode[];
	public ControlChar(i: number): TerminalNode;
	public ControlChar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.ControlChar);
		} else {
			return this.getToken(EdiX12Parser.ControlChar, i);
		}
	}
	public ComponentSeparator(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.ComponentSeparator, 0); }
	public RepititionSeparator(): TerminalNode | undefined { return this.tryGetToken(EdiX12Parser.RepititionSeparator, 0); }
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
	public DataSeparator(): TerminalNode[];
	public DataSeparator(i: number): TerminalNode;
	public DataSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.DataSeparator);
		} else {
			return this.getToken(EdiX12Parser.DataSeparator, i);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
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
	public DataSeparator(): TerminalNode[];
	public DataSeparator(i: number): TerminalNode;
	public DataSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.DataSeparator);
		} else {
			return this.getToken(EdiX12Parser.DataSeparator, i);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
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
	public DataSeparator(): TerminalNode[];
	public DataSeparator(i: number): TerminalNode;
	public DataSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.DataSeparator);
		} else {
			return this.getToken(EdiX12Parser.DataSeparator, i);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
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
	public DataSeparator(): TerminalNode[];
	public DataSeparator(i: number): TerminalNode;
	public DataSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.DataSeparator);
		} else {
			return this.getToken(EdiX12Parser.DataSeparator, i);
		}
	}
	public segmentEnd(): SegmentEndContext | undefined {
		return this.tryGetRuleContext(0, SegmentEndContext);
	}
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
	public DataSeparator(): TerminalNode[];
	public DataSeparator(i: number): TerminalNode;
	public DataSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiX12Parser.DataSeparator);
		} else {
			return this.getToken(EdiX12Parser.DataSeparator, i);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
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


