const webpack = require("webpack");
const path = require("path")


module.exports = {
    noInfo: false,
    entry: [
        path.join(__dirname, "./src/frontend/project/app/index.js")
    ],
    output: {
        path: path.join(__dirname, "./src/frontend/project/app/public/js"),
        fileName: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, include: '', use: ["babel-loader"]}
        ]
    }
}