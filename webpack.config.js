const path  = require('path')
const html  = require('html-webpack-plugin')
const clean = require('clean-webpack-plugin')

module.exports = {

    mode        : "development",
    entry       : "./src/app.js",
    devtool     : "cheap-eval-source-map",
    devServer   : {
        contentBase : path.resolve(__dirname, 'dist')
    },
    plugins     : [
        new clean(),
        new html({
            template : path.resolve(__dirname, 'public/index.html')
        })
    ],
    output      : {
        filename : "app.js",
            path : path.resolve(__dirname, "dist")
    },
    module      : {
        rules : [
            {
                   test : /\.js$/,
                exclude : /node_modules/,
                 loader : "babel-loader"
            }
        ]
    }

}