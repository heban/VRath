const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: path.resolve(__dirname, "src/assets/js/app.js"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build/js")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: "babel-loader",
					options: {
						presets: [
							["env", {
								"targets": {
									"browsers": ["last 2 versions", "ie >= 11", "Android >= 5"]
								}
							}],
							["react"]
						] 
					}
				}]
			}
		]
	},
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};