// import { Configuration } from 'webpack';
const path = require('path');

/**
 * @type {Configuration}
 */
const config = {
    mode: 'none',
    entry: {
        'index': './src/index.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: []
}

module.exports = config;