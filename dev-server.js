var express = require('express'),
	  app = express(),
      port = process.env.PORT || 3000,
	  webpack = require('webpack'),
	  webpackConfig = require('./webpack.config.js'),
	  compiler = webpack(webpackConfig),
	  devClient = './dev-client',
	  hotMiddleware = require('webpack-hot-middleware')(compiler),
	  devMiddleware = require('webpack-dev-middleware')(compiler,{
	  	publicPath : webpackConfig.output.publicPath,
	  	stats : {
	  		colors : true,
	  		chunks : false
	  	}
	  })
	  
Object.keys(webpackConfig.entry).forEach(function(name,i){
	var extras = [devClient]
	webpackConfig.entry[name] = extras.concat(webpackConfig.entry[name])
})
compiler.plugin('compilation',function(compilation){
	compilation.plugin('html-webpack-plugin-after-emit',function(data,cb){//派发reload事件給中間件
		hotMiddleware.publish({action:'reload'})
		cb()
	})
})
app.use(devMiddleware)//注册中间件
app.use(hotMiddleware)
app.use(express.static(__dirname+'/'));
app.listen(port,function(err){
	if(err){
		throw err;
	}
	console.log('listening at http://localhost:'+ port + '\n')
})