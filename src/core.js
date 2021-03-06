//code taken from carlos' core.js, needs to be modified for pokerscript

import util from "util"

export class Program {
  constructor(statements) {
    this.statements = statements
  }
}

export class Block {
  constructor(statements) {
    this.statements = statements
  }
}

export class PrintStatement {
  constructor(argument) {
    Object.assign(this, { argument })
  }
}

export class VariableDeclaration {
  // Example: constantPressure chip dozen: 12;
  constructor(modifier, type, variable, initializer) {
    Object.assign(this, { modifier, type, variable, initializer })
  }
}

export class Variable {
  // Generated when processing a variable declaration
  constructor(name, readOnly) {
    Object.assign(this, { name, readOnly })
  }
}

export class TypeDeclaration {
  // Example: struct S {x: int?, y: [double]}
  constructor(type) {
    this.type = type
  }
}

export class Type {
  // Type of all basic type int, float, string, etc. and superclass of others
  static FLOAT = new Type("change")
  static BOOLEAN = new Type("playingOnTilt")
  static INT = new Type("chip")
  static STRING = new Type("stringBet")
  constructor(description) {
    Object.assign(this, { description })
  }
}

// export class StructType extends Type {
//   // Generated when processing a type declaration
//   constructor(name, fields) {
//     super(name.lexeme)
//     Object.assign(this, { fields })
//   }
// }

export class Field {
  constructor(name, type) {
    Object.assign(this, { name, type })
  }
}

export class FunctionDeclaration {
  // Example: function f(x: [int?], y: string): Vector {}
  constructor(returnType, fun, parameters, body) {
    Object.assign(this, { returnType, fun, parameters, body })
  }
}

export class Instantiation {
  constructor(type, name) {
    Object.assign(this, { type, name })
  }
}

export class InstantiationObj {
  constructor(type, id) {
    Object.assign(this, { type, id })
  }
}
export class ForLoop {
  constructor(declaration, breakCondition, incDec, body) {
    Object.assign(this, { declaration, breakCondition, incDec, body })
  }
}
export class LoopDec {
  constructor(type, id, init) {
    Object.assign(this, { type, id, init })
  }
}
export class Function {
  // Generated when processing a function declaration
  constructor(name, parameters, returnType) {
    Object.assign(this, { name, parameters, returnType })
  }
}

export class Parameter {
  // Example: x: boolean
  constructor(name, type) {
    Object.assign(this, { name, type })
  }
}

export class ArrayType extends Type {
  // Example: [int]
  constructor(baseType) {
    super(`[${baseType.description}]`)
    this.baseType = baseType
  }
}

// export class FunctionType extends Type {
//   // Example: (boolean,[string]?)->float
//   constructor(paramTypes, returnType) {
//     super(
//       `(${paramTypes.map((t) => t.description).join(",")})->${
//         returnType.description
//       }`
//     )
//     Object.assign(this, { paramTypes, returnType })
//   }
// }

export class OptionalType extends Type {
  // Example: string?
  constructor(baseType) {
    super(`${baseType.description}?`)
    this.baseType = baseType
  }
}

export class Bump {
  constructor(operand, op) {
    Object.assign(this, { operand, op })
  }
}

export class Increment {
  constructor(operand) {
    Object.assign(this, { operand })
  }
}

export class Decrement {
  constructor(operand) {
    Object.assign(this, { operand })
  }
}

export class Assignment {
  constructor(target, op, source) {
    Object.assign(this, { target, op, source })
  }
}

export class BreakStatement {
  // Intentionally empty
}

export class ReturnStatement {
  // Example: return c[5]
  constructor(expression) {
    this.expression = expression
  }
}

export class ShortReturnStatement {
  // Intentionally empty
}

export class IfStatement {
  // Example: if x < 3 { print(100); } else { break; }
  constructor(test, consequent, alternates, Else) {
    Object.assign(this, { test, consequent, alternates, Else })
  }
}

