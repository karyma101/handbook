# Python

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

# Decimals
from decimal import Decimal
x = 0.10 + 0.35 # Will result in 0.44999999999999996
x = Decimal('0.10') + Decimal('0.35')

from datetime import datetime
x = datetime(1995,3,25)
x.day
x.weekday()
datetime.now()
datetime.now() - date(2018, 1, 1) # Will give you the difference between both dates
x = datetime.strptime('Jan 5, 2018', '%b %d, %Y') # Will convert string into datetime object format
x = datetime.strftime(datetime.now(), '%b %d, %Y') # Will convert datetime object to string
```


