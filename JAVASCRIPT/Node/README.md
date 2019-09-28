# [Node](https://nodejs.org/api/)

## Commands

- **node**: brings out REPL
- **node -v**: node version


## Built-in Javascript REPL

- to access you can type node (with nothing after it)
- Node REPL will evaluate your input line by line
- .editor for typing multiple lines
- Each session of the REPL has a single shared memory; you can access any variables or functions you define until you exit the REPL.

## [Accessing Process Object](https://nodejs.org/api/process.html)

- The **process.env** property is an object which stores and controls information about the environment in which the process is currently running.
  - **process.env.PWD** : property which holds a string with the directory in which the current process is located.
- The **process.memoryUsage()** returns information on the CPU demands of the current process.
  - Heap refers to the a block of computer memory. Heap Used represents bytes of memory the current process is using.
- The **process.argv** property holds an array of command line values provided when the current process was initiated.
  - The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces.

## Errors

- The Node environment has all the standard JavaScript errors such as EvalError, SyntaxError, RangeError, ReferenceError, TypeError, and URIError as well as the JavaScript Error class for creating new error instances.

- Many asynchronous Node APIs use error-first callback functions: callback functions which have an error as the first expected argument and the data as the second argument. If the asynchronous task results in an error, it will be passed in as the first argument to the callback function. If no error was thrown, the first argument will be undefined.