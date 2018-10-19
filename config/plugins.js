// Webpack modules and plugins
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Configuration files
const paths = require('./paths')

module.exports = [
  new CleanWebpackPlugin([paths.dist], {}),
  new MiniCssExtractPlugin('[name].css')
]
