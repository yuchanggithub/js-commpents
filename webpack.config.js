// import { Configuration } from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    mode: 'none',
    // devtool: 'cheap-module-source-map',
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/axios-demo/index.html'),
            filename: 'axios.html',
            chunks: ['axios']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/antd-demo/index.html'),
            filename: 'antd.html',
            chunks: ['antd']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/vue-demo/index.html'),
            filename: 'vue.html',
            chunks: ['vue']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/jstree-demo/index.html'),
            filename: 'jstree.html',
            chunks: ['jstree']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/bootstrap-table-demo/index.html'),
            filename: 'index.html',
            chunks: ['bstable']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/layer-demo/index.html'),
            filename: 'layer.html',
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
    },
    optimization: {
        usedExports: true,
        minimize: false
    }
}

module.exports = config;