// Generated from grammar/EdiX12Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DocumentContext } from "./EdiX12Parser";
import { InterchangeContext } from "./EdiX12Parser";
import { GroupContext } from "./EdiX12Parser";
import { TransactionContext } from "./EdiX12Parser";
import { SegmentContext } from "./EdiX12Parser";
import { InterchangeHeaderContext } from "./EdiX12Parser";
import { InterchangeTrailerContext } from "./EdiX12Parser";
import { GroupHeaderContext } from "./EdiX12Parser";
import { GroupTrailerContext } from "./EdiX12Parser";
import { TransactionHeaderContext } from "./EdiX12Parser";
import { TransactionTrailerContext } from "./EdiX12Parser";
import { SegmentEndContext } from "./EdiX12Parser";
import { ElementContext } from "./EdiX12Parser";
import { InterchangeElementContext } from "./EdiX12Parser";
import { StrictElementContext } from "./EdiX12Parser";
import { DataCharElementContext } from "./EdiX12Parser";
import { RepititionCharElementContext } from "./EdiX12Parser";
import { ComponentCharElementContext } from "./EdiX12Parser";
import { RepititionContext } from "./EdiX12Parser";
import { ComponentContext } from "./EdiX12Parser";
import { ValueContext } from "./EdiX12Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EdiX12Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface EdiX12ParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `EdiX12Parser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.interchange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterchange?: (ctx: InterchangeContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.transaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransaction?: (ctx: TransactionContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.interchangeHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterchangeHeader?: (ctx: InterchangeHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.interchangeTrailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterchangeTrailer?: (ctx: InterchangeTrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.groupHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupHeader?: (ctx: GroupHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.groupTrailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupTrailer?: (ctx: GroupTrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.transactionHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionHeader?: (ctx: TransactionHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.transactionTrailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionTrailer?: (ctx: TransactionTrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.segmentEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegmentEnd?: (ctx: SegmentEndContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.interchangeElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterchangeElement?: (ctx: InterchangeElementContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.strictElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrictElement?: (ctx: StrictElementContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.dataCharElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataCharElement?: (ctx: DataCharElementContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.repititionCharElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepititionCharElement?: (ctx: RepititionCharElementContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.componentCharElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentCharElement?: (ctx: ComponentCharElementContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.repitition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepitition?: (ctx: RepititionContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.component`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent?: (ctx: ComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `EdiX12Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

