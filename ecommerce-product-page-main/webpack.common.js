const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");

dotenv.config()

const MODE = process.env.MODE || "development";

module.exports = {
  entry: "./src/index.js",
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "@images": path.resolve(__dirname, 'src', 'images'),
      "@components": path.resolve(__dirname, 'src', 'components'),
      "@constants": path.resolve(__dirname, 'src', 'constants'),
      '@contexts': path.resolve(__dirname, 'src', 'contexts')
    }
  },
  plugins: [
	new HtmlWebpackPlugin({
	  template: "public/index.html"
	})
  ]
};
