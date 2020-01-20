//Regular Expression does not have to be in a variable
console.log(/e/.test("The best things in life are free!"))

// Returns in the nth starting place where value is found. Returns -1 if nothing is found.
var str = "Visit W3Schools"
var n = str.search(/w3schools/i)
console.log(n)

// Replaces value of first argument to second argument if found in string
var str = "Visit Microsoft!"
var res = str.replace(/microsoft/i, "W3Schools")
console.log(res)

// Returns true or false depending on the condition 
var patt = /z/
console.log(patt.test("The best things in life are free!"))

// Returns found text as an object. If nothing is found returns null
console.log(/free/.exec("The best things in life are free!"))
