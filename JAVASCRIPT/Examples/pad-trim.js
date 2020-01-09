var str = "Hello"
console.log(str.padStart(5)) // "Hello"
console.log(str.padStart(8)) // "   Hello"
console.log(str.padStart(8, "*")) // "***Hello"
console.log(str.padStart(8, "12345")) // "123Hello"
console.log(str.padStart(8, "ab")) // "abaHello"

console.log(str.padEnd(5)) // "Hello"
console.log(str.padEnd(8)) // "Hello   "
console.log(str.padEnd(8, "*")) // "Hello***"
console.log(str.padEnd(8, "12345")) // "Hello123"
console.log(str.padEnd(8, "ab")) // "Helloaba"

var str = "   some stuff \t\t"
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())