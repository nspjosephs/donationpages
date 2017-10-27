const webpack = require('webpack');

module.exports = {
  entry:'./main/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders : [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets:['es2017','react','stage-3']
        }
      }
    ]
  }
}
