const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    // This with prevent the hashes from changing due to module ids changing
    // moduleIds: 'hashed'
    runtimeChunk: 'single',
    // 
    // splitChunks: {
    //    cacheGroups: {
    //      vendor: {
    //        test: /[\\/]node_modules[\\/]/,
    //        name: 'vendors',
    //        chunks: 'all',
    //      },
    //    },
     },
  },
};