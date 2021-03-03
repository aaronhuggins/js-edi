// Generated from grammar/EdiFactLexer.g4 by ANTLR 4.9.0-SNAPSHOT


// This statement may be removed once option `superClass` is correctly generated by antlr4ts.
import { FactBaseLexer } from "./FactBaseLexer";


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class EdiFactLexer extends FactBaseLexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"SOH", "STX", "ETX", "EOT", "ENQ", "ACK", "BEL", "HT", "LF", "VT", "FF", 
		"CR", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "FS", "GS", "RS", 
		"US", "AsciiControl", "Number", "Letter", "Special", "ControlChar", "Char", 
		"SvcStringAdvice", "InterchangeHeader", "InterchangeTrailer", "GroupHeader", 
		"GroupTrailer", "MessageHeader", "MessageTrailer", "TextSegment", "SectionControl", 
		"Tag", "NonPrintable",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(EdiFactLexer._LITERAL_NAMES, EdiFactLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return EdiFactLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(EdiFactLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "EdiFactLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return EdiFactLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return EdiFactLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return EdiFactLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return EdiFactLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 27:
			this.ControlChar_action(_localctx, actionIndex);
			break;

		case 28:
			this.Char_action(_localctx, actionIndex);
			break;

		case 29:
			this.SvcStringAdvice_action(_localctx, actionIndex);
			break;

		case 39:
			this.NonPrintable_action(_localctx, actionIndex);
			break;
		}
	}
	private ControlChar_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			 this.handleControlChars(EdiFactLexer) 
			break;

		case 1:
			 this.handleControlChars(EdiFactLexer) 
			break;

		case 2:
			 this.handleControlChars(EdiFactLexer) 
			break;

		case 3:
			 this.handleControlChars(EdiFactLexer) 
			break;

		case 4:
			 this.handleControlChars(EdiFactLexer) 
			break;
		}
	}
	private Char_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			 this.handleControlChars(EdiFactLexer) 
			break;
		}
	}
	private SvcStringAdvice_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			 this.handleUNA() 
			break;
		}
	}
	private NonPrintable_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 7:
			 this.handleControlChars(EdiFactLexer) 
			break;

		case 8:
			 this.handleControlChars(EdiFactLexer) 
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 27:
			return this.ControlChar_sempred(_localctx, predIndex);

		case 28:
			return this.Char_sempred(_localctx, predIndex);

		case 39:
			return this.NonPrintable_sempred(_localctx, predIndex);
		}
		return true;
	}
	private ControlChar_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  this.isCtlCharPos ;

		case 1:
			return  this.isCtlCharPos ;

		case 2:
			return  this.isCtlCharPos ;

		case 3:
			return  this.isCtlCharPos ;

		case 4:
			return  this.isCtlCharPos ;
		}
		return true;
	}
	private Char_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return  !this.isCtlCharPos ;
		}
		return true;
	}
	private NonPrintable_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return  !this.isCtlCharPos ;

		case 7:
			return  !this.isCtlCharPos ;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x16\xFC\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x05\x19\x99\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\xB6\n\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\xBE\n\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03" +
		"%\x03%\x03%\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x05(\xE9\n(\x03(\x03(\x07(\xED\n(\f(\x0E(\xF0\v(\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x05)\xFB\n)\x02\x02\x02*\x03\x02\x02\x05\x02" +
		"\x02\x07\x02\x02\t\x02\x02\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02" +
		"\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02\x02\x1B\x02\x02\x1D\x02\x02" +
		"\x1F\x02\x02!\x02\x02#\x02\x02%\x02\x02\'\x02\x02)\x02\x02+\x02\x02-\x02" +
		"\x02/\x02\x021\x02\x023\x02\x025\x02\x027\x02\x029\x02\n;\x02\v=\x02\f" +
		"?\x02\rA\x02\x0EC\x02\x0FE\x02\x10G\x02\x11I\x02\x12K\x02\x13M\x02\x14" +
		"O\x02\x15Q\x02\x16\x03\x02\x04\x04\x02C\\c|\x06\x02\"1<B]b}\x80\x02\u0100" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
		"M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x03S\x03\x02" +
		"\x02\x02\x05U\x03\x02\x02\x02\x07W\x03\x02\x02\x02\tY\x03\x02\x02\x02" +
		"\v[\x03\x02\x02\x02\r]\x03\x02\x02\x02\x0F_\x03\x02\x02\x02\x11a\x03\x02" +
		"\x02\x02\x13c\x03\x02\x02\x02\x15e\x03\x02\x02\x02\x17g\x03\x02\x02\x02" +
		"\x19i\x03\x02\x02\x02\x1Bk\x03\x02\x02\x02\x1Dm\x03\x02\x02\x02\x1Fo\x03" +
		"\x02\x02\x02!q\x03\x02\x02\x02#s\x03\x02\x02\x02%u\x03\x02\x02\x02\'w" +
		"\x03\x02\x02\x02)y\x03\x02\x02\x02+{\x03\x02\x02\x02-}\x03\x02\x02\x02" +
		"/\x7F\x03\x02\x02\x021\x98\x03\x02\x02\x023\x9A\x03\x02\x02\x025\x9C\x03" +
		"\x02\x02\x027\x9E\x03\x02\x02\x029\xB5\x03\x02\x02\x02;\xBD\x03\x02\x02" +
		"\x02=\xBF\x03\x02\x02\x02?\xC5\x03\x02\x02\x02A\xC9\x03\x02\x02\x02C\xCD" +
		"\x03\x02\x02\x02E\xD1\x03\x02\x02\x02G\xD5\x03\x02\x02\x02I\xD9\x03\x02" +
		"\x02\x02K\xDD\x03\x02\x02\x02M\xE1\x03\x02\x02\x02O\xE5\x03\x02\x02\x02" +
		"Q\xFA\x03\x02\x02\x02ST\x07\x03\x02\x02T\x04\x03\x02\x02\x02UV\x07\x04" +
		"\x02\x02V\x06\x03\x02\x02\x02WX\x07\x05\x02\x02X\b\x03\x02\x02\x02YZ\x07" +
		"\x06\x02\x02Z\n\x03\x02\x02\x02[\\\x07\x07\x02\x02\\\f\x03\x02\x02\x02" +
		"]^\x07\b\x02\x02^\x0E\x03\x02\x02\x02_`\x07\t\x02\x02`\x10\x03\x02\x02" +
		"\x02ab\x07\v\x02\x02b\x12\x03\x02\x02\x02cd\x07\f\x02\x02d\x14\x03\x02" +
		"\x02\x02ef\x07\r\x02\x02f\x16\x03\x02\x02\x02gh\x07\x0E\x02\x02h\x18\x03" +
		"\x02\x02\x02ij\x07\x0F\x02\x02j\x1A\x03\x02\x02\x02kl\x07\x13\x02\x02" +
		"l\x1C\x03\x02\x02\x02mn\x07\x14\x02\x02n\x1E\x03\x02\x02\x02op\x07\x15" +
		"\x02\x02p \x03\x02\x02\x02qr\x07\x16\x02\x02r\"\x03\x02\x02\x02st\x07" +
		"\x17\x02\x02t$\x03\x02\x02\x02uv\x07\x18\x02\x02v&\x03\x02\x02\x02wx\x07" +
		"\x19\x02\x02x(\x03\x02\x02\x02yz\x07\x1E\x02\x02z*\x03\x02\x02\x02{|\x07" +
		"\x1F\x02\x02|,\x03\x02\x02\x02}~\x07 \x02\x02~.\x03\x02\x02\x02\x7F\x80" +
		"\x07!\x02\x02\x800\x03\x02\x02\x02\x81\x99\x05\x03\x02\x02\x82\x99\x05" +
		"\x05\x03\x02\x83\x99\x05\x07\x04\x02\x84\x99\x05\t\x05\x02\x85\x99\x05" +
		"\v\x06\x02\x86\x99\x05\r\x07\x02\x87\x99\x05\x0F\b\x02\x88\x99\x05\x11" +
		"\t\x02\x89\x99\x05\x13\n\x02\x8A\x99\x05\x15\v\x02\x8B\x99\x05\x17\f\x02" +
		"\x8C\x99\x05\x19\r\x02\x8D\x99\x05\x1B\x0E\x02\x8E\x99\x05\x1D\x0F\x02" +
		"\x8F\x99\x05\x1F\x10\x02\x90\x99\x05!\x11\x02\x91\x99\x05#\x12\x02\x92" +
		"\x99\x05%\x13\x02\x93\x99\x05\'\x14\x02\x94\x99\x05)\x15\x02\x95\x99\x05" +
		"+\x16\x02\x96\x99\x05-\x17\x02\x97\x99\x05/\x18\x02\x98\x81\x03\x02\x02" +
		"\x02\x98\x82\x03\x02\x02\x02\x98\x83\x03\x02\x02\x02\x98\x84\x03\x02\x02" +
		"\x02\x98\x85\x03\x02\x02\x02\x98\x86\x03\x02\x02\x02\x98\x87\x03\x02\x02" +
		"\x02\x98\x88\x03\x02\x02\x02\x98\x89\x03\x02\x02\x02\x98\x8A\x03\x02\x02" +
		"\x02\x98\x8B\x03\x02\x02\x02\x98\x8C\x03\x02\x02\x02\x98\x8D\x03\x02\x02" +
		"\x02\x98\x8E\x03\x02\x02\x02\x98\x8F\x03\x02\x02\x02\x98\x90\x03\x02\x02" +
		"\x02\x98\x91\x03\x02\x02\x02\x98\x92\x03\x02\x02\x02\x98\x93\x03\x02\x02" +
		"\x02\x98\x94\x03\x02\x02\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02\x02" +
		"\x02\x98\x97\x03\x02\x02\x02\x992\x03\x02\x02\x02\x9A\x9B\x042;\x02\x9B" +
		"4\x03\x02\x02\x02\x9C\x9D\t\x02\x02\x02\x9D6\x03\x02\x02\x02\x9E\x9F\t" +
		"\x03\x02\x02\x9F8\x03\x02\x02\x02\xA0\xA1\x057\x1C\x02\xA1\xA2\x06\x1D" +
		"\x02\x02\xA2\xA3\b\x1D\x02\x02\xA3\xB6\x03\x02\x02\x02\xA4\xA5\x05\x19" +
		"\r\x02\xA5\xA6\x05\x13\n\x02\xA6\xA7\x06\x1D\x03\x02\xA7\xA8\b\x1D\x03" +
		"\x02\xA8\xB6\x03\x02\x02\x02\xA9\xAA\x05\x19\r\x02\xAA\xAB\x06\x1D\x04" +
		"\x02\xAB\xAC\b\x1D\x04\x02\xAC\xB6\x03\x02\x02\x02\xAD\xAE\x05\x13\n\x02" +
		"\xAE\xAF\x06\x1D\x05\x02\xAF\xB0\b\x1D\x05\x02\xB0\xB6\x03\x02\x02\x02" +
		"\xB1\xB2\x051\x19\x02\xB2\xB3\x06\x1D\x06\x02\xB3\xB4\b\x1D\x06\x02\xB4" +
		"\xB6\x03\x02\x02\x02\xB5\xA0\x03\x02\x02\x02\xB5\xA4\x03\x02\x02\x02\xB5" +
		"\xA9\x03\x02\x02\x02\xB5\xAD\x03\x02\x02\x02\xB5\xB1\x03\x02\x02\x02\xB6" +
		":\x03\x02\x02\x02\xB7\xBE\x055\x1B\x02\xB8\xBE\x053\x1A\x02\xB9\xBA\x05" +
		"7\x1C\x02\xBA\xBB\x06\x1E\x07\x02\xBB\xBC\b\x1E\x07\x02\xBC\xBE\x03\x02" +
		"\x02\x02\xBD\xB7\x03\x02\x02\x02\xBD\xB8\x03\x02\x02\x02\xBD\xB9\x03\x02" +
		"\x02\x02\xBE<\x03\x02\x02\x02\xBF\xC0\x07W\x02\x02\xC0\xC1\x07P\x02\x02" +
		"\xC1\xC2\x07C\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\b\x1F\b\x02\xC4" +
		">\x03\x02\x02\x02\xC5\xC6\x07W\x02\x02\xC6\xC7\x07P\x02\x02\xC7\xC8\x07" +
		"D\x02\x02\xC8@\x03\x02\x02\x02\xC9\xCA\x07W\x02\x02\xCA\xCB\x07P\x02\x02" +
		"\xCB\xCC\x07\\\x02\x02\xCCB\x03\x02\x02\x02\xCD\xCE\x07W\x02\x02\xCE\xCF" +
		"\x07P\x02\x02\xCF\xD0\x07I\x02\x02\xD0D\x03\x02\x02\x02\xD1\xD2\x07W\x02" +
		"\x02\xD2\xD3\x07P\x02\x02\xD3\xD4\x07G\x02\x02\xD4F\x03\x02\x02\x02\xD5" +
		"\xD6\x07W\x02\x02\xD6\xD7\x07P\x02\x02\xD7\xD8\x07J\x02\x02\xD8H\x03\x02" +
		"\x02\x02\xD9\xDA\x07W\x02\x02\xDA\xDB\x07P\x02\x02\xDB\xDC\x07V\x02\x02" +
		"\xDCJ\x03\x02\x02\x02\xDD\xDE\x07V\x02\x02\xDE\xDF\x07Z\x02\x02\xDF\xE0" +
		"\x07V\x02\x02\xE0L\x03\x02\x02\x02\xE1\xE2\x07W\x02\x02\xE2\xE3\x07P\x02" +
		"\x02\xE3\xE4\x07U\x02\x02\xE4N\x03\x02\x02\x02\xE5\xE8\x055\x1B\x02\xE6" +
		"\xE9\x055\x1B\x02\xE7\xE9\x053\x1A\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE7" +
		"\x03\x02\x02\x02\xE9\xEE\x03\x02\x02\x02\xEA\xED\x055\x1B\x02\xEB\xED" +
		"\x053\x1A\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0" +
		"\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEFP" +
		"\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x05\x19\r\x02\xF2\xF3" +
		"\x05\x13\n\x02\xF3\xF4\x06)\b\x02\xF4\xF5\b)\t\x02\xF5\xFB\x03\x02\x02" +
		"\x02\xF6\xF7\x051\x19\x02\xF7\xF8\x06)\t\x02\xF8\xF9\b)\n\x02\xF9\xFB" +
		"\x03\x02\x02\x02\xFA\xF1\x03\x02\x02\x02\xFA\xF6\x03\x02\x02\x02\xFBR" +
		"\x03\x02\x02\x02\n\x02\x98\xB5\xBD\xE8\xEC\xEE\xFA\v\x03\x1D\x02\x03\x1D" +
		"\x03\x03\x1D\x04\x03\x1D\x05\x03\x1D\x06\x03\x1E\x07\x03\x1F\b\x03)\t" +
		"\x03)\n";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!EdiFactLexer.__ATN) {
			EdiFactLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(EdiFactLexer._serializedATN));
		}

		return EdiFactLexer.__ATN;
	}

}
