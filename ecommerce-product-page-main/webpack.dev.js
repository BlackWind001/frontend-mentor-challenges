const path = require('path');
const webpack = require("webpack");
const webpackCommon = require('./webpack.common');
const MODE = 'development';

const devConfig = {
    mode: MODE,
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        port: 3000,
        publicPath: "http://localhost:3000/",
        hotOnly: true
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/",
      filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ...webpackCommon.plugins
    ]
};

module.exports = {
    ...webpackCommon,
    ...devConfig
}

