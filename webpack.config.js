module.exports={
    watch:true,
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js'
    },
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
    }
}