// export class ShortIfStatement {
//   // Example: if x < 3 { print(100); }
//   constructor(test, consequent) {
//     Object.assign(this, { test, consequent })
//   }
// }

export class WhileStatement {
  // Example: while level != 90 { level += random(-3, 8); }
  constructor(test, body) {
    Object.assign(this, { test, body })
  }
}

// export class RepeatStatement {
//   // Example: repeat 10 { print("Hello"); }
//   constructor(count, body) {
//     Object.assign(this, { count, body })
//   }
// }

export class Conditional {
  // Example: latitude >= 0 ? "North" : "South"
  constructor(test, consequent, alternate) {
    Object.assign(this, { test, consequent, alternate })
  }
}

export class BinaryExpression {
  // Example: 3 & 22
  constructor(op, left, right) {
    Object.assign(this, { op, left, right })
  }
}

export class UnaryExpression {
  // Example: -55
  constructor(op, operand) {
    Object.assign(this, { op, operand })
  }
}

export class EmptyOptional {
  // Example: no int
  constructor(baseType) {
    this.baseType = baseType
  }
}

export class ArrayExpression {
  // Example: ["Emma", "Norman", "Ray"]
  constructor(elements) {
    this.elements = elements
  }
}

export class EmptyArray {
  // Example: [](of float)
  constructor(baseType) {
    this.baseType = baseType
  }
}

export class Subscript {
  constructor(array, index) {
    this.array = array
    this.index = index
  }
}

// export class MemberExpression {
//   // Example: state.population
//   constructor(object, field) {
//     Object.assign(this, { object, field })
//   }
// }

export class Call {
  // Example: move(player, 90, "west")
  constructor(callee, args) {
    Object.assign(this, { callee, args })
  }
}

// Token objects are wrappers around the Nodes produced by Ohm. We use
// them here just for simple things like numbers and identifiers. The
// Ohm node will go in the "source" property.
export class Token {
  constructor(category, source) {
    Object.assign(this, { category, source })
  }
  get lexeme() {
    // Ohm holds this for us, nice
    return this.source.contents
  }
  get description() {
    return this.source.contents
  }
}

// Throw an error message that takes advantage of Ohm's messaging
export function error(message, token) {
  if (token) {
    throw new Error(`${token.source.getLineAndColumnMessage()}${message}`)
  }
  throw new Error(message)
}

// Return a compact and pretty string representation of the node graph,
// taking care of cycles. Written here from scratch because the built-in
// inspect function, while nice, isn't nice enough. Defined properly in
// the root class prototype so that it automatically runs on console.log.
Program.prototype[util.inspect.custom] = function () {
  const tags = new Map()

  // Attach a unique integer tag to every node
  function tag(node) {
    if (tags.has(node) || typeof node !== "object" || node === null) return
    if (node.constructor === Token) {
      // Tokens are not tagged themselves, but their values might be
      tag(node?.value)
    } else {
      // Non-tokens are tagged
      tags.set(node, tags.size + 1)
      for (const child of Object.values(node)) {
        Array.isArray(child) ? child.forEach(tag) : tag(child)
      }
    }
  }

  function* lines() {
    function view(e) {
      if (tags.has(e)) return `#${tags.get(e)}`
      if (e?.constructor === Token) {
        return `(${e.category},"${e.lexeme}"${
          e.value ? "," + view(e.value) : ""
        })`
      }
      if (Array.isArray(e)) return `[${e.map(view)}]`
      return util.inspect(e)
    }
    for (let [node, id] of [...tags.entries()].sort((a, b) => a[1] - b[1])) {
      let type = node.constructor.name
      let props = Object.entries(node).map(([k, v]) => `${k}=${view(v)}`)
      yield `${String(id).padStart(4, " ")} | ${type} ${props.join(" ")}`
    }
  }

  tag(this)
  return [...lines()].join("\n")
}
