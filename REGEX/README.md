# Regex

A regular expression is an object that describe a pattern of characters
  - */pattern/modifiers*

## Patterns
- . - Any character except new line
- \d - Digits (0-9)
- \D - Non-Digits
- \w - Word Character (a-z, A-Z, 0-9, _)
- \W - Not Word Character
- \s - Whitespaces (space, tab, new line)
- \S - Not Whitespaces
- [\b](./anchor.js) - Word Boundary
- [\B](./anchor.js) - Not Word Boundary
- [^](./anchor.js) - Beginning of String
- [$](./anchor.js) - End of String
- [] - Matches Characters in Brackets
- [^] - Matches Characters not in Brackets
- | - Either Or
- () - Group

### Quantifiers
- \* - 0 or more
- \+ - 1 or more
- ? - 0 or one
- {3} - Exact Number
- {3,4} - Range of Numbers (Minimum, Maximum)

## Modifiers
- g - performs a global match(find all matches rather than stopping after the first match)
- i - performs case-insensitive matching
- m - performs multiline matching

## Examples

- /[a-zA-Z0-9]/ - ranges can be set inside character sets
- /[^a-z]/ - will match anything that is not a lowercase value from a to z