module.exports = {
    //...
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'), // Include Field for loaders
          loader: 'babel-loader',
        },
      ],
    },
  };