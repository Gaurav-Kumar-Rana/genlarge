var path = require('path');
var webpack = require('webpack');
module.exports={
    watch:true,
    //mode:'production',
    mode:'development',//'mode:' tells Webpack this configuration will be for either development or production. “Development Mode [is] optimized for speed and developer experience… Production defaults will give you a set of defaults useful for deploying your application.
    entry:'./src/index.js',//'entry': — Specifies the entry point of your application; this is where your React app lives and where the bundling process will begin.
    output:{
        filename:'./dist/bundle.js'
    },
    devtool:'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8999,
        historyApiFallback: true,
    },
    resolve:{
        extensions:[".js"]
    },
};
