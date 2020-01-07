# Javascript
## Table of Content
  1. [About](#about)
  1. [Execution Context](#execution-context)
  1. [Closure](#closure)
  1. [Asynchronous](#asynchronous)
  1. [Definitions](#definition)

## About

Javascript is a dynamic typed single threaded programming language. Javascript is parsed line by line. 

## Execution Context

A new execution context is created when functions are called or invoked. Whenever new execution context is created it gets pushed onto the callstack and once the function finishes runnning it gets popped off the callstack. When functions get called, we create live store of data(local memory/variable environment state/state) for that function's execution context. When function finishing executing its local memory is deallocated or garbage collected except for the return value.

## Closure

Where you define your functions determines what variables your function have access to when you call the function. The lexical scope is the available data when our function was defined is what determines our available variables and priorization at function execution, not where our function is called.
  - [Example 1](https://github.com/karyma101/handbook/blob/master/JAVASCRIPT/Examples/closure.js)

## Asynchronous

Javascript runs the program line by line and when it hits a asynchronous callback it will be placed in the callback queue. Once all the synchronous code is finished running and the event loop is cleared the functions from the callback queue gets pushed on top of the callstack.

## Definition

- **Callback Function**: functions that are being passed in as paramters for another function
- **High Order Function**: takes in a function or returns out a function
- **Hoisting**: moves all variables declared with var and functions declarations to the top of their respective scopes.