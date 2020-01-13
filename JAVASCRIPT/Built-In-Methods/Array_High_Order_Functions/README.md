## Array High Order Functions

.filter()
  - creates a new array with all elements that pass the test implemented by the provided function.
  - does not mutate the original array

.find()
  - method that returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

.findIndex()
  - method that returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.

.forEach()
  - Execute the same code for each element of an array.
  - The return value will always be undefined

.map()
  - map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.

.sort()
  - Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

.reduce()
  - method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

.some()
  - method that tests whether at least one element in the array passes the test implemented by the provided function. 

.every()
  - method that tests whether all elements in the array pass the test implemented by the provided function.

[.flat()](./Examples/flat.js)
  - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.