// import { Configuration } from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * @type {Configuration}
 */
const config = {
    mode: 'none',
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 9000,
        open: true
    }
}

module.exports = config;