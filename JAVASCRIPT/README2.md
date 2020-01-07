# [Javascript](http://eloquentjavascript.net/)

## Definitions

### Temporal Dead Zones
* where you cannot access a variable before it is defined.

### Scoping

* When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document

* When you declare a variable within a function, it is called a local variable, because it is available only within that function

* **Blocks** are statements that exist within curly braces {}

* **Global Scope** refers to the context within which variables are accessible to every part of the program

* **Global Variables** are variables that exist within global scope

* **Block Scope** refers to the context within which variables that are accessible only within the block they are defined

* **Local Variables** are variables that exist within block scope

* **Global Namespace** is the space in our code that contains globally scoped information

* **Scope Pollution** is when too many variables exist in a namespace or variable names are reused

### Function

* Pure functions
  - should not have side effects
  - easier to test

* Functions are **First Class Objects**

* Ways to declare functions
  * Function Declaration
  * Function Expression
    * Named Function Expression
    * Anonymous Function Expression

* **High Order Functions** are functions that takes another function as an input, returns a function or does both

* **Factory Functions** allow us to create object instances quickly and repeatedly.

* Can be stored in variables, objects, or arrays

  ```javascript
  let fn = function doSomething() {}

  let obj = { doSomething: function(){} }

  arr.push(function doSomething(){})
  ```

* A **callback** is a function passed as an argument to another function

  ```javascript
    doAction(function doSomething(){})
  ```
### Immutable Data

* const arr = Object.freeze([1, 2])


### Objects

* Objects store collections of key-value pairs

* Each key-value pair is a **property**

* An object literal is composed of comma-separated key-value pairs surrounded by curly braces

* Objects are mutable—we can change their properties even when they’re declared with const

* Dot/Bracket Notation are used to access the key within an object

  * Bracket Notation can target keys with space, numbers, symbols. Can also pass in variables

* Delete operator removes property from object
  * delete object.key
  
* Objects are passed by reference, this means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object

* The object that a method belongs to is called the calling object

* The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed

* Setters and getter methods allow for more detailed ways of accessing and assigning properties

* **Methods**
  * When the data stored on an object is a function we call that a method

* **This** keyword references the calling object which provides access to the calling object’s properties
  * Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object

* **Getters/Setters**
  * can perform an action on the data when getting a property
  * can return different values using conditionals
  * we can access the properties of the calling object using this
  * The functionality of our code is easier for other developers to understand
  * cannot share same name as other properties in object
  * does not need parentheses to invoke getter function

* [Built in object methods/instances](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)

### Classes

* Classes are templates for objects.
* Javascript calls a constructor method when we create a new instance of a class.
* Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
* We use the extends keyword to create a subclass.
* The super keyword calls the constructor() of a parent class.
* Static methods are called on the class, but not on instances of the class.

### Modules

* find, fix and debug code more easily
* reuse and recycle defined logic in different parts of our application
* keep information private and protected from other modules
* prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program
* module.exports exports the module for use in another program
* require() imports the module for use in the current program
* default exports use export default to export JavaScript objects, functions, and primitive data types
* named exports use the export keyword to export data in variables
* named exports can be aliased with the as keyword
* import is a keyword that imports any object, function, or data type

### Hoisting

* All declarations (var, let, const, function, function*, class) are "hoisted" in JavaScript

* The difference between var/function/function* declarations and let/const/class declara­tions is the initialisation

* The former are initialised with undefined or the (generator) function right when the binding is created at the top of the scope. The lexically declared variables however stay uninitialised. This means that a ReferenceError exception is thrown when you try to access it. It will only get initialised when the let/const/class statement is evaluated, everything before (above) that is called the temporal dead zone

### Ternary Operator

* Shorthand if statement

* condition ? true : false

### Variables

* var declares a variable, optionally initializing it to a value.

* let declares a block-scoped, local variable, optionally initializing it to a value.

* const declares a block-scoped, read-only named constant.

## Features

### Console

```javascript
console.log('%c Title', 'color: orange; font-weight: bold;') // add css style in console
console.log({a, b, c}) // multiple variables in a single line
console.table(array) // neat table for arrays
console.time('looper)
console.timeEnd('looper') // keeps track of how long it takes to run code in between
console.trace('') // shows where the function is called or stack trace logs
```

### Dom Manipulation

* document.querySelector returns a node list, not an array.

* NodeList does not have all the built in methods as an array

### IIFE (Immediately Invoked Function Expression)

* Used mainly back when let and const weren't around.

* Invokes function immediately and assigns to a variable.

* Variable inside of the function will be closed within that block.

### Destructuring 
```Javascript

// Array Destructuring

//Ex 1
let input = [1, 2]
let [first, second] = input
console.log(first); // outputs 1
console.log(second); // outputs 2

//Ex 2
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2])

//Ex 3
let [, second, , fourth] = [1, 2, 3, 4];
console.log(second); // outputs 2
console.log(fourth); // outputs 4

// Object Destructuring

let o = {
    a: "foo",
    b: 12,
    c: "bar"
}

let { a, b: newVariableName } = o //can rename variable name 

```