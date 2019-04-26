### Three Types of Variable
- var
  - Declares a variable, optionally initializing it to a value.
- let
  - Declares a block-scoped, local variable, optionally initializing it to a value.
- const
  - Declares a block-scoped, read-only named constant.

### Scoping

- When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document

- When you declare a variable within a function, it is called a local variable, because it is available only within that function.

### Function
- Function Declaration
- Function Expression
 - Named Function Expression
 - Anonymous Function Expression

### Hoisting
- All declarations (var, let, const, function, function*, class) are "hoisted" in JavaScript. 
- The difference between var/function/function* declarations and let/const/class declara­tions is the initialisation.
- The former are initialised with undefined or the (generator) function right when the binding is created at the top of the scope. The lexically declared variables however stay uninitialised. This means that a ReferenceError exception is thrown when you try to access it. It will only get initialised when the let/const/class statement is evaluated, everything before (above) that is called the temporal dead zone. 

### Ternary Operator
- Shorthand if statement
- condition ? true : false

### console

- console.log('%c Title', 'color: orange; font-weight: bold;'), add css style in console
- console.log({a, b, c}), multiple variables in a single line
- console.table(array), neat table for arrays
- console.time('looper); console.timeEnd('looper'), keeps track of how long it takes to run code in between
- console.trace(''), shows where the function is called or stack trace logs

## Dom Manipulation

### document.querySelector

- returns a node list, not an array.

### NodeList

- node list does not have all the built in methods as an array

### Data Attribute

- maded up attribute in html
- can call with this.dataset in javascript

## Array High Order Functions

### .filter()

- creates a new array with all elements that pass the test implemented by the provided function.
- does not mutate the original array

### .map()

- map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.

### .sort()

- Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

### .reduce()

- method executes a reducer function (that you provide) on each member of the array resulting in a single output value.