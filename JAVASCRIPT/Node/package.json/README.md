# [Package.json](https://docs.npmjs.com/files/package.json)

- If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. If you don’t plan to publish your package, the name and version fields are optional.

## Name
  - The name must be less than or equal to 214 characters.
  - Can’t start with a dot or an underscore
  - New packages must not have uppercase letters in the name
  - Can’t contain any non-URL-safe characters.
  - Don’t use the same name as a core Node module

## Version
  - The name and version together form an identifier that is assumed to be completely unique.
  - Changes to the package should come along with changes to the version.

## Description
  - A string
  - This helps people discover your package, as it’s listed in npm search.

## Keyword
  - Array of strings
  - This helps people discover your package as it’s listed in npm search.

## Homepage
  - The url to the project homepage.

## Bugs
  - The url to your project’s issue tracker and / or the email address to which issues should be reported.
  - { "url" : "https://github.com/owner/project/issues", "email" : "project@hostname.com" }
  - You can specify either one or both values.

## [License](https://spdx.org/licenses/)
  - specify a license for your package so that people know how they are permitted to use it, and any restrictions you’re placing on it.