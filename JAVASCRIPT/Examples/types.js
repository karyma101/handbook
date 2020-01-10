let types = {
  undefined: typeof undefined,
  true: typeof true,
  false: typeof false,
  numbers: typeof 1,
  infinity: typeof Infinity,
  string: typeof 'String',
  object: typeof {},
  null: typeof null,
  symbol: typeof Symbol('a'),
  functions: typeof function(){},
  array: typeof [1,2],
  bigInt: typeof 42n
}

console.log(types)

console.log(Symbol('a') === Symbol('a'))