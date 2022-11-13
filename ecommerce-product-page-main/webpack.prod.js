const path = require('path');
const webpackCommon = require('./webpack.common');
const MODE = 'production';

const prodConfig = {
    mode: MODE, 
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "bundle.js"
    }
};

module.exports = {
    ...webpackCommon,
    ...prodConfig
}
