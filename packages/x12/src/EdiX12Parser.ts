// Generated from grammars/x12/EdiX12Parser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly RULE_repitition = 12;
	public static readonly RULE_element = 13;
	public static readonly RULE_interchangeElement = 14;
	public static readonly RULE_strictElement = 15;
	public static readonly RULE_dataCharElement = 16;
	public static readonly RULE_repititionCharElement = 17;
	public static readonly RULE_componentCharElement = 18;
	public static readonly RULE_repeatedElement = 19;
	public static readonly RULE_component = 20;
	public static readonly RULE_value = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "interchange", "group", "transaction", "segment", "interchangeHeader", 
		"interchangeTrailer", "groupHeader", "groupTrailer", "transactionHeader", 
		"transactionTrailer", "segmentEnd", "repitition", "element", "interchangeElement", 
		"strictElement", "dataCharElement", "repititionCharElement", "componentCharElement", 
		"repeatedElement", "component", "value",
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
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 44;
				this.interchange();
				}
				}
				this.state = 47;
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
			this.state = 49;
			this.interchangeHeader();
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 50;
				this.group();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.GroupHeader);
			this.state = 55;
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
			this.state = 57;
			this.groupHeader();
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 58;
				this.transaction();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.TransactionHeader);
			this.state = 63;
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
			this.state = 65;
			this.transactionHeader();
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 66;
				this.segment();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.Tag);
			this.state = 71;
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
			this.state = 73;
			this.match(EdiX12Parser.Tag);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 76;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 74;
					this.element();
					}
					break;

				case 2:
					{
					this.state = 75;
					this.repitition();
					}
					break;
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiX12Parser.DataSeparator);
			this.state = 80;
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
			this.state = 82;
			this.match(EdiX12Parser.InterchangeHeader);
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
			this.interchangeElement();
			this.state = 97;
			this.interchangeElement();
			this.state = 98;
			this.interchangeElement();
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
	public interchangeTrailer(): InterchangeTrailerContext {
		let _localctx: InterchangeTrailerContext = new InterchangeTrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, EdiX12Parser.RULE_interchangeTrailer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(EdiX12Parser.InterchangeTrailer);
			this.state = 102;
			this.strictElement();
			this.state = 103;
			this.strictElement();
			this.state = 104;
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
			this.state = 106;
			this.match(EdiX12Parser.GroupHeader);
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
			this.strictElement();
			this.state = 113;
			this.strictElement();
			this.state = 114;
			this.strictElement();
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
	public groupTrailer(): GroupTrailerContext {
		let _localctx: GroupTrailerContext = new GroupTrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, EdiX12Parser.RULE_groupTrailer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(EdiX12Parser.GroupTrailer);
			this.state = 118;
			this.strictElement();
			this.state = 119;
			this.strictElement();
			this.state = 120;
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
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 122;
				this.match(EdiX12Parser.TransactionHeader);
				this.state = 123;
				this.strictElement();
				this.state = 124;
				this.strictElement();
				this.state = 125;
				this.strictElement();
				this.state = 126;
				this.segmentEnd();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 128;
				this.match(EdiX12Parser.TransactionHeader);
				this.state = 129;
				this.strictElement();
				this.state = 130;
				this.strictElement();
				this.state = 131;
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
			this.state = 135;
			this.match(EdiX12Parser.TransactionTrailer);
			this.state = 136;
			this.strictElement();
			this.state = 137;
			this.strictElement();
			this.state = 138;
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
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 140;
				this.match(EdiX12Parser.ControlChar);
				this.state = 141;
				this.match(EdiX12Parser.ControlChar);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 142;
				this.match(EdiX12Parser.ControlChar);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
				this.match(EdiX12Parser.SegmentTerminator);
				this.state = 144;
				this.match(EdiX12Parser.EndOfLine);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 145;
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
	public repitition(): RepititionContext {
		let _localctx: RepititionContext = new RepititionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, EdiX12Parser.RULE_repitition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.element();
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 149;
				this.repeatedElement();
				}
				}
				this.state = 152;
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, EdiX12Parser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.ComponentSeparator) | (1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				this.state = 157;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 155;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 156;
					this.component();
					}
					break;
				}
				}
				this.state = 161;
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
		this.enterRule(_localctx, 28, EdiX12Parser.RULE_interchangeElement);
		try {
			this.state = 166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				this.dataCharElement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.strictElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 164;
				this.repititionCharElement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 165;
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
		this.enterRule(_localctx, 30, EdiX12Parser.RULE_strictElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 169;
				this.value();
				}
				}
				this.state = 172;
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
		this.enterRule(_localctx, 32, EdiX12Parser.RULE_dataCharElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
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
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 175;
				this.value();
				}
				}
				this.state = 178;
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
		this.enterRule(_localctx, 34, EdiX12Parser.RULE_repititionCharElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EdiX12Parser.ControlChar:
				{
				this.state = 181;
				this.match(EdiX12Parser.ControlChar);
				}
				break;
			case EdiX12Parser.RepititionSeparator:
				{
				this.state = 182;
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
				this.state = 183;
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
		this.enterRule(_localctx, 36, EdiX12Parser.RULE_componentCharElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(EdiX12Parser.DataSeparator);
			this.state = 187;
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
	public repeatedElement(): RepeatedElementContext {
		let _localctx: RepeatedElementContext = new RepeatedElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, EdiX12Parser.RULE_repeatedElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(EdiX12Parser.RepititionSeparator);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.ComponentSeparator) | (1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				this.state = 192;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 190;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 191;
					this.component();
					}
					break;
				}
				}
				this.state = 196;
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
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, EdiX12Parser.RULE_component);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiX12Parser.Char) | (1 << EdiX12Parser.InterchangeHeader) | (1 << EdiX12Parser.InterchangeTrailer) | (1 << EdiX12Parser.GroupHeader) | (1 << EdiX12Parser.GroupTrailer) | (1 << EdiX12Parser.TransactionHeader) | (1 << EdiX12Parser.TransactionTrailer) | (1 << EdiX12Parser.Tag) | (1 << EdiX12Parser.NonPrintable))) !== 0)) {
				{
				{
				this.state = 197;
				this.value();
				}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 203;
					this.match(EdiX12Parser.ComponentSeparator);
					this.state = 207;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 204;
							this.value();
							}
							}
						}
						this.state = 209;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 212;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
		this.enterRule(_localctx, 42, EdiX12Parser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11\xDB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x06\x020\n\x02\r\x02\x0E\x021\x03\x03\x03\x03\x06\x036\n\x03\r\x03" +
		"\x0E\x037\x03\x03\x03\x03\x03\x04\x03\x04\x06\x04>\n\x04\r\x04\x0E\x04" +
		"?\x03\x04\x03\x04\x03\x05\x03\x05\x06\x05F\n\x05\r\x05\x0E\x05G\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x06\x06O\n\x06\r\x06\x0E\x06P\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\x88\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\x95\n\r\x03\x0E\x03\x0E\x06\x0E\x99\n\x0E\r\x0E\x0E\x0E\x9A" +
		"\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xA0\n\x0F\f\x0F\x0E\x0F\xA3\v\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\xA9\n\x10\x03\x11\x03\x11\x06\x11" +
		"\xAD\n\x11\r\x11\x0E\x11\xAE\x03\x12\x03\x12\x06\x12\xB3\n\x12\r\x12\x0E" +
		"\x12\xB4\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xBB\n\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\xC3\n\x15\f\x15\x0E\x15\xC6" +
		"\v\x15\x03\x16\x07\x16\xC9\n\x16\f\x16\x0E\x16\xCC\v\x16\x03\x16\x03\x16" +
		"\x07\x16\xD0\n\x16\f\x16\x0E\x16\xD3\v\x16\x06\x16\xD5\n\x16\r\x16\x0E" +
		"\x16\xD6\x03\x17\x03\x17\x03\x17\x02\x02\x02\x18\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x05\x04\x02" +
		"\x03\x03\b\b\x04\x02\x05\x05\b\b\x03\x02\t\x11\x02\xDD\x02/\x03\x02\x02" +
		"\x02\x043\x03\x02\x02\x02\x06;\x03\x02\x02\x02\bC\x03\x02\x02\x02\nK\x03" +
		"\x02\x02\x02\fT\x03\x02\x02\x02\x0Eg\x03\x02\x02\x02\x10l\x03\x02\x02" +
		"\x02\x12w\x03\x02\x02\x02\x14\x87\x03\x02\x02\x02\x16\x89\x03\x02\x02" +
		"\x02\x18\x94\x03\x02\x02\x02\x1A\x96\x03\x02\x02\x02\x1C\x9C\x03\x02\x02" +
		"\x02\x1E\xA8\x03\x02\x02\x02 \xAA\x03\x02\x02\x02\"\xB0\x03\x02\x02\x02" +
		"$\xB6\x03\x02\x02\x02&\xBC\x03\x02\x02\x02(\xBF\x03\x02\x02\x02*\xCA\x03" +
		"\x02\x02\x02,\xD8\x03\x02\x02\x02.0\x05\x04\x03\x02/.\x03\x02\x02\x02" +
		"01\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x03\x03\x02\x02" +
		"\x0235\x05\f\x07\x0246\x05\x06\x04\x0254\x03\x02\x02\x0267\x03\x02\x02" +
		"\x0275\x03\x02\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x029:\x05\x0E\b" +
		"\x02:\x05\x03\x02\x02\x02;=\x05\x10\t\x02<>\x05\b\x05\x02=<\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x03\x02\x02" +
		"\x02AB\x05\x12\n\x02B\x07\x03\x02\x02\x02CE\x05\x14\v\x02DF\x05\n\x06" +
		"\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02" +
		"\x02HI\x03\x02\x02\x02IJ\x05\x16\f\x02J\t\x03\x02\x02\x02KN\x07\x10\x02" +
		"\x02LO\x05\x1C\x0F\x02MO\x05\x1A\x0E\x02NL\x03\x02\x02\x02NM\x03\x02\x02" +
		"\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x03\x02\x02" +
		"\x02RS\x05\x18\r\x02S\v\x03\x02\x02\x02TU\x07\n\x02\x02UV\x05\x1E\x10" +
		"\x02VW\x05\x1E\x10\x02WX\x05\x1E\x10\x02XY\x05\x1E\x10\x02YZ\x05\x1E\x10" +
		"\x02Z[\x05\x1E\x10\x02[\\\x05\x1E\x10\x02\\]\x05\x1E\x10\x02]^\x05\x1E" +
		"\x10\x02^_\x05\x1E\x10\x02_`\x05\x1E\x10\x02`a\x05\x1E\x10\x02ab\x05\x1E" +
		"\x10\x02bc\x05\x1E\x10\x02cd\x05\x1E\x10\x02de\x05\x1E\x10\x02ef\x05\x18" +
		"\r\x02f\r\x03\x02\x02\x02gh\x07\v\x02\x02hi\x05 \x11\x02ij\x05 \x11\x02" +
		"jk\x05\x18\r\x02k\x0F\x03\x02\x02\x02lm\x07\f\x02\x02mn\x05 \x11\x02n" +
		"o\x05 \x11\x02op\x05 \x11\x02pq\x05 \x11\x02qr\x05 \x11\x02rs\x05 \x11" +
		"\x02st\x05 \x11\x02tu\x05 \x11\x02uv\x05\x18\r\x02v\x11\x03\x02\x02\x02" +
		"wx\x07\r\x02\x02xy\x05 \x11\x02yz\x05 \x11\x02z{\x05\x18\r\x02{\x13\x03" +
		"\x02\x02\x02|}\x07\x0E\x02\x02}~\x05 \x11\x02~\x7F\x05 \x11\x02\x7F\x80" +
		"\x05 \x11\x02\x80\x81\x05\x18\r\x02\x81\x88\x03\x02\x02\x02\x82\x83\x07" +
		"\x0E\x02\x02\x83\x84\x05 \x11\x02\x84\x85\x05 \x11\x02\x85\x86\x05\x18" +
		"\r\x02\x86\x88\x03\x02\x02\x02\x87|\x03\x02\x02\x02\x87\x82\x03\x02\x02" +
		"\x02\x88\x15\x03\x02\x02\x02\x89\x8A\x07\x0F\x02\x02\x8A\x8B\x05 \x11" +
		"\x02\x8B\x8C\x05 \x11\x02\x8C\x8D\x05\x18\r\x02\x8D\x17\x03\x02\x02\x02" +
		"\x8E\x8F\x07\b\x02\x02\x8F\x95\x07\b\x02\x02\x90\x95\x07\b\x02\x02\x91" +
		"\x92\x07\x06\x02\x02\x92\x95\x07\x07\x02\x02\x93\x95\x07\x06\x02\x02\x94" +
		"\x8E\x03\x02\x02\x02\x94\x90\x03\x02\x02\x02\x94\x91\x03\x02\x02\x02\x94" +
		"\x93\x03\x02\x02\x02\x95\x19\x03\x02\x02\x02\x96\x98\x05\x1C\x0F\x02\x97" +
		"\x99\x05(\x15\x02\x98\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A" +
		"\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x1B\x03\x02\x02\x02\x9C" +
		"\xA1\x07\x03\x02\x02\x9D\xA0\x05,\x17\x02\x9E\xA0\x05*\x16\x02\x9F\x9D" +
		"\x03\x02\x02\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F" +
		"\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\x1D\x03\x02\x02\x02\xA3\xA1" +
		"\x03\x02\x02\x02\xA4\xA9\x05\"\x12\x02\xA5\xA9\x05 \x11\x02\xA6\xA9\x05" +
		"$\x13\x02\xA7\xA9\x05&\x14\x02\xA8\xA4\x03\x02\x02\x02\xA8\xA5\x03\x02" +
		"\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9\x1F\x03\x02" +
		"\x02\x02\xAA\xAC\x07\x03\x02\x02\xAB\xAD\x05,\x17\x02\xAC\xAB\x03\x02" +
		"\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02" +
		"\x02\x02\xAF!\x03\x02\x02\x02\xB0\xB2\t\x02\x02\x02\xB1\xB3\x05,\x17\x02" +
		"\xB2\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5#\x03\x02\x02\x02\xB6\xBA\x07\x03\x02\x02" +
		"\xB7\xBB\x07\b\x02\x02\xB8\xBB\x07\x04\x02\x02\xB9\xBB\x05,\x17\x02\xBA" +
		"\xB7\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xB9\x03\x02\x02\x02\xBB" +
		"%\x03\x02\x02\x02\xBC\xBD\x07\x03\x02\x02\xBD\xBE\t\x03\x02\x02\xBE\'" +
		"\x03\x02\x02\x02\xBF\xC4\x07\x04\x02\x02\xC0\xC3\x05,\x17\x02\xC1\xC3" +
		"\x05*\x16\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6" +
		"\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5)" +
		"\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC9\x05,\x17\x02\xC8\xC7" +
		"\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB" +
		"\x03\x02\x02\x02\xCB\xD4\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xD1" +
		"\x07\x05\x02\x02\xCE\xD0\x05,\x17\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3" +
		"\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5" +
		"\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xCD\x03\x02\x02\x02\xD5\xD6" +
		"\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7+" +
		"\x03\x02\x02\x02\xD8\xD9\t\x04\x02\x02\xD9-\x03\x02\x02\x02\x1617?GNP" +
		"\x87\x94\x9A\x9F\xA1\xA8\xAE\xB4\xBA\xC2\xC4\xCA\xD1\xD6";
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


export class RepititionContext extends ParserRuleContext {
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public repeatedElement(): RepeatedElementContext[];
	public repeatedElement(i: number): RepeatedElementContext;
	public repeatedElement(i?: number): RepeatedElementContext | RepeatedElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RepeatedElementContext);
		} else {
			return this.getRuleContext(i, RepeatedElementContext);
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


export class RepeatedElementContext extends ParserRuleContext {
	public RepititionSeparator(): TerminalNode { return this.getToken(EdiX12Parser.RepititionSeparator, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiX12Parser.RULE_repeatedElement; }
	// @Override
	public enterRule(listener: EdiX12ParserListener): void {
		if (listener.enterRepeatedElement) {
			listener.enterRepeatedElement(this);
		}
	}
	// @Override
	public exitRule(listener: EdiX12ParserListener): void {
		if (listener.exitRepeatedElement) {
			listener.exitRepeatedElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiX12ParserVisitor<Result>): Result {
		if (visitor.visitRepeatedElement) {
			return visitor.visitRepeatedElement(this);
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


