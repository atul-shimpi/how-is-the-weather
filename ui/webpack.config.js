var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
  context: __dirname,
  entry: {	  
    app: './src/js/app.js',
    vendor: './src/js/vendor.js'
  },	 
  output: {
    path: './public',
    filename: '/js/[name].js'
  },	
  module: {
    loaders: [ {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
       test: /\.scss/,
       loader: ExtractTextPlugin.extract('css!sass')
    } ],
  },
  plugins: [
    new htmlPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('styles/styles.css', {
      allChunks: true
    })
  ],	
  devServer: {
    port: 3000
  },
  resolve: {
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js', '.css']
  }
};