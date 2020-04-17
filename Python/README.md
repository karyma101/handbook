# Python

Interpreted language, saves time because no compilation or linking necessary
Dynamic typed programming language
More error checking

## Features

- Comments
  - `#This is a comment`{.python}

- Operators
  - `+`
  - `-`
  - `*`
  - `/`
  - `**`

- Strings
  - `print('Don\'t')`
    - `\` Backslash is used to escape characters.
  - `print(r'C:\some\name')`
    - The r infront of quotations is an raw String which ignores backslashes.
  - [String Literals](./StringLiteral.py)





```python
# Semi colon is optional

# Can be single or double quotes
print("") 
print('')

x = """
This
is 
a 
multiline
string
"""

y = '''
This
is
also 
a 
multiline
string
'''

str(x) # Converts to string
stringVariable * 10 # String will be repeated 10 times

# String Concatenation
print(string1 + string2)

# Declaring Variables
x = ""
y = 1

print(25 * 2) # 50
print(10 / 5) # 2.0 , python converts all ints to floats before performing division
print(2 ** 4) # 16, exponents

#Booleans, must be in capitals
x = True
y = False

# Declaring Functions
def get_boundaries(target, margin="20"):
  # Code must be indented
  low_limit = target - margin
  high_limit = margin + target
  return low_limit, high_limit # Returning multiple Values

low, high = get_boundaries(100, 20) # Assigning multiple values to variables

# Operators
==
!=
>
<
>=
<=
and
or
not

# Conditionals
if:
  return
elif:
  return
else:
  return

try:
  # Block of code
except ValueError: # Type of Error
  # Block of code

# Lists
x = ["one", 2, [3, 4]]

firstName = ['Kary', 'John']
lastName = ['Ma', 'Smith']
# Zip ties multiple lists together and creates an object
fullName = zip(firstName, lastName)
# List function will convert object back into list
list(fullName) 

x = []
x.append(1) # [1]
# + can be used to concate another list to a list
y = x + [2,3,4] # [1,2,3,4]

# Range creates an object from ranges 0 - 8 and skips the next 2
x = range(2, 9, 2)
y = list(x) # [2, 4, 6, 8]

# Will give the length of the list
len(x)


x[-1] # Gives last element of an list
x[start:end] # Slice the list from start to end, returns a list
x[:3] # Takes first 3 elements of an list, returns a list
x[-3:] # Takes last 3 elements of an list, returns a list
x.count('a') # Search array for value and tally 
x.sort() # Does not return anything but sorts original list, will sort from low to high from first element in each sublist
sorted(x) # Generate new array without modifying original list

# Tuple
x = ('Kary', 25) # Immutable structured list
x[1] # Will return 25
name, age = x # Unpacking a tuple, name will return first value, age will return second value
X = (1,) # Trailing Comma, One element tuple

# Loops
# Loops that create new lists, called list comprehensions
for <temporary variable> in <list variable>:
    <action>

# Loop through 3 times
for i in range(3):
  <action>
  continue # Skips the current value
  break # Can break out of the loop

# List Comprehensions
# Ex 1
heights = [161, 164, 156, 144, 158, 170, 163, 163, 157]

can_ride_coaster = [height for height in heights if height > 161]

print(can_ride_coaster)

# Ex 2
celsius = [0, 10, 15, 32, -5, 27, 3]

fahrenheit = [temp * 9 / 5 + 32 for temp in celsius ]

print(fahrenheit)

# String
# String are immutable when they are created
string_name[first_index:last_index] # Slicing the string
string[-1] # Last character in a string
def contains(big_string, little_string):
  return little_string in big_string # Boolean expression that returns if little_string is found in big_string
string.lower() # Returns all lowercase
string.upper() # Returns all uppercase
string.title() # Returns first letter in each word capitalized
string.split() # Delimiter split string into an array by spaces on default
.split('\n') # Split string by line
' '.join(string) # Join array into string with a space
string.strip() # By default strips all whitespace on each side of string
string.replace(character_being_replaced, new_character)
string.find(x) # returns the first index found 

def poem_title_card(poet, title): # String interpolation
  return 'The poem "{string}" is written by {poet}.'.format(title=title, poet=poet)

# Module
from module_name import object_name
current_time = datetime.now()
print(current_time)

# Pipenv
python -m pip install pipenv
pipenv --three # initialize virtual environment with python 3
pipenv install <package name>==<version number>

# Dictionaries, unordered set of key:value pairs
x = { key: value, key: value }
x[key] = value # Adding key and value to dict, can be used to update an existing key value pair
x.update({key: value, key: value}) # Adding Multiple values to dict
students = {key:value for key, value in zip(names, heights)} # Combining two lists to create a dict object

if key_in_object in object:
x.get(key, default value) # Gets a key from dict if nothing is found you can specify a default value
x.pop() # Removes key from dict
list(dictObject) # Returns a list of every key in dict
x.keys() # Same as above
x.values() # Returns a list of every value in dict

pct_women_in_occupation = {"CEO": 28, "Engineering Manager": 9, "Pharmacist": 58, "Physician": 40, "Lawyer": 37, "Aerospace Engineer": 9}

for key, value in pct_women_in_occupation.items(): 
  print('Women make up ' + str(value) + ' percent of ' + key + 's.')


# Types
type(x) # checks the type of variable

# Class
# A class is a template for a data type. It describes the kinds of information that class will hold and how a programmer will interact with that data.

x = className() # Initalizing a class

__x__ #  Dunder Methods

class x:
  y = "Hello"
  def __init__(self): # Constructor

  def __repr__(self): # String representation of the object

  def hello(self, z):
    pass # Will prevent errors if empty class
    print(self.y + z)

x.hello("World")

hasattr(x,y) # returns true if object x has attribute y
getattr()
dir(x) # Shows all attributes of an object
issubclass(x,y) # returns true if x is a subclass of y
```


