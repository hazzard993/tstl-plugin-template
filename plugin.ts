import * as ts from "typescript";
import * as tstl from "typescript-to-lua";

const plugin: tstl.Plugin = {
  visitors: {
    [ts.SyntaxKind.FunctionDeclaration]: (node, context) => {
      console.log("visited function declaration");
      return context.superTransformStatements(node);
    }
  }
};

export default plugin;
