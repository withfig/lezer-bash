import {styleTags, tags as t} from "@lezer/highlight"

export const bashHighlighting = styleTags({
  "while do done until for in case esac if then elif else fi": t.controlKeyword,
  IORedirect: t.operator,
  "&& || |": t.logicOperator,
	"= +=": t.operator,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
	"${ }": t.brace,
	"$( )": t.paren,
  RawString: t.string,
  String: t.string,
  AnsiCString: t.string,
  VariableName: t.variableName,
  EnvironmentVariable: t.variableName,
  FunctionName: t.variableName,
  Comment: t.comment,
  CommandName: t.name,
  "; &": t.separator,
})
