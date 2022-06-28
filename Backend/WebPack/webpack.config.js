const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i, //busque incidencias - expresion regular
                loader: "html-loader",
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /main.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /main.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                
            },
            {
                test: /\.jpg/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                  }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Proyecto Webpack App',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]

}