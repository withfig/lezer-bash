import {styleTags, tags as t} from "@lezer/highlight"

export const bashHighlight = styleTags({
  "while do done until for in case esac if elif else fi": t.controlKeyword,
  IORedirect: t.operator,
  "&& || |": t.logicalOperator,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
  RawString: t.string,
  String: t.string,
  AnsiCString: t.string,
  VariableName: t.variableName,
  EnvironmentVariable: t.variableName,
  FunctionName: t.variableName,
  Comment: t.comment,
  CommandName: t.name,
  "& ;": t.separator,
})
