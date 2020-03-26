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

# Declaring Functions
def get_boundaries(target, margin="20"):
  # Code must be indented
  low_limit = target - margin
  high_limit = margin + target
  return low_limit, high_limit # Returning multiple Values

low, high = get_boundaries(100, 20) # Assigning multiple values to variables

```