const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry : PATHS.app,
  resolve: {
    extensions: ['', '.js']
  },
  output : {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.less$/,
        loaders : ['style', 'css', 'less'],
        include : PATHS.app
      },
      {
        test: /\.js$/,
        loaders : ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  },
  plugins :[
    new HtmlWebpackPlugin
      ({
        hash: true,
        title: 'Awesome Mithril',
        filename: 'index.html',
        template: 'index-template.erb',
        inject: 'body'
      })
    ]
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
          contentBase: PATHS.build,
          historyApiFallback: true,
          hot: true,
          inline: true,
          progress: true,
          stats: 'errors-only',
          host: process.env.HOST,
          port: process.env.PORT
        },
        plugins :[
          new webpack.HotModuleReplacementPlugin()
        ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
