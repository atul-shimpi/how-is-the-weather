var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var path = require('path');
 
module.exports = {
  context: __dirname,
  entry: {	  
    app: './src/js/app.js',
    vendor: './src/js/vendor.js'
  },	 
  output: {
    path: './public',
    filename: '[name].js'
  },	
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new htmlPlugin({
      template: 'src/index.html'
    })
  ],	
  devServer: {
    port: 3000
  },
  resolve: {
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js']
  }
};