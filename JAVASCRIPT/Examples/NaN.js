var myAge = Number('0o46') // 38
var myNextAge = Number('39') // 39
var myCatsAge = Number('N/A') // NaN
console.log(myAge - "my son's age") // NaN

console.log(myCatsAge === myCatsAge) // false

console.log(isNaN(myAge)) // false
console.log(isNaN(myCatsAge)) // true
console.log(isNaN("my son's age")) //true

console.log(Number.isNaN(myCatsAge)) // true
console.log(Number.isNaN("my son's age")) // false