// Generated from grammars/fact/EdiFactParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { EdiFactParserListener } from "./EdiFactParserListener";
import { EdiFactParserVisitor } from "./EdiFactParserVisitor";


export class EdiFactParser extends Parser {
	public static readonly DataSeparator = 1;
	public static readonly RepititionSeparator = 2;
	public static readonly ComponentSeparator = 3;
	public static readonly SegmentTerminator = 4;
	public static readonly DecimalMark = 5;
	public static readonly ReleaseIndicator = 6;
	public static readonly EndOfLine = 7;
	public static readonly ControlChar = 8;
	public static readonly Char = 9;
	public static readonly SvcStringAdvice = 10;
	public static readonly InterchangeHeader = 11;
	public static readonly InterchangeTrailer = 12;
	public static readonly GroupHeader = 13;
	public static readonly GroupTrailer = 14;
	public static readonly MessageHeader = 15;
	public static readonly MessageTrailer = 16;
	public static readonly TextSegment = 17;
	public static readonly SectionControl = 18;
	public static readonly Tag = 19;
	public static readonly NonPrintable = 20;
	public static readonly RULE_document = 0;
	public static readonly RULE_interchange = 1;
	public static readonly RULE_group = 2;
	public static readonly RULE_message = 3;
	public static readonly RULE_segment = 4;
	public static readonly RULE_serviceStringAdvice = 5;
	public static readonly RULE_interchangeHeader = 6;
	public static readonly RULE_interchangeTrailer = 7;
	public static readonly RULE_groupHeader = 8;
	public static readonly RULE_groupTrailer = 9;
	public static readonly RULE_messageHeader = 10;
	public static readonly RULE_messageTrailer = 11;
	public static readonly RULE_segmentEnd = 12;
	public static readonly RULE_element = 13;
	public static readonly RULE_repitition = 14;
	public static readonly RULE_component = 15;
	public static readonly RULE_value = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "interchange", "group", "message", "segment", "serviceStringAdvice", 
		"interchangeHeader", "interchangeTrailer", "groupHeader", "groupTrailer", 
		"messageHeader", "messageTrailer", "segmentEnd", "element", "repitition", 
		"component", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'UNA'", "'UNB'", "'UNZ'", "'UNG'", "'UNE'", 
		"'UNH'", "'UNT'", "'TXT'", "'UNS'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DataSeparator", "RepititionSeparator", "ComponentSeparator", 
		"SegmentTerminator", "DecimalMark", "ReleaseIndicator", "EndOfLine", "ControlChar", 
		"Char", "SvcStringAdvice", "InterchangeHeader", "InterchangeTrailer", 
		"GroupHeader", "GroupTrailer", "MessageHeader", "MessageTrailer", "TextSegment", 
		"SectionControl", "Tag", "NonPrintable",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(EdiFactParser._LITERAL_NAMES, EdiFactParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return EdiFactParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "EdiFactParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return EdiFactParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return EdiFactParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(EdiFactParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, EdiFactParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 34;
				this.interchange();
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiFactParser.SvcStringAdvice);
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
		this.enterRule(_localctx, 2, EdiFactParser.RULE_interchange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.serviceStringAdvice();
			this.state = 40;
			this.interchangeHeader();
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EdiFactParser.GroupHeader:
				{
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 41;
					this.group();
					}
					}
					this.state = 44;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === EdiFactParser.GroupHeader);
				}
				break;
			case EdiFactParser.MessageHeader:
				{
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 46;
					this.message();
					}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === EdiFactParser.MessageHeader);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
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
		this.enterRule(_localctx, 4, EdiFactParser.RULE_group);
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
				this.message();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiFactParser.MessageHeader);
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
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, EdiFactParser.RULE_message);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.messageHeader();
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
			} while (_la === EdiFactParser.Tag);
			this.state = 69;
			this.messageTrailer();
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
		this.enterRule(_localctx, 8, EdiFactParser.RULE_segment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(EdiFactParser.Tag);
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
			} while (_la === EdiFactParser.DataSeparator);
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
	public serviceStringAdvice(): ServiceStringAdviceContext {
		let _localctx: ServiceStringAdviceContext = new ServiceStringAdviceContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, EdiFactParser.RULE_serviceStringAdvice);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(EdiFactParser.SvcStringAdvice);
			this.state = 80;
			this.match(EdiFactParser.ControlChar);
			this.state = 81;
			this.match(EdiFactParser.ControlChar);
			this.state = 82;
			this.match(EdiFactParser.ControlChar);
			this.state = 83;
			this.match(EdiFactParser.ControlChar);
			this.state = 84;
			this.match(EdiFactParser.ControlChar);
			this.state = 85;
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
		this.enterRule(_localctx, 12, EdiFactParser.RULE_interchangeHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(EdiFactParser.InterchangeHeader);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 88;
				this.element();
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiFactParser.DataSeparator);
			this.state = 93;
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
		this.enterRule(_localctx, 14, EdiFactParser.RULE_interchangeTrailer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(EdiFactParser.InterchangeTrailer);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 96;
				this.element();
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiFactParser.DataSeparator);
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
		this.enterRule(_localctx, 16, EdiFactParser.RULE_groupHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(EdiFactParser.GroupHeader);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 104;
				this.element();
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiFactParser.DataSeparator);
			this.state = 109;
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
		this.enterRule(_localctx, 18, EdiFactParser.RULE_groupTrailer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(EdiFactParser.GroupTrailer);
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 112;
				this.element();
				}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiFactParser.DataSeparator);
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
	public messageHeader(): MessageHeaderContext {
		let _localctx: MessageHeaderContext = new MessageHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, EdiFactParser.RULE_messageHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(EdiFactParser.MessageHeader);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 120;
				this.element();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiFactParser.DataSeparator);
			this.state = 125;
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
	public messageTrailer(): MessageTrailerContext {
		let _localctx: MessageTrailerContext = new MessageTrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, EdiFactParser.RULE_messageTrailer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(EdiFactParser.MessageTrailer);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 128;
				this.element();
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EdiFactParser.DataSeparator);
			this.state = 133;
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
		this.enterRule(_localctx, 24, EdiFactParser.RULE_segmentEnd);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.match(EdiFactParser.ControlChar);
				this.state = 136;
				this.match(EdiFactParser.ControlChar);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.match(EdiFactParser.ControlChar);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 138;
				this.match(EdiFactParser.SegmentTerminator);
				this.state = 139;
				this.match(EdiFactParser.EndOfLine);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 140;
				this.match(EdiFactParser.SegmentTerminator);
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
		this.enterRule(_localctx, 26, EdiFactParser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(EdiFactParser.DataSeparator);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiFactParser.RepititionSeparator) | (1 << EdiFactParser.ComponentSeparator) | (1 << EdiFactParser.Char) | (1 << EdiFactParser.SvcStringAdvice) | (1 << EdiFactParser.InterchangeHeader) | (1 << EdiFactParser.InterchangeTrailer) | (1 << EdiFactParser.GroupHeader) | (1 << EdiFactParser.GroupTrailer) | (1 << EdiFactParser.MessageHeader) | (1 << EdiFactParser.MessageTrailer) | (1 << EdiFactParser.Tag) | (1 << EdiFactParser.NonPrintable))) !== 0)) {
				{
				this.state = 147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 144;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 145;
					this.component();
					}
					break;

				case 3:
					{
					this.state = 146;
					this.repitition();
					}
					break;
				}
				}
				this.state = 151;
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
		this.enterRule(_localctx, 28, EdiFactParser.RULE_repitition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiFactParser.ComponentSeparator) | (1 << EdiFactParser.Char) | (1 << EdiFactParser.SvcStringAdvice) | (1 << EdiFactParser.InterchangeHeader) | (1 << EdiFactParser.InterchangeTrailer) | (1 << EdiFactParser.GroupHeader) | (1 << EdiFactParser.GroupTrailer) | (1 << EdiFactParser.MessageHeader) | (1 << EdiFactParser.MessageTrailer) | (1 << EdiFactParser.Tag) | (1 << EdiFactParser.NonPrintable))) !== 0)) {
				{
				this.state = 154;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 152;
					this.value();
					}
					break;

				case 2:
					{
					this.state = 153;
					this.component();
					}
					break;
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 167;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 159;
					this.match(EdiFactParser.RepititionSeparator);
					this.state = 164;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							this.state = 162;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
							case 1:
								{
								this.state = 160;
								this.value();
								}
								break;

							case 2:
								{
								this.state = 161;
								this.component();
								}
								break;
							}
							}
						}
						this.state = 166;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 169;
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
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, EdiFactParser.RULE_component);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiFactParser.Char) | (1 << EdiFactParser.SvcStringAdvice) | (1 << EdiFactParser.InterchangeHeader) | (1 << EdiFactParser.InterchangeTrailer) | (1 << EdiFactParser.GroupHeader) | (1 << EdiFactParser.GroupTrailer) | (1 << EdiFactParser.MessageHeader) | (1 << EdiFactParser.MessageTrailer) | (1 << EdiFactParser.Tag) | (1 << EdiFactParser.NonPrintable))) !== 0)) {
				{
				{
				this.state = 171;
				this.value();
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 184;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 177;
					this.match(EdiFactParser.ComponentSeparator);
					this.state = 181;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 178;
							this.value();
							}
							}
						}
						this.state = 183;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 186;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
		this.enterRule(_localctx, 32, EdiFactParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EdiFactParser.Char) | (1 << EdiFactParser.SvcStringAdvice) | (1 << EdiFactParser.InterchangeHeader) | (1 << EdiFactParser.InterchangeTrailer) | (1 << EdiFactParser.GroupHeader) | (1 << EdiFactParser.GroupTrailer) | (1 << EdiFactParser.MessageHeader) | (1 << EdiFactParser.MessageTrailer) | (1 << EdiFactParser.Tag) | (1 << EdiFactParser.NonPrintable))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16\xC1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x06\x02&\n\x02\r\x02\x0E\x02\'\x03\x03\x03\x03\x03\x03\x06\x03-\n" +
		"\x03\r\x03\x0E\x03.\x03\x03\x06\x032\n\x03\r\x03\x0E\x033\x05\x036\n\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x06\x04<\n\x04\r\x04\x0E\x04=\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x06\x05D\n\x05\r\x05\x0E\x05E\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x06\x06L\n\x06\r\x06\x0E\x06M\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x06" +
		"\b\\\n\b\r\b\x0E\b]\x03\b\x03\b\x03\t\x03\t\x06\td\n\t\r\t\x0E\te\x03" +
		"\t\x03\t\x03\n\x03\n\x06\nl\n\n\r\n\x0E\nm\x03\n\x03\n\x03\v\x03\v\x06" +
		"\vt\n\v\r\v\x0E\vu\x03\v\x03\v\x03\f\x03\f\x06\f|\n\f\r\f\x0E\f}\x03\f" +
		"\x03\f\x03\r\x03\r\x06\r\x84\n\r\r\r\x0E\r\x85\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x90\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\x96\n\x0F\f\x0F\x0E\x0F\x99\v\x0F\x03\x10\x03" +
		"\x10\x07\x10\x9D\n\x10\f\x10\x0E\x10\xA0\v\x10\x03\x10\x03\x10\x03\x10" +
		"\x07\x10\xA5\n\x10\f\x10\x0E\x10\xA8\v\x10\x06\x10\xAA\n\x10\r\x10\x0E" +
		"\x10\xAB\x03\x11\x07\x11\xAF\n\x11\f\x11\x0E\x11\xB2\v\x11\x03\x11\x03" +
		"\x11\x07\x11\xB6\n\x11\f\x11\x0E\x11\xB9\v\x11\x06\x11\xBB\n\x11\r\x11" +
		"\x0E\x11\xBC\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x03\x04\x02\v\x12\x15\x16\x02" +
		"\xCA\x02%\x03\x02\x02\x02\x04)\x03\x02\x02\x02\x069\x03\x02\x02\x02\b" +
		"A\x03\x02\x02\x02\nI\x03\x02\x02\x02\fQ\x03\x02\x02\x02\x0EY\x03\x02\x02" +
		"\x02\x10a\x03\x02\x02\x02\x12i\x03\x02\x02\x02\x14q\x03\x02\x02\x02\x16" +
		"y\x03\x02\x02\x02\x18\x81\x03\x02\x02\x02\x1A\x8F\x03\x02\x02\x02\x1C" +
		"\x91\x03\x02\x02\x02\x1E\x9E\x03\x02\x02\x02 \xB0\x03\x02\x02\x02\"\xBE" +
		"\x03\x02\x02\x02$&\x05\x04\x03\x02%$\x03\x02\x02\x02&\'\x03\x02\x02\x02" +
		"\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(\x03\x03\x02\x02\x02)*\x05\f\x07" +
		"\x02*5\x05\x0E\b\x02+-\x05\x06\x04\x02,+\x03\x02\x02\x02-.\x03\x02\x02" +
		"\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/6\x03\x02\x02\x0202\x05\b\x05" +
		"\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02" +
		"\x0246\x03\x02\x02\x025,\x03\x02\x02\x0251\x03\x02\x02\x0267\x03\x02\x02" +
		"\x0278\x05\x10\t\x028\x05\x03\x02\x02\x029;\x05\x12\n\x02:<\x05\b\x05" +
		"\x02;:\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?@\x05\x14\v\x02@\x07\x03\x02\x02\x02AC\x05\x16" +
		"\f\x02BD\x05\n\x06\x02CB\x03\x02\x02\x02DE\x03\x02\x02\x02EC\x03\x02\x02" +
		"\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x05\x18\r\x02H\t\x03\x02\x02" +
		"\x02IK\x07\x15\x02\x02JL\x05\x1C\x0F\x02KJ\x03\x02\x02\x02LM\x03\x02\x02" +
		"\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x05\x1A\x0E" +
		"\x02P\v\x03\x02\x02\x02QR\x07\f\x02\x02RS\x07\n\x02\x02ST\x07\n\x02\x02" +
		"TU\x07\n\x02\x02UV\x07\n\x02\x02VW\x07\n\x02\x02WX\x05\x1A\x0E\x02X\r" +
		"\x03\x02\x02\x02Y[\x07\r\x02\x02Z\\\x05\x1C\x0F\x02[Z\x03\x02\x02\x02" +
		"\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x03\x02\x02" +
		"\x02_`\x05\x1A\x0E\x02`\x0F\x03\x02\x02\x02ac\x07\x0E\x02\x02bd\x05\x1C" +
		"\x0F\x02cb\x03\x02\x02\x02de\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02" +
		"\x02\x02fg\x03\x02\x02\x02gh\x05\x1A\x0E\x02h\x11\x03\x02\x02\x02ik\x07" +
		"\x0F\x02\x02jl\x05\x1C\x0F\x02kj\x03\x02\x02\x02lm\x03\x02\x02\x02mk\x03" +
		"\x02\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02\x02op\x05\x1A\x0E\x02p\x13" +
		"\x03\x02\x02\x02qs\x07\x10\x02\x02rt\x05\x1C\x0F\x02sr\x03\x02\x02\x02" +
		"tu\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wx\x05\x1A\x0E\x02x\x15\x03\x02\x02\x02y{\x07\x11\x02\x02z|\x05\x1C\x0F" +
		"\x02{z\x03\x02\x02\x02|}\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\x80\x05\x1A\x0E\x02\x80\x17\x03\x02\x02" +
		"\x02\x81\x83\x07\x12\x02\x02\x82\x84\x05\x1C\x0F\x02\x83\x82\x03\x02\x02" +
		"\x02\x84\x85\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02" +
		"\x02\x86\x87\x03\x02\x02\x02\x87\x88\x05\x1A\x0E\x02\x88\x19\x03\x02\x02" +
		"\x02\x89\x8A\x07\n\x02\x02\x8A\x90\x07\n\x02\x02\x8B\x90\x07\n\x02\x02" +
		"\x8C\x8D\x07\x06\x02\x02\x8D\x90\x07\t\x02\x02\x8E\x90\x07\x06\x02\x02" +
		"\x8F\x89\x03\x02\x02\x02\x8F\x8B\x03\x02\x02\x02\x8F\x8C\x03\x02\x02\x02" +
		"\x8F\x8E\x03\x02\x02\x02\x90\x1B\x03\x02\x02\x02\x91\x97\x07\x03\x02\x02" +
		"\x92\x96\x05\"\x12\x02\x93\x96\x05 \x11\x02\x94\x96\x05\x1E\x10\x02\x95" +
		"\x92\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96" +
		"\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98" +
		"\x1D\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9D\x05\"\x12\x02\x9B" +
		"\x9D\x05 \x11\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D" +
		"\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F" +
		"\xA9\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA6\x07\x04\x02\x02\xA2" +
		"\xA5\x05\"\x12\x02\xA3\xA5\x05 \x11\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA3" +
		"\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7" +
		"\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xA1" +
		"\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC" +
		"\x03\x02\x02\x02\xAC\x1F\x03\x02\x02\x02\xAD\xAF\x05\"\x12\x02\xAE\xAD" +
		"\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1" +
		"\x03\x02\x02\x02\xB1\xBA\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB7" +
		"\x07\x05\x02\x02\xB4\xB6\x05\"\x12\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB9" +
		"\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBB" +
		"\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xB3\x03\x02\x02\x02\xBB\xBC" +
		"\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD!" +
		"\x03\x02\x02\x02\xBE\xBF\t\x02\x02\x02\xBF#\x03\x02\x02\x02\x1A\'.35=" +
		"EM]emu}\x85\x8F\x95\x97\x9C\x9E\xA4\xA6\xAB\xB0\xB7\xBC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!EdiFactParser.__ATN) {
			EdiFactParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(EdiFactParser._serializedATN));
		}

		return EdiFactParser.__ATN;
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
	public get ruleIndex(): number { return EdiFactParser.RULE_document; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterchangeContext extends ParserRuleContext {
	public serviceStringAdvice(): ServiceStringAdviceContext {
		return this.getRuleContext(0, ServiceStringAdviceContext);
	}
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
	public message(): MessageContext[];
	public message(i: number): MessageContext;
	public message(i?: number): MessageContext | MessageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageContext);
		} else {
			return this.getRuleContext(i, MessageContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiFactParser.RULE_interchange; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterInterchange) {
			listener.enterInterchange(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitInterchange) {
			listener.exitInterchange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
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
	public message(): MessageContext[];
	public message(i: number): MessageContext;
	public message(i?: number): MessageContext | MessageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageContext);
		} else {
			return this.getRuleContext(i, MessageContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiFactParser.RULE_group; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	public messageHeader(): MessageHeaderContext {
		return this.getRuleContext(0, MessageHeaderContext);
	}
	public messageTrailer(): MessageTrailerContext {
		return this.getRuleContext(0, MessageTrailerContext);
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
	public get ruleIndex(): number { return EdiFactParser.RULE_message; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterMessage) {
			listener.enterMessage(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitMessage) {
			listener.exitMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitMessage) {
			return visitor.visitMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public Tag(): TerminalNode { return this.getToken(EdiFactParser.Tag, 0); }
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
	public get ruleIndex(): number { return EdiFactParser.RULE_segment; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitSegment) {
			return visitor.visitSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceStringAdviceContext extends ParserRuleContext {
	public SvcStringAdvice(): TerminalNode { return this.getToken(EdiFactParser.SvcStringAdvice, 0); }
	public ControlChar(): TerminalNode[];
	public ControlChar(i: number): TerminalNode;
	public ControlChar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EdiFactParser.ControlChar);
		} else {
			return this.getToken(EdiFactParser.ControlChar, i);
		}
	}
	public segmentEnd(): SegmentEndContext {
		return this.getRuleContext(0, SegmentEndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiFactParser.RULE_serviceStringAdvice; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterServiceStringAdvice) {
			listener.enterServiceStringAdvice(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitServiceStringAdvice) {
			listener.exitServiceStringAdvice(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitServiceStringAdvice) {
			return visitor.visitServiceStringAdvice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterchangeHeaderContext extends ParserRuleContext {
	public InterchangeHeader(): TerminalNode { return this.getToken(EdiFactParser.InterchangeHeader, 0); }
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
	public get ruleIndex(): number { return EdiFactParser.RULE_interchangeHeader; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterInterchangeHeader) {
			listener.enterInterchangeHeader(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitInterchangeHeader) {
			listener.exitInterchangeHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitInterchangeHeader) {
			return visitor.visitInterchangeHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterchangeTrailerContext extends ParserRuleContext {
	public InterchangeTrailer(): TerminalNode { return this.getToken(EdiFactParser.InterchangeTrailer, 0); }
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
	public get ruleIndex(): number { return EdiFactParser.RULE_interchangeTrailer; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterInterchangeTrailer) {
			listener.enterInterchangeTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitInterchangeTrailer) {
			listener.exitInterchangeTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitInterchangeTrailer) {
			return visitor.visitInterchangeTrailer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupHeaderContext extends ParserRuleContext {
	public GroupHeader(): TerminalNode { return this.getToken(EdiFactParser.GroupHeader, 0); }
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
	public get ruleIndex(): number { return EdiFactParser.RULE_groupHeader; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterGroupHeader) {
			listener.enterGroupHeader(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitGroupHeader) {
			listener.exitGroupHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitGroupHeader) {
			return visitor.visitGroupHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupTrailerContext extends ParserRuleContext {
	public GroupTrailer(): TerminalNode { return this.getToken(EdiFactParser.GroupTrailer, 0); }
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
	public get ruleIndex(): number { return EdiFactParser.RULE_groupTrailer; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterGroupTrailer) {
			listener.enterGroupTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitGroupTrailer) {
			listener.exitGroupTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitGroupTrailer) {
			return visitor.visitGroupTrailer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageHeaderContext extends ParserRuleContext {
	public MessageHeader(): TerminalNode { return this.getToken(EdiFactParser.MessageHeader, 0); }
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
	public get ruleIndex(): number { return EdiFactParser.RULE_messageHeader; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterMessageHeader) {
			listener.enterMessageHeader(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitMessageHeader) {
			listener.exitMessageHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitMessageHeader) {
			return visitor.visitMessageHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageTrailerContext extends ParserRuleContext {
	public MessageTrailer(): TerminalNode { return this.getToken(EdiFactParser.MessageTrailer, 0); }
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
	public get ruleIndex(): number { return EdiFactParser.RULE_messageTrailer; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterMessageTrailer) {
			listener.enterMessageTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitMessageTrailer) {
			listener.exitMessageTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitMessageTrailer) {
			return visitor.visitMessageTrailer(this);
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
			return this.getTokens(EdiFactParser.ControlChar);
		} else {
			return this.getToken(EdiFactParser.ControlChar, i);
		}
	}
	public SegmentTerminator(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.SegmentTerminator, 0); }
	public EndOfLine(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.EndOfLine, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiFactParser.RULE_segmentEnd; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterSegmentEnd) {
			listener.enterSegmentEnd(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitSegmentEnd) {
			listener.exitSegmentEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitSegmentEnd) {
			return visitor.visitSegmentEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public DataSeparator(): TerminalNode { return this.getToken(EdiFactParser.DataSeparator, 0); }
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
	public get ruleIndex(): number { return EdiFactParser.RULE_element; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
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
			return this.getTokens(EdiFactParser.RepititionSeparator);
		} else {
			return this.getToken(EdiFactParser.RepititionSeparator, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiFactParser.RULE_repitition; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterRepitition) {
			listener.enterRepitition(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitRepitition) {
			listener.exitRepitition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
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
			return this.getTokens(EdiFactParser.ComponentSeparator);
		} else {
			return this.getToken(EdiFactParser.ComponentSeparator, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiFactParser.RULE_component; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterComponent) {
			listener.enterComponent(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitComponent) {
			listener.exitComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public Tag(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.Tag, 0); }
	public Char(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.Char, 0); }
	public NonPrintable(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.NonPrintable, 0); }
	public SvcStringAdvice(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.SvcStringAdvice, 0); }
	public InterchangeHeader(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.InterchangeHeader, 0); }
	public InterchangeTrailer(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.InterchangeTrailer, 0); }
	public GroupHeader(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.GroupHeader, 0); }
	public GroupTrailer(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.GroupTrailer, 0); }
	public MessageHeader(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.MessageHeader, 0); }
	public MessageTrailer(): TerminalNode | undefined { return this.tryGetToken(EdiFactParser.MessageTrailer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EdiFactParser.RULE_value; }
	// @Override
	public enterRule(listener: EdiFactParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: EdiFactParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EdiFactParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


