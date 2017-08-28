'use strict';

// Node native modules
const path = require('path');

// Access native Webpack plugins
const webpack = require('webpack');

// Webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Paths
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								minimize: true,
								importLoaders: 2,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									require('css-mqpacker'),
								],
								style: 'expanded',
								sourceMap: false,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: false,
							}
						},
					],
				}),
			},
		], // :rules
	},
	context: srcPath,
	entry: {
		weegrid: [
			'./weegrid.scss',
		],
	},
	output: {
		path: distPath,
		filename: 'weegrid.js',
	},
	plugins: [
		new CleanWebpackPlugin([distPath], {}),
		new ExtractTextPlugin('[name].css'),
	],
};
