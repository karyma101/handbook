# Regex

A regular expression is an object that describe a pattern of characters
  - */pattern/modifiers*

## Patterns
- . - Any character except new line
- \d - Digits (0-9)
- \D - Non-Digits
- \w - Word Character (a-z, A-Z, 0-9, _)
- \W - Not word character
- \s - Whitespaces (space, tab, new line)
- \S - Not whitespaces
- [\b](./anchor.js) - Word boundary
- [\B](./anchor.js) - Not word boundary
- [^](./anchor.js) - Beginning of string
- [$](./anchor.js) - End of string

## Modifiers
- g - performs a global match(find all matches rather than stopping after the first match)
- i - performs case-insensitive matching
- m - performs multiline matching