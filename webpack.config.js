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
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [
                    {
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
                    },
                    {
                        loader: "eslint-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        // Only for production
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        publicPath: "/build/js/"
    }
};