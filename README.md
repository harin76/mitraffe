# Mitrffe

## Setting up webpack

    npm init
    npm i webpack --save-dev
    npm i html-webpack-plugin@2 --save-dev
    npm i webpack-merge --save-dev

## Create the app directory
    mkdir app build
    touch webpack.config.js

### Create build/index.html

    ./
    ..../app
    ..../build
        ....index.html
    ....package.json
    ....webpack.config.js

## Setup webpack dev server

    npm install webpack-dev-server --save-dev

### modify package.json
    ....
    "scripts" {
      "build" : "webpack",
      "start" : "webpack-dev-server"
    }
    ....

### Setup HMR - Hot Module Replacement
    plugins :[
      new webpack.HotModuleReplacementPlugin()
    ]

### less, css, styles
    npm i less less-loader css-loader style-loader

    Configure the less-loader
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
        include: PATHS.app
      },



### Babel less-loader
    npm i babel-loader babel-core --save-dev

    Configure the babel-loader
    {
      test: /\.js$/,
      loaders : ['babel?cacheDirectory'],
      include: PATHS.app
    }

### Setup .babelrc
    npm i babel-preset-es2015 --save-dev


### Add babel plugins to package.json
    "babel-plugin-array-includes": "^2.0.2",
    "babel-plugin-syntax-class-properties": "^6.3.13",
    "babel-plugin-syntax-decorators": "^6.3.13",
    "babel-plugin-syntax-object-rest-spread": "^6.3.13",
    "babel-plugin-transform-class-properties": "^6.4.0",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-plugin-transform-object-assign": "^6.3.13",
    "babel-plugin-transform-object-rest-spread": "^6.3.13",
