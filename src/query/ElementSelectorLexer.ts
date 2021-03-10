// Generated from grammar/ElementSelector.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class ElementSelectorLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly HLPath = 7;
	public static readonly ElementValue = 8;
	public static readonly ElementReference = 9;
	public static readonly ElementID = 10;
	public static readonly SegmentID = 11;
	public static readonly AnyCharacter = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "Number", "Letter", "Special", 
		"AlphaNumeric", "SegmentID2", "SegmentID3", "HLPath", "ElementValue", 
		"ElementReference", "ElementID", "SegmentID", "AnyCharacter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'~'", "':'", "'*'", "'!'", "'^'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"HLPath", "ElementValue", "ElementReference", "ElementID", "SegmentID", 
		"AnyCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ElementSelectorLexer._LITERAL_NAMES, ElementSelectorLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ElementSelectorLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ElementSelectorLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ElementSelector.g4"; }

	// @Override
	public get ruleNames(): string[] { return ElementSelectorLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ElementSelectorLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ElementSelectorLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ElementSelectorLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0Ed\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n" +
		"\x03\n\x03\v\x03\v\x05\v<\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0EJ\n\x0E\r\x0E\x0E\x0E" +
		"K\x03\x0F\x03\x0F\x03\x0F\x07\x0FQ\n\x0F\f\x0F\x0E\x0FT\v\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x05\x12a\n\x12\x03\x13\x03\x13\x02\x02\x02\x14\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\x02\x11\x02\x02" +
		"\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02\x02\x1B\x02\t\x1D\x02\n\x1F" +
		"\x02\v!\x02\f#\x02\r%\x02\x0E\x03\x02\x05\x04\x02C\\c|\x06\x02\"1<B]b" +
		"}\x80\x04\x02$$))\x02a\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x03\'\x03\x02\x02\x02\x05)\x03\x02\x02\x02\x07+\x03\x02\x02" +
		"\x02\t-\x03\x02\x02\x02\v/\x03\x02\x02\x02\r1\x03\x02\x02\x02\x0F3\x03" +
		"\x02\x02\x02\x115\x03\x02\x02\x02\x137\x03\x02\x02\x02\x15;\x03\x02\x02" +
		"\x02\x17=\x03\x02\x02\x02\x19@\x03\x02\x02\x02\x1BD\x03\x02\x02\x02\x1D" +
		"M\x03\x02\x02\x02\x1FX\x03\x02\x02\x02![\x03\x02\x02\x02#`\x03\x02\x02" +
		"\x02%b\x03\x02\x02\x02\'(\x07\x80\x02\x02(\x04\x03\x02\x02\x02)*\x07<" +
		"\x02\x02*\x06\x03\x02\x02\x02+,\x07,\x02\x02,\b\x03\x02\x02\x02-.\x07" +
		"#\x02\x02.\n\x03\x02\x02\x02/0\x07`\x02\x020\f\x03\x02\x02\x0212\x07/" +
		"\x02\x022\x0E\x03\x02\x02\x0234\x042;\x024\x10\x03\x02\x02\x0256\t\x02" +
		"\x02\x026\x12\x03\x02\x02\x0278\t\x03\x02\x028\x14\x03\x02\x02\x029<\x05" +
		"\x0F\b\x02:<\x05\x11\t\x02;9\x03\x02\x02\x02;:\x03\x02\x02\x02<\x16\x03" +
		"\x02\x02\x02=>\x05\x11\t\x02>?\x05\x15\v\x02?\x18\x03\x02\x02\x02@A\x05" +
		"\x11\t\x02AB\x05\x15\v\x02BC\x05\x15\v\x02C\x1A\x03\x02\x02\x02DE\x07" +
		"J\x02\x02EF\x07N\x02\x02FI\x03\x02\x02\x02GH\x07-\x02\x02HJ\x05%\x13\x02" +
		"IG\x03\x02\x02\x02JK\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"L\x1C\x03\x02\x02\x02MN\x07]\x02\x02NR\t\x04\x02\x02OQ\x05%\x13\x02PO" +
		"\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02" +
		"SU\x03\x02\x02\x02TR\x03\x02\x02\x02UV\t\x04\x02\x02VW\x07_\x02\x02W\x1E" +
		"\x03\x02\x02\x02XY\x05#\x12\x02YZ\x05!\x11\x02Z \x03\x02\x02\x02[\\\x05" +
		"\x0F\b\x02\\]\x05\x0F\b\x02]\"\x03\x02\x02\x02^a\x05\x17\f\x02_a\x05\x19" +
		"\r\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02a$\x03\x02\x02\x02bc\x04\x02" +
		"\x01\x02c&\x03\x02\x02\x02\x07\x02;KR`\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ElementSelectorLexer.__ATN) {
			ElementSelectorLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ElementSelectorLexer._serializedATN));
		}

		return ElementSelectorLexer.__ATN;
	}

}

