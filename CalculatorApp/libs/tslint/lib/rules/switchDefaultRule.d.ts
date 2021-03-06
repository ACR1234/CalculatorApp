import * as ts from "typescript";
import * as Lint from "../lint";
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: Lint.IRuleMetadata;
    static FAILURE_STRING: string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
export declare class SwitchDefaultWalker extends Lint.RuleWalker {
    visitSwitchStatement(node: ts.SwitchStatement): void;
}
