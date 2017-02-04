var webpack = require('webpack');
var path = require('path');
var PROD = process.env.NODE_ENV == 'production';

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');
var CSS_DIR = path.resolve(__dirname, 'css');

const plugins = [];

if(PROD){
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV:JSON.stringify('production')
    }
  }))
}

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
      test : /\.jsx?/,
      include : APP_DIR,
      loader : 'babel'
      },
      {
        test: /\.s?css$/,
        loaders: ["style", "css", "sass"],
        include: CSS_DIR
      }      
    ]
  },
  plugins: plugins,
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      React: path.resolve(__dirname, './node_modules/react')
    },
    fallback: path.resolve(__dirname, './node_modules')
  },
  resolveLoader: {
      fallback: path.resolve(__dirname, './node_modules')
  }
};

module.exports = config;
