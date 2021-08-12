const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { options } = require("less");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "chen",
      template: "src/assets/test.html",
    })
  ],
};
