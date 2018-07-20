'use strict'

// Native Node modules
const path = require('path')

// Native Webpack module and plugins
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AutoPrefixer =  require('autoprefixer')

// Paths
const PATHS = {
	SRC: path.resolve(__dirname, 'src'),
	DIST: path.resolve(__dirname, 'dist')
}

// Environment flag(s)
const devMode = process.env.NODE_ENV === 'development'

// Configuration
module.exports = {
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: PATHS.DIST
						}
					}, {
						loader: 'css-loader',
						options: {
							sourceMap: devMode ? false : true,
							minimize: devMode ? false : true
						}
					}, {
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
							plugins: [
                require('autoprefixer'),
              ]
						}
					}, {
						loader: 'sass-loader',
						options: {
              sourceMap: devMode ? false : true,
              outputStyle: devMode ? 'expanded' : 'compressed'
						}
					}
				]
			},
		], // :rules
	}, // :module
	context: PATHS.SRC,
	entry: {
		'wee-grid': [
			'./wee-grid.scss',
		],
	},
	output: {
		path: PATHS.DIST,
		filename: '[name].js',
	},
	plugins: [
		new CleanWebpackPlugin([PATHS.DIST], {}),
		new MiniCssExtractPlugin('[name].css'),
	],
};
