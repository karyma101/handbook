### document.querySelector

- returns a node list, not an array.

### NodeList

- node list does not have all the built in methods as an array

### Data Attribute

- maded up attribute
- can call with this.dataset in javascript

### console

- console.log('%c Title', 'color: orange; font-weight: bold;'), add css style in console
- console.log({a, b, c}), multiple variables in a single line
- console.table(array), neat table for arrays
- console.time('looper); console.timeEnd('looper'), keeps track of how long it takes to run code in between
- console.trace(''), shows where the function is called or stack trace logs

## Array High Order Functions

### .filter()

- creates a new array with all elements that pass the test implemented by the provided function.
- does not mutate the original array

### .map()

- map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.
