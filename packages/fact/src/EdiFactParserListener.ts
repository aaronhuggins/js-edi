// Generated from grammars/fact/EdiFactParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DocumentContext } from "./EdiFactParser";
import { InterchangeContext } from "./EdiFactParser";
import { GroupContext } from "./EdiFactParser";
import { MessageContext } from "./EdiFactParser";
import { SegmentContext } from "./EdiFactParser";
import { ServiceStringAdviceContext } from "./EdiFactParser";
import { InterchangeHeaderContext } from "./EdiFactParser";
import { InterchangeTrailerContext } from "./EdiFactParser";
import { GroupHeaderContext } from "./EdiFactParser";
import { GroupTrailerContext } from "./EdiFactParser";
import { MessageHeaderContext } from "./EdiFactParser";
import { MessageTrailerContext } from "./EdiFactParser";
import { SegmentEndContext } from "./EdiFactParser";
import { ElementContext } from "./EdiFactParser";
import { RepititionContext } from "./EdiFactParser";
import { ComponentContext } from "./EdiFactParser";
import { ValueContext } from "./EdiFactParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `EdiFactParser`.
 */
export interface EdiFactParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `EdiFactParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.interchange`.
	 * @param ctx the parse tree
	 */
	enterInterchange?: (ctx: InterchangeContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.interchange`.
	 * @param ctx the parse tree
	 */
	exitInterchange?: (ctx: InterchangeContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.serviceStringAdvice`.
	 * @param ctx the parse tree
	 */
	enterServiceStringAdvice?: (ctx: ServiceStringAdviceContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.serviceStringAdvice`.
	 * @param ctx the parse tree
	 */
	exitServiceStringAdvice?: (ctx: ServiceStringAdviceContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.interchangeHeader`.
	 * @param ctx the parse tree
	 */
	enterInterchangeHeader?: (ctx: InterchangeHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.interchangeHeader`.
	 * @param ctx the parse tree
	 */
	exitInterchangeHeader?: (ctx: InterchangeHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.interchangeTrailer`.
	 * @param ctx the parse tree
	 */
	enterInterchangeTrailer?: (ctx: InterchangeTrailerContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.interchangeTrailer`.
	 * @param ctx the parse tree
	 */
	exitInterchangeTrailer?: (ctx: InterchangeTrailerContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.groupHeader`.
	 * @param ctx the parse tree
	 */
	enterGroupHeader?: (ctx: GroupHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.groupHeader`.
	 * @param ctx the parse tree
	 */
	exitGroupHeader?: (ctx: GroupHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.groupTrailer`.
	 * @param ctx the parse tree
	 */
	enterGroupTrailer?: (ctx: GroupTrailerContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.groupTrailer`.
	 * @param ctx the parse tree
	 */
	exitGroupTrailer?: (ctx: GroupTrailerContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.messageHeader`.
	 * @param ctx the parse tree
	 */
	enterMessageHeader?: (ctx: MessageHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.messageHeader`.
	 * @param ctx the parse tree
	 */
	exitMessageHeader?: (ctx: MessageHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.messageTrailer`.
	 * @param ctx the parse tree
	 */
	enterMessageTrailer?: (ctx: MessageTrailerContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.messageTrailer`.
	 * @param ctx the parse tree
	 */
	exitMessageTrailer?: (ctx: MessageTrailerContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.segmentEnd`.
	 * @param ctx the parse tree
	 */
	enterSegmentEnd?: (ctx: SegmentEndContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.segmentEnd`.
	 * @param ctx the parse tree
	 */
	exitSegmentEnd?: (ctx: SegmentEndContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.repitition`.
	 * @param ctx the parse tree
	 */
	enterRepitition?: (ctx: RepititionContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.repitition`.
	 * @param ctx the parse tree
	 */
	exitRepitition?: (ctx: RepititionContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;

	/**
	 * Enter a parse tree produced by `EdiFactParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `EdiFactParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

