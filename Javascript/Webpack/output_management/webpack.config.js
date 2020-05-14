const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    devtools: 'inline-source-map',
    // Tells webpack-dev-server to serve the file from the dist directory on localhost:8000
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // Remove Dist Folder when rebundling
        new HtmlWebpackPlugin({ // Creates an index.html template
        title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
}