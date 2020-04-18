# Standard Object

## Value Properties

These global properties return a simple value. They have no properties or methods.

- Infinity
- NaN
- undefined
- globalThis

## [Function Properties](/Function_Properties/parseFloat.js)

These global functions—functions which are called globally, rather than on an object—directly return their results to the caller.

- eval()
    - never use eval() because security risk and faster alternatives
- isFinite(value)
    - returns false if the argument is positive or negative Infinity or NaN or undefined otherwise, true
- isNaN(value)
    - returns true if the given value is NaN otherwise false
    - used because NaN == NaN will result in false
- parseFloat(value)
    - takes in a string or number and returns a float number, if number cannot be parse then NaN will be returned
- 