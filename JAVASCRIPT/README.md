# Javascript
## Table of Content
  1. [About](#about)
  1. [Primitive Types](#primitive-type-&-value)
  1. [Execution Context](#execution-context)
  1. [Closure](#closure)
  1. [Asynchronous](#asynchronous)
  1. [Prototype](#prototype)
  1. [Strings](#strings)
  1. [Definitions](#definition)
  1. [Array High Order Functions](#array-high-order-functions)

## About

Javascript is a dynamic typed single threaded programming language. Javascript is parsed line by line. 

## Primitive Type & Value

Javascript consist of two datatypes primitive types and Object. The primitive values are undefined, string, number, boolean, null, symbol. NaN is the only value that does not equal to itself. The isNaN function first coerces the value into a number and then check if it is NaN. In es6, the Number.isNaN() method tells if value is NaN without the coercion. Negative zero can be used for showing directions.

  - [Data Types](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/types.js)
  - [NaN](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/NaN.js)
  - [Negative Zero](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/negative_zero.js)

## Execution Context

A new execution context is created when functions are called or invoked. Whenever new execution context is created it gets pushed onto the callstack and once the function finishes runnning it gets popped off the callstack. When functions get called, we create live store of data(local memory/variable environment state/state) for that function's execution context. When function finishing executing its local memory is deallocated or garbage collected except for the return value.

## Closure

Where you define your functions determines what variables your function have access to when you call the function. The lexical scope is the available data when our function was defined is what determines our available variables and priorization at function execution, not where our function is called.

  - [Example 1](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/closure.js)

## Asynchronous

Javascript runs the program line by line and when it hits a asynchronous callback it will be placed in the callback queue. Once all the synchronous code is finished running and the event loop is cleared the functions from the callback queue gets pushed on top of the callstack.

## Prototype

The new keyword will automatically create a new object, bind prototypes methods and return an object. Use new keyword only for Object(), Array(), Function(), Date(), RegExp() and Error(). Don't use the new keyword for String(), Number() and Boolean()

  - [\_\_proto\_\_](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/__proto__.js)
  - [Prototype](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/prototype.js)
  - [Classes](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/classes.js)

## Strings

Template literals are enclosed by the back-tick character and can contain placeholders. The expressions in the placeholder and the text between the back-ticks get passed into a function and is returned a single string. Tagged templates are a more advanced form of template literals which allows you parse template literals with a function. You can add or remove white space from the start or the end of a string by using padding and trimming functions.

  - [Tagged Template](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/tagged_template.js)
  - [Nesting Template](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/tagged_template.js)
  - [Padding & Trimming](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/pad-trim.js)

## Definition

- **Callback Function**: functions that are being passed in as paramters for another function
- **High Order Function**: takes in a function or returns out a function
- **Hoisting**: moves all variables declared with var and functions declarations to the top of their respective scopes.

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