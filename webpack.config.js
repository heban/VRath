const path = require("path");
const webpack = require("webpack");
const PATHS = {
    entryFile: path.resolve(__dirname, "./src/assets/js/app.js"),
    bundleName: "bundle.js",
    outputDir: path.resolve(__dirname, "./build/")
};

module.exports = {
    entry: PATHS.entryFile,
    output: {
        filename: PATHS.bundleName,
        path: PATHS.outputDir,
        publicPath: "/build/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
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
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "file-loader?name=images/[name].[ext]"
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
        // new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        publicPath: "/build/"
    }
};