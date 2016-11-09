var API  = 'localhost:8080'
var PORT = 8081
var TARGET = __dirname + '/target/META-INF/resources'

var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/src/main',
  entry: './index.js',
  output: {
    path: TARGET,
    filename: 'frontend.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          'es2015',
          'react'
        ]
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
      __dirname + '/src/static',
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
