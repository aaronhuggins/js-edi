// Generated from grammar/ElementSelector.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SelectorContext } from "./ElementSelectorParser";
import { ElementAdjacentSelectorContext } from "./ElementSelectorParser";
import { ElementPrecedentSelectorContext } from "./ElementSelectorParser";
import { ElementContainsValueSelectorContext } from "./ElementSelectorParser";
import { ElementNotValueSelectorContext } from "./ElementSelectorParser";
import { ElementValueSelectorContext } from "./ElementSelectorParser";
import { LoopPathSelectorContext } from "./ElementSelectorParser";
import { HlPathSelectorContext } from "./ElementSelectorParser";
import { ParentSegmentSelectorContext } from "./ElementSelectorParser";
import { ElementSelectorContext } from "./ElementSelectorParser";
import { SegmentTagContext } from "./ElementSelectorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ElementSelectorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ElementSelectorVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ElementSelectorParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.elementAdjacentSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementAdjacentSelector?: (ctx: ElementAdjacentSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.elementPrecedentSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementPrecedentSelector?: (ctx: ElementPrecedentSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.elementContainsValueSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementContainsValueSelector?: (ctx: ElementContainsValueSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.elementNotValueSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementNotValueSelector?: (ctx: ElementNotValueSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.elementValueSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueSelector?: (ctx: ElementValueSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.loopPathSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopPathSelector?: (ctx: LoopPathSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.hlPathSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHlPathSelector?: (ctx: HlPathSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.parentSegmentSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentSegmentSelector?: (ctx: ParentSegmentSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.elementSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementSelector?: (ctx: ElementSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ElementSelectorParser.segmentTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegmentTag?: (ctx: SegmentTagContext) => Result;
}

