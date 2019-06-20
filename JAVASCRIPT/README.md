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

- **Blocks** are statements that exist within curly braces {}.

- **Global scope** refers to the context within which variables are accessible to every part of the program.

- **Global variables** are variables that exist within global scope.

- **Block scope** refers to the context within which variables that are accessible only within the block they are defined.

- **Local variables** are variables that exist within block scope.

- **Global namespace** is the space in our code that contains globally scoped information.

- **Scope pollution** is when too many variables exist in a namespace or variable names are reused.

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

### IIFE (Immediately Invoked Function Expression)
- used mainly back when let and const weren't around.
- invokes function immediately and assigns to a variable.
- variable inside of the function will be closed within that block.

## Array High Order Functions

### .filter()

- creates a new array with all elements that pass the test implemented by the provided function.
- does not mutate the original array

### .find()

- method that returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

### .findIndex()

- method that returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.

### .map()

- map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.

### .sort()

- Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

### .reduce()

- method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

### .some()

- method that tests whether at least one element in the array passes the test implemented by the provided function. 

### .every()

- method that tests whether all elements in the array pass the test implemented by the provided function.

