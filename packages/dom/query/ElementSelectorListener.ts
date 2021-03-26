// Generated from grammars/query/ElementSelector.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SelectorContext } from "./ElementSelectorParser";
import { ElementAdjacentSelectorContext } from "./ElementSelectorParser";
import { ElementPrecedentSelectorContext } from "./ElementSelectorParser";
import { ElementSiblingSelectorContext } from "./ElementSelectorParser";
import { ElementContainsValueSelectorContext } from "./ElementSelectorParser";
import { ElementNotValueSelectorContext } from "./ElementSelectorParser";
import { ElementValueSelectorContext } from "./ElementSelectorParser";
import { LoopPathSelectorContext } from "./ElementSelectorParser";
import { HlPathSelectorContext } from "./ElementSelectorParser";
import { ParentSegmentSelectorContext } from "./ElementSelectorParser";
import { ElementSelectorContext } from "./ElementSelectorParser";
import { SegmentTagContext } from "./ElementSelectorParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ElementSelectorParser`.
 */
export interface ElementSelectorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ElementSelectorParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.elementAdjacentSelector`.
	 * @param ctx the parse tree
	 */
	enterElementAdjacentSelector?: (ctx: ElementAdjacentSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.elementAdjacentSelector`.
	 * @param ctx the parse tree
	 */
	exitElementAdjacentSelector?: (ctx: ElementAdjacentSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.elementPrecedentSelector`.
	 * @param ctx the parse tree
	 */
	enterElementPrecedentSelector?: (ctx: ElementPrecedentSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.elementPrecedentSelector`.
	 * @param ctx the parse tree
	 */
	exitElementPrecedentSelector?: (ctx: ElementPrecedentSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.elementSiblingSelector`.
	 * @param ctx the parse tree
	 */
	enterElementSiblingSelector?: (ctx: ElementSiblingSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.elementSiblingSelector`.
	 * @param ctx the parse tree
	 */
	exitElementSiblingSelector?: (ctx: ElementSiblingSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.elementContainsValueSelector`.
	 * @param ctx the parse tree
	 */
	enterElementContainsValueSelector?: (ctx: ElementContainsValueSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.elementContainsValueSelector`.
	 * @param ctx the parse tree
	 */
	exitElementContainsValueSelector?: (ctx: ElementContainsValueSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.elementNotValueSelector`.
	 * @param ctx the parse tree
	 */
	enterElementNotValueSelector?: (ctx: ElementNotValueSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.elementNotValueSelector`.
	 * @param ctx the parse tree
	 */
	exitElementNotValueSelector?: (ctx: ElementNotValueSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.elementValueSelector`.
	 * @param ctx the parse tree
	 */
	enterElementValueSelector?: (ctx: ElementValueSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.elementValueSelector`.
	 * @param ctx the parse tree
	 */
	exitElementValueSelector?: (ctx: ElementValueSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.loopPathSelector`.
	 * @param ctx the parse tree
	 */
	enterLoopPathSelector?: (ctx: LoopPathSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.loopPathSelector`.
	 * @param ctx the parse tree
	 */
	exitLoopPathSelector?: (ctx: LoopPathSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.hlPathSelector`.
	 * @param ctx the parse tree
	 */
	enterHlPathSelector?: (ctx: HlPathSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.hlPathSelector`.
	 * @param ctx the parse tree
	 */
	exitHlPathSelector?: (ctx: HlPathSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.parentSegmentSelector`.
	 * @param ctx the parse tree
	 */
	enterParentSegmentSelector?: (ctx: ParentSegmentSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.parentSegmentSelector`.
	 * @param ctx the parse tree
	 */
	exitParentSegmentSelector?: (ctx: ParentSegmentSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.elementSelector`.
	 * @param ctx the parse tree
	 */
	enterElementSelector?: (ctx: ElementSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.elementSelector`.
	 * @param ctx the parse tree
	 */
	exitElementSelector?: (ctx: ElementSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ElementSelectorParser.segmentTag`.
	 * @param ctx the parse tree
	 */
	enterSegmentTag?: (ctx: SegmentTagContext) => void;
	/**
	 * Exit a parse tree produced by `ElementSelectorParser.segmentTag`.
	 * @param ctx the parse tree
	 */
	exitSegmentTag?: (ctx: SegmentTagContext) => void;
}

