var path = require('path')

var API  = 'http://localhost:8082'
var PORT = 8081
var TARGET = path.resolve(__dirname, 'target/META-INF/resources')

var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src/main'),
  entry: [
    './index.js',
  ],
  output: {
    path: TARGET,
    filename: 'frontend.js'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  watch: true,
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          'stage-0',
          'es2015',
          'react'
        ],
        plugins: [
          'transform-class-properties',
          'transform-decorators-legacy',
        ],
      }
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader')
    },{
      test: /\.(svg|jpg|png|ttf|woff|eot|woff2)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
     }),
     new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    hot: true,
    inline: true,
    port: PORT,
    contentBase: [
      path.resolve(__dirname, 'src/static'),
      TARGET
    ],
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: API
      }
    },
    stats: {
      color: true
    }
  }
}
