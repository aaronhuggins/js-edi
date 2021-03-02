// Generated from grammar/EdiX12Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { RepititionContext } from "./EdiX12Parser";
import { ComponentContext } from "./EdiX12Parser";
import { ValueContext } from "./EdiX12Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `EdiX12Parser`.
 */
export interface EdiX12ParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `EdiX12Parser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.interchange`.
	 * @param ctx the parse tree
	 */
	enterInterchange?: (ctx: InterchangeContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.interchange`.
	 * @param ctx the parse tree
	 */
	exitInterchange?: (ctx: InterchangeContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.transaction`.
	 * @param ctx the parse tree
	 */
	enterTransaction?: (ctx: TransactionContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.transaction`.
	 * @param ctx the parse tree
	 */
	exitTransaction?: (ctx: TransactionContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.interchangeHeader`.
	 * @param ctx the parse tree
	 */
	enterInterchangeHeader?: (ctx: InterchangeHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.interchangeHeader`.
	 * @param ctx the parse tree
	 */
	exitInterchangeHeader?: (ctx: InterchangeHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.interchangeTrailer`.
	 * @param ctx the parse tree
	 */
	enterInterchangeTrailer?: (ctx: InterchangeTrailerContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.interchangeTrailer`.
	 * @param ctx the parse tree
	 */
	exitInterchangeTrailer?: (ctx: InterchangeTrailerContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.groupHeader`.
	 * @param ctx the parse tree
	 */
	enterGroupHeader?: (ctx: GroupHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.groupHeader`.
	 * @param ctx the parse tree
	 */
	exitGroupHeader?: (ctx: GroupHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.groupTrailer`.
	 * @param ctx the parse tree
	 */
	enterGroupTrailer?: (ctx: GroupTrailerContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.groupTrailer`.
	 * @param ctx the parse tree
	 */
	exitGroupTrailer?: (ctx: GroupTrailerContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.transactionHeader`.
	 * @param ctx the parse tree
	 */
	enterTransactionHeader?: (ctx: TransactionHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.transactionHeader`.
	 * @param ctx the parse tree
	 */
	exitTransactionHeader?: (ctx: TransactionHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.transactionTrailer`.
	 * @param ctx the parse tree
	 */
	enterTransactionTrailer?: (ctx: TransactionTrailerContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.transactionTrailer`.
	 * @param ctx the parse tree
	 */
	exitTransactionTrailer?: (ctx: TransactionTrailerContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.segmentEnd`.
	 * @param ctx the parse tree
	 */
	enterSegmentEnd?: (ctx: SegmentEndContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.segmentEnd`.
	 * @param ctx the parse tree
	 */
	exitSegmentEnd?: (ctx: SegmentEndContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.repitition`.
	 * @param ctx the parse tree
	 */
	enterRepitition?: (ctx: RepititionContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.repitition`.
	 * @param ctx the parse tree
	 */
	exitRepitition?: (ctx: RepititionContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;

	/**
	 * Enter a parse tree produced by `EdiX12Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `EdiX12Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

