const path = require("path");
const webpack = require("webpack");
const PATHS = {
    entryFile: path.resolve(__dirname, "./src/assets/js/app.js"),
    bundleName: "bundle.js",
    outputDir: path.resolve(__dirname, "./build/"),
    publicPath: "./build/"
};

let plugins = [];
if (process.env.NODE_ENV === "production") {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: PATHS.entryFile,
    output: {
        filename: PATHS.bundleName,
        path: PATHS.outputDir,
        publicPath: PATHS.publicPath
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
                                    "modules": false,
                                    "targets": {
                                        "browsers": ["last 2 versions", "ie >= 11", "Android >= 5"]
                                    }
                                }],
                                ["react"]
                            ],
                            plugins: ["transform-object-rest-spread"]
                        }
                    },
                    {
                        loader: "eslint-loader",
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|obj|mtl|dae)$/i,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "file-loader?name=images/[name].[ext]"
                    }
                ]
            },
            {
                test: /\.mp3$/i,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "file-loader?name=sounds/[name].[ext]"
                    }
                ]
            },
            {
                test: /\.scss$/i,
                exclude: [/node_modules/],
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: plugins,
    devServer: {
        publicPath: PATHS.publicPath
    }
};