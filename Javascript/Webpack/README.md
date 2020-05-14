# Webpack

- [Documentation](https://webpack.js.org/guides)

## Getting Started

- `npx webpack --config webpack.config.js`
    - Can use config files with different names, by default it will use webpack.config.js

## [Asset Management](./asset_management)

- `npm i -D css-loader style-loader`
    - Dynamically creates `<style>` in your head with all your imported and bundled css.
    - `import './style.css'` to include in your bundle

- `npm i -D file-loader`
    - Loading Images
    - Can also be used for importing font files
- `npm i -D csv-loader xml-loader`
    - Loading Data

## [Output Management](./output_management)

- `npm i -D html-webpack-plugin`
    - Automatically generates a new index.html file
    - To customize the html file you must use [html-webpack-template](https://github.com/jaketrent/html-webpack-template)

- `npm i -D clean-webpack-plugin`
    - Keeps the dist folder tidy

## [Development](./development)

- Source Maps
    - Allows us to track the origin of the error from the bundled file
- `webpack --watch`
    - npm script that compiles file automatically, only downside is that you have to refresh your browser
- `npm i -D webpack-dev-server`, `webpack-dev-server --open`
    - provides you with a simple web server and the ability to use live reloading

## [Code Splitting](./code_splitting)

- Three general approaches for code splitting
    - Entry points, manually split code using entry configuration
        - If there are any duplicated modules between entry chunks they will be included in both bundles.
    - Prevent duplication, use the `SplitChunkPlugin` to dedupe and split chunks
    - Dynamic Imports, Split code via inline function calls within modules

## Caching

- It is a good practice to extract third party libraries such as lodash and react to separate vendor chunk as they are less likely to change than our local source code.
    - Done by using `cacheGroups`

## Build Performance

- Using the include field to only apply the loader modules that actually need to be transformed by it
- Each additional loader/plugin has a bootup time. Try to use as few tools as possible
- The following steps can increase resolving speed:
    - Minimize the number of items in resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles, as they increase the number of filesystem calls.
    - Set resolve.symlinks: false if you don't use symlinks (e.g. npm link or yarn link).
    - Set resolve.cacheWithContext: false if you use custom resolving plugins, that are not context specific.
- `Dllplugin` to move code that is changed less often into a separate compilation. This will improve the application's compilation speed but increases the complexity of the build process
- Use fewer/smaller libraries
- Use SplitChunkPlugins in Multi-Page Applications
- Use the SplitChunksPlugin in async mode in Multi-Page Applications.
- Remove unused code.
- Only compile the part of the code you are currently developing on.
- Enable persistent caching with the cache-loader. Clear cache directory on "postinstall" in package.json.
- 