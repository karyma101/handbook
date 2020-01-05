# Javascript
## Table of Content
  1. [Intro](#intro)
  1. [Closure](#closure)
  1. [Definitions](#definition)

### Intro

Javascript is a dynamic typed single threaded programming language. Javascript is parsed line by line. A new execution context is created when functions are called or invoked. Whenever new execution context is created it gets placed on top of the call stack. When functions get called, we create live store of data(local memory/variable environment state/state) for that function's execution context. When function finishing executing its local memory is deallocated or garbage collected except for the return value.

### Closure

Where you define your functions determines what variables your function have access to when you call the function.

### Definition

- **Callback Function**: functions that are being passed in as paramters for another function
- **High Order Function**: takes in a function or returns out a function
- **Hoisting**: moves all variables declared with var and functions declarations to the top of their respective scopes.