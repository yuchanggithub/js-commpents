// import { Configuration } from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
            //     use: [
            //         {
            //             loader: "url-loader",
            //             options: {}
            //         }
            //     ]
            // },
            {
                test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 9000,
        open: true
    }
}

module.exports = config;