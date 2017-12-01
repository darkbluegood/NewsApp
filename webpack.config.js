var webpack = require("webpack");

module.exports = {

	entry : {
		index:__dirname+"/src/index.js"
	},
	output : {
		path:__dirname+"/build",
		filename: 'bundle.js'
	},
	module : {
		loaders : [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
	　　　　　　test: /\.(png|jpg|gif)$/,
	　　　　　　loader: 'url-loader?limit=1024&name=images/[hash:8].[name].[ext]'
	　　　　}
		]
	},
	resolve : {
		alias : {
			'vue': 'vue/dist/vue.js'
		}
	}
}