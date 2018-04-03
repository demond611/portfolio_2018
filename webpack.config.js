var path = require('path');

module.exports = {
	entry: {
		Main: "./app/assets/scripts/Main.js",
		Vendor: "./app/assets/scripts/Vendor.js",
		//Slippry: "./app/assets/scripts/slippry.min.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}