# Webpack

- [Documentation](https://webpack.js.org/guides)

## Getting Started

- `npx webpack --config webpack.config.js`
    - Can use config files with different names, by default it will use webpack.config.js

## [Asset Management](./asset_management/webpack.config.js)

- `npm i -D css-loader style-loader`
    - Dynamically creates `<style>` in your head with all your imported and bundled css.
    - `import './style.css'` to include in your bundle

- `npm i -D file-loader`
    - Loading Images
    - Can also be used for importing font files
- `npm i -D csv-loader xml-loader`
    - Loading Data

## [Output Management](./output_management/webpack.config.js)

- `npm i -D html-webpack-plugin`
    - Automatically generates a new index.html file
    - To customize the html file you must use [html-webpack-template](https://github.com/jaketrent/html-webpack-template)

- `npm i -D clean-webpack-plugin`
    - Keeps the dist folder tidy

## [Development](./development/webpack.config.js)

- Source Maps
    - Allows us to track the origin of the error from the bundled file
- `webpack --watch`
    - npm script that compiles file automatically, only downside is that you have to refresh your browser
- `npm i -D webpack-dev-server`, `webpack-dev-server --open`
    - provides you with a simple web server and the ability to use live reloading

## [Code Splitting](./code_splitting/webpack.config.js)

- Three general approaches for code splitting
    - Entry points, manually split code using entry configuration
    - Prevent duplication, use the `SplitChunkPlugin` to dedupe and split chunks
    - Dynamic Imports, Split code via inline function calls within modules