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
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ElementValueOpen = 9;
	public static readonly ElementValueClose = 10;
	public static readonly ElementReference = 11;
	public static readonly ElementID = 12;
	public static readonly SegmentID = 13;
	public static readonly AnyCharacter = 14;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "Number", 
		"Letter", "Special", "AlphaNumeric", "SegmentID2", "SegmentID3", "ElementValueOpen", 
		"ElementValueClose", "ElementReference", "ElementID", "SegmentID", "AnyCharacter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'~'", "':'", "'*'", "'!'", "'^'", "'-'", "'HL'", "'+'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ElementValueOpen", "ElementValueClose", "ElementReference", 
		"ElementID", "SegmentID", "AnyCharacter",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10_\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03" +
		"\r\x05\rE\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\\\n\x14\x03\x15\x03\x15" +
		"\x02\x02\x02\x16\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02" +
		"\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\v!\x02\f#\x02\r%\x02\x0E\'\x02\x0F" +
		")\x02\x10\x03\x02\x05\x04\x02C\\c|\x06\x02\"1<B]b}\x80\x04\x02$$))\x02" +
		"Z\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02" +
		"\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'" +
		"\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x03+\x03\x02\x02\x02\x05-\x03\x02" +
		"\x02\x02\x07/\x03\x02\x02\x02\t1\x03\x02\x02\x02\v3\x03\x02\x02\x02\r" +
		"5\x03\x02\x02\x02\x0F7\x03\x02\x02\x02\x11:\x03\x02\x02\x02\x13<\x03\x02" +
		"\x02\x02\x15>\x03\x02\x02\x02\x17@\x03\x02\x02\x02\x19D\x03\x02\x02\x02" +
		"\x1BF\x03\x02\x02\x02\x1DI\x03\x02\x02\x02\x1FM\x03\x02\x02\x02!P\x03" +
		"\x02\x02\x02#S\x03\x02\x02\x02%V\x03\x02\x02\x02\'[\x03\x02\x02\x02)]" +
		"\x03\x02\x02\x02+,\x07\x80\x02\x02,\x04\x03\x02\x02\x02-.\x07<\x02\x02" +
		".\x06\x03\x02\x02\x02/0\x07,\x02\x020\b\x03\x02\x02\x0212\x07#\x02\x02" +
		"2\n\x03\x02\x02\x0234\x07`\x02\x024\f\x03\x02\x02\x0256\x07/\x02\x026" +
		"\x0E\x03\x02\x02\x0278\x07J\x02\x0289\x07N\x02\x029\x10\x03\x02\x02\x02" +
		":;\x07-\x02\x02;\x12\x03\x02\x02\x02<=\x042;\x02=\x14\x03\x02\x02\x02" +
		">?\t\x02\x02\x02?\x16\x03\x02\x02\x02@A\t\x03\x02\x02A\x18\x03\x02\x02" +
		"\x02BE\x05\x13\n\x02CE\x05\x15\v\x02DB\x03\x02\x02\x02DC\x03\x02\x02\x02" +
		"E\x1A\x03\x02\x02\x02FG\x05\x15\v\x02GH\x05\x19\r\x02H\x1C\x03\x02\x02" +
		"\x02IJ\x05\x15\v\x02JK\x05\x19\r\x02KL\x05\x19\r\x02L\x1E\x03\x02\x02" +
		"\x02MN\x07]\x02\x02NO\t\x04\x02\x02O \x03\x02\x02\x02PQ\t\x04\x02\x02" +
		"QR\x07_\x02\x02R\"\x03\x02\x02\x02ST\x05\'\x14\x02TU\x05%\x13\x02U$\x03" +
		"\x02\x02\x02VW\x05\x13\n\x02WX\x05\x13\n\x02X&\x03\x02\x02\x02Y\\\x05" +
		"\x1B\x0E\x02Z\\\x05\x1D\x0F\x02[Y\x03\x02\x02\x02[Z\x03\x02\x02\x02\\" +
		"(\x03\x02\x02\x02]^\x04\x02\x01\x02^*\x03\x02\x02\x02\x05\x02D[\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ElementSelectorLexer.__ATN) {
			ElementSelectorLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ElementSelectorLexer._serializedATN));
		}

		return ElementSelectorLexer.__ATN;
	}

}

