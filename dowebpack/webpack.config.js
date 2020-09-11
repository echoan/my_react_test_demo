const path = require('path');
//引入生成html的模块
const HtmlCreate = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离css和js
const { loader } = require('mini-css-extract-plugin');
//导出一个对象，里面包含设置的打包设置
module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve('./dist'), //绝对路径
		filename: 'main.js'
	},
	//配置其他文件的打包规则
	module: {
		rules: [
			{ test: /\.js|.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.(jpg|jpeg|png|svg|gif|woff|ttf|eot)$/,
				use: [
					// {
					// 	loader: 'file-loader',
					// 	options: {
					// 		name: '[hash:8].[name].[ext]',
					// 		outputPath: 'images/'
					// 	}
					// },
					{
						loader: 'url-loader',
						options: {
							limit: 4000,
							name: '[hash:8].[name].[ext]',
							outputPath: 'static/'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
								//quality 1-100 值越大质量越好体积越大
							},
							optipng: {
								enabled: false
							},
							pngquant: {
								quality: '65-90',
								speed: 4
								// speed 1-11 值越大质量越好体积越大
							},
							gifsicle: {
								interlaced: false,
								optimizationLevel: 2
								//三个值1,2,3。3就是最极致的压缩
							},
							//ios不支持
							webp: {
								quality: 75
							}
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true //图片最小化
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader, //分离css和js
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			},
			{
				test: /\.css$/,
				loader: [ 'style-loader', 'css-loader' ]
			} //处理less文件
		]
	},
	plugins: [
		new HtmlCreate({
			template: './src/index.html',
			filename: 'index.html',
			minify: {
				removeAttributeQuotes: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		})
	]
};
