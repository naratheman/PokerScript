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
excuses total <= 15 $.
  reveal "I'm not doing well..."
.$ followingExcuses total > 20  $.
  reveal "Big money"
.$ followingExcuses miss $.
  reveal "How did I get here?"
.$ noMoreExcuses $.
  reveal "Let's keep going!"
.$

-4
! y

hit || miss

flop stringBet names: ["Marvin", "Garrett", "Dr.Toal"]
`

const expected = `   1 | Program statements=[#2,#3,#4,#6,#10,#24,#25,#26,#27]
   2 | VariableDeclaration modifier=undefined type=(Sym,"chip") variable=(Id,"x") initializer=(Int,"10")
   3 | VariableDeclaration modifier=(Sym,"constantPressure") type=(Sym,"stringBet") variable=(Id,"y") initializer=(Str,""hello"")
   4 | ReturnStatement expression=#5
   5 | ArrayExpression elements=[(Int,"1"),(Int,"2"),(Int,"3")]
   6 | FunctionDeclaration returnType=(Sym,"chip") fun=(Id,"myfunc") parameters=[#7] body=#8
   7 | Instantiation type=(Sym,"chip") name=(Id,"x")
   8 | Block statements=[#9]
   9 | ReturnStatement expression=(Int,"420")
  10 | IfStatement test=#11 consequent=#12 alternates=[#14,#18] Else=[#21]
  11 | BinaryExpression op='<=' left=(Id,"total") right=(Int,"15")
  12 | Block statements=[#13]
  13 | PrintStatement argument=(Str,""I'm not doing well..."")
  14 | IfStatement test=#15 consequent=#16 alternates=[] Else=[]
  15 | BinaryExpression op='>' left=(Id,"total") right=(Int,"20")
  16 | Block statements=[#17]
  17 | PrintStatement argument=(Str,""Big money"")
  18 | IfStatement test=(Bool,"miss") consequent=#19 alternates=[] Else=[]
  19 | Block statements=[#20]
  20 | PrintStatement argument=(Str,""How did I get here?"")
  21 | IfStatement test=true consequent=#22 alternates=[] Else=[]
  22 | Block statements=[#23]
  23 | PrintStatement argument=(Str,""Let's keep going!"")
  24 | UnaryExpression op='-' operand=(Int,"4")
  25 | UnaryExpression op='!' operand=(Id,"y")
  26 | BinaryExpression op='||' left=(Bool,"hit") right=(Bool,"miss")
  27 | VariableDeclaration modifier=undefined type=#28 variable=(Id,"names") initializer=#29
  28 | ArrayType description='[stringBet]' baseType=(Sym,"stringBet")
  29 | ArrayExpression elements=[(Str,""Marvin""),(Str,""Garrett""),(Str,""Dr.Toal"")]`

describe("The AST generator", () => {
  it("produces a correct AST", () => {
    assert.deepStrictEqual(util.format(ast(source)), expected)
  })
})
