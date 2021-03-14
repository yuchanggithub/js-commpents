// import { Configuration } from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Webpack = require('webpack');

/**
 * @type {Configuration}
 */
const config = {
    entry: {
        axios: path.resolve(__dirname, './src/axios-demo/index.ts'),
        antd: path.resolve(__dirname, './src/antd-demo/index.tsx'),
        vue: path.resolve(__dirname, './src/vue-demo/index.ts'),
        jstree: path.resolve(__dirname, './src/jstree-demo/index.ts'),
        bstable: path.resolve(__dirname, './src/bootstrap-table-demo/index.ts'),
        layer: path.resolve(__dirname, './src/layer-demo/index.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                use: ['file-loader']
            }, 
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/axios-demo/index.html'),
            filename: 'index2.html',
            chunks: ['axios']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/antd-demo/index.html'),
            filename: 'index3.html',
            chunks: ['antd']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/vue-demo/index.html'),
            filename: 'index4.html',
            chunks: ['vue']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/jstree-demo/index.html'),
            filename: 'index1.html',
            chunks: ['jstree']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/bootstrap-table-demo/index.html'),
            filename: 'index5.html',
            chunks: ['bstable']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/layer-demo/index.html'),
            filename: 'index.html',
            chunks: ['layer']
        }),
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 9000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/api': '' }
            }
        }
    }
}

module.exports = config;