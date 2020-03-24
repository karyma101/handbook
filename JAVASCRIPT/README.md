# Javascript

Javascript is a dynamic typed single threaded programming language. Javascript is an interpreted language and is read line by line. Each browser has its own Javascript engine which either interprets the code or use some sort of lazy compilation.

## Table of Content
  1. [Primitive Types](#primitive-type-&-value)
  1. [Execution Context](#execution-context)
  1. [Closure](#closure)
  1. [Asynchronous](#asynchronous)
  1. [Prototype](#prototype)
  1. [Strings](#strings)
  1. [Destructuring](#destructuring)
  1. [Iterators & Generators](#iterators-&-generators)

## Primitive Type & Value

Javascript consist of two datatypes primitive types and Object. The primitive values are undefined, string, number, boolean, null, symbol. NaN is the only value that does not equal to itself. The isNaN function first coerces the value into a number and then check if it is NaN. In es6, the Number.isNaN() method tells if value is NaN without the coercion. Negative zero can be used for showing directions.

  - [Data Types](./Examples/types.js)
  - [NaN](./Examples/NaN.js)
  - [Negative Zero](./Examples/negative_zero.js)

## Execution Context

A new execution context is created when functions are called or invoked. Whenever new execution context is created it gets pushed onto the callstack and once the function finishes runnning it gets popped off the callstack. When functions get called, we create live store of data(local memory/variable environment state/state) for that function's execution context. When function finishing executing its local memory is deallocated or garbage collected except for the return value.

## Closure

Where you define your functions determines what variables your function have access to when you call the function. The lexical scope is the available data when our function was defined is what determines our available variables and priorization at function execution, not where our function is called.

  - [Example 1](./Examples/closure.js)

## Asynchronous

Javascript runs the program line by line and when it hits a asynchronous callback it will be placed in the callback queue. Once all the synchronous code is finished running and the event loop is cleared the functions from the callback queue gets pushed on top of the callstack.

## Prototype

The new keyword will automatically create a new object, bind prototypes methods and return an object. Use new keyword only for Object(), Array(), Function(), Date(), RegExp() and Error(). Don't use the new keyword for String(), Number() and Boolean()

  - [\_\_proto\_\_](./Examples/__proto__.js)
  - [Prototype](./Examples/prototype.js)
  - [Classes](./Examples/classes.js)

## Strings

Template literals are enclosed by the back-tick character and can contain placeholders. The expressions in the placeholder and the text between the back-ticks get passed into a function and is returned a single string. Tagged templates are a more advanced form of template literals which allows you parse template literals with a function. You can add or remove white space from the start or the end of a string by using padding and trimming functions.

  - [Tagged Template](./Examples/tagged_template.js)
  - [Nesting Template](./Examples/tagged_template.js)
  - [Padding & Trimming](./Examples/pad-trim.js)

## Destructuring
  - [Array Destructuring](./Examples/array_destructuring.js)
  - [Object Destructuring](./Examples/object_destructuring.js)
  - [Named Arguments](./Examples/named_arguements.js)

## Iterators & Generators

  - [Iterator](./Examples/iterator.js)
  - [Declarative Iterator](./Examples/declarative_iterator.js)
  - [Generators](./Examples/generators.js)