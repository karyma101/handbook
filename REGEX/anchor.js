var str = 'Ha HaHa Ha'
console.log(str.replace(/\bHa/, 'No')) // No HaHa Ha
console.log(str.replace(/\bHa/g, 'No')) // No NoHa No
console.log(str.replace(/\bHa\b/, 'No')) // No HaHa Ha
console.log(str.replace(/\bHa\b/g, 'No')) // No HaHa No

console.log(str.replace(/^Ha/, 'No')) // No HaHa Ha

console.log(str.replace(/Ha$/, 'No')) // Ha HaHa No
