var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
module.exports = {
	// entry : {
	// 	app: ['webpack-hot-middleware/client?noInfo=true&reload=true',path.resolve(__dirname, "./app/app.js")]
	// },
	entry : {
		app: path.resolve(__dirname, "./app/app.js")
	},
	output : {
		path : path.resolve(__dirname,"./output/static"),
		publicPath : '/',
		filename : "[name].js"
	},
	resolve : {
		root : __dirname,
		extensions : ['','.js','.vue']
	},
	module : {
		loaders : [
			{
				test : /\.vue$/,
				loader:'vue'
			},
			{
				test : /\.js$/,
				loader: 'babel',
				query : {
					presets : ['es2015']
				},
				include : '',
				exclude : /node_modules/
			}
		]
	},
	plugins : [
		 // new webpack.optimize.OccurenceOrderPlugin(),
	    // Webpack 2.0 fixed this mispelling 
	    new webpack.optimize.OccurrenceOrderPlugin(), 
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename : 'index.html',
			template : path.resolve(__dirname,'./app/views/index.html'),
			inject:true//自動寫入依賴，false：不写入依赖，可用于构建多页面
		})
	]
}