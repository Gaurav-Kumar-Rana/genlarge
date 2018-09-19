var path = require('path');
var webpack = require('webpack');
module.exports={
    watch:true,
    mode:'production',
    entry:'./src/index.js',
    output:{
        filename:'./bundle.js'
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
    resolve:{
        extensions:[".js"]
    },
};
