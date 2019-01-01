import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react'
					],
					plugins: ['@babel/plugin-proposal-class-properties']
				}
			},
			{
				test: /\.s(a|c)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpg|jpeg|svg)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html'
		})
	]
}