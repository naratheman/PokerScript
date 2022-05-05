import assert from "assert"
import util from "util"
import ast from "../src/ast.js"

//
const source = `
chip x: 10
constantPressure stringBet y: "hello"
cashout [1,2,3]
straddle chip myfunc (chip: x) $.
    cashout 420
.$
`

const expected = `   1 | Program statements=[#2,#3,#4,#6]
   2 | VariableDeclaration modifier=undefined type=(Sym,"chip") variable=(Id,"x") initializer=(Int,"10")
   3 | VariableDeclaration modifier=(Sym,"constantPressure") type=(Sym,"stringBet") variable=(Id,"y") initializer=(Str,""hello"")
   4 | ReturnStatement expression=#5
   5 | ArrayExpression elements=[(Int,"1"),(Int,"2"),(Int,"3")]
   6 | FunctionDeclaration returnType=(Sym,"chip") fun=(Id,"myfunc") parameters=[#7] body=#8
   7 | Instantiation type=(Sym,"chip") name=(Id,"x")
   8 | Block statements=[#9]
   9 | ReturnStatement expression=(Int,"420")`

describe("The AST generator", () => {
  it("produces a correct AST", () => {
    assert.deepStrictEqual(util.format(ast(source)), expected)
  })
})
