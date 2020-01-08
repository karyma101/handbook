var trendRate = -0
console.log(trendRate === -0) // true

console.log(trendRate.toString()) // 0
console.log(trendRate === 0) // true
console.log(trendRate < 0) // false
console.log(trendRate > 0) // false

console.log(Object.is(trendRate, -0)) // true
console.log(Object.is(trendRate, 0)) // false

// The Object.is() method determines whether two values are the same value.