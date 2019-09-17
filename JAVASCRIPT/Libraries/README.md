# Libraries

- npm packages reduces duplication of work and avoid bugs
- A package.json file contains information about the current JavaScript project. Some of this information includes:
  - Metadata — This includes a project title, description, authors, and more.
  - A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
  - Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.

- "build": "babel src -d lib"
  - babel — The Babel command call responsible for transpiling code.
  - src — Instructs Babel to transpile all JavaScript code inside the src directory.
  - -d — Instructs Babel to write the transpiled code to a directory.
  - lib — Babel writes the transpiled code to a directory called lib.

## 
- **babel-core**: Transforms your ES6 code into ES5
- **babel-loader**: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel
- **babel-preset-env**: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
- **babel-preset-react**: Babel preset for all React plugins, for example turning JSX into functions