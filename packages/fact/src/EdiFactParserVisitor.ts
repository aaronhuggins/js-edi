// Generated from grammar/EdiFactParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EdiFactParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface EdiFactParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `EdiFactParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.interchange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterchange?: (ctx: InterchangeContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage?: (ctx: MessageContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.serviceStringAdvice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceStringAdvice?: (ctx: ServiceStringAdviceContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.interchangeHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterchangeHeader?: (ctx: InterchangeHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.interchangeTrailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterchangeTrailer?: (ctx: InterchangeTrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.groupHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupHeader?: (ctx: GroupHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.groupTrailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupTrailer?: (ctx: GroupTrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.messageHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageHeader?: (ctx: MessageHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.messageTrailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageTrailer?: (ctx: MessageTrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.segmentEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegmentEnd?: (ctx: SegmentEndContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.repitition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepitition?: (ctx: RepititionContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.component`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent?: (ctx: ComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiFactParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

