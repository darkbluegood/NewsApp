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
		rules : [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
	　　　　　　test: /\.(png|jpg|gif)$/,
				use : {
					loader :"url-loader",
					options : {
						limit : 1024,
						name : "images/[hash:8].[name].[ext]"
					}
				}
	　　　　},
			{
				test : /\.js$/,
				use : {
					loader : "babel-loader",
					options : {
						presets : ["es2015"]
					}
				}
			}
		]
	},
	resolve : {
		alias : {
			'vue': 'vue/dist/vue.js'
		}
	}
}