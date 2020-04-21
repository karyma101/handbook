# Python

Interpreted language, saves time because no compilation or linking necessary, tradeoff compared to complied languages is that it is generally slower. Python is an dynamic typed programming language.
Indentation is used to define scope in python.

## Features

### General

- User Input, will always store value as a string
    - `x = input('What is your name?')`
- Comments
    - `#This is a comment`{.python}
- `type(x)`
    - returns the data type of variable

### Operators

- Arithmetic Operators
    - `+`
    - `-`
    - `*`
    - `/`
    - `//`
        - Floor division, rounds down the result of division
    - `**`
        - Exponents
    - `%`
        - Modulus, gives remainder of division

- Comparison Operators
    - `==`
    - `!=`
    - `>`
    - `>=`
    - `<`
    - `<=`

- Assignment Operators
    - `=`
    - `+=`
    - `-=`
    - `*=`
    - `/=`
    - `%=`
    - `//=`
    - `**=`

- Logical Operators
    - `and`
    - `or`
    - `not`

- Membership Operators  
*These operators provide and easy way to check if certain object is present in a sequence: string, list, tuple, set and dictionary.*
    - `in`
        - returns `True` if object is present
    - `not in`
        - returns `True` if object is not present

### Conditionals

Controls the program flow of your application, examples [here](./Examples/Conditionals.py)

- `if` `elif` `else` statement
- Ternary Operators, 1 line if statement
    - `result = a if True else b`

### Boolean

- Boolean Declarations
    - `x = True`
    - `x = bool(1024)`

### Int

- Int Declarations
    - `x = 1`
    - `x = int(1)`
- `int(x)`
    - Explicit conversion, converts string into a number, if float value it will always round down

### Float

- Float declarations
    - `x = 3.2`
    - `x = float(3.2)`
- `float(x)`
    - Explicit conversion, convert int or string into a float value

### Complex

- Complex declarations
    - `x = 32+4j`
    - `x = complex(32+4j)`

### Strings

- String declarations
    - `x = 'string'` can be single or double quote
    - `x = str('string')`
- `str(x)`
    - Explicit conversion, converts number to string whether it is a float or int
- `\` Backslash is used to escape characters.
    - `print('Don\'t')`
- Raw string, ignores backslashes
    - `print(r'C:\some\name')`
- `len(x)`
    - returns the length of the string
- `x.replace(y, z)`
    - replaces y with z in a string and returns the new output
- `x.upper()`
    - returns string with all uppercase characters
- `x.lower()`
    - returns string with all lowercase characters
- 
- [String Literals](./Examples/StringLiteral.py)

### Lists

Ordered, mutatable and allows repetition

- List declarations
    - `x = [item1, item2]`
    - `x = list((item1, item2))`


### Tuples

Ordered and allows repetition but immutable

- Tuple declarations
    - `x = ( item1, item2 )`
    - `x = tuple((item1, item2))`
    
### Dictionaries

Unordered, key value pairs and mutable

Dictionary declarations
    - `x = { "key": "value, key2: "value" }`
    - `x = dict(key = "value", key2 = "value")`

### Sets

Unordered, items are not indexed and they don't allow repetition of items

- Sets declarations
    - `x = { "strings", numbers }`
    - `x = set(("strings", numbers))`