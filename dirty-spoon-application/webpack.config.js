const webpack = require("webpack");
const path = require("path")


module.exports = {
    // noInfo: false,
    debug: true,
    devtool:  'inline-source-map',
    target: "web",
    entry: path.resolve(__dirname, "./src/frontend/project/app/index.js"),
    output: {
        path: __dirname + "/src/frontend/project/public/js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react']
            }
            },
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }

}