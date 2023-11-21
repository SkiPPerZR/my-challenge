const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если 
    // при запуске вебпака было указано --mode=production
    mode = 'production';
}

const plugins = [
    new HtmlWebpackPlugin({
        template: 'public/index.html', // Данный html будет использован как шаблон
    }),
    new DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || ''),
    }),
]; // Создаем массив плагинов

module.exports = {
    mode,
    plugins,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build', 'client_dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        publicPath: process.env.PUBLIC_URL || '/',
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        proxy: {
            '/uploads': {
                target: 'http://localhost:8000/api',
                logLevel: 'debug'
            },
            '/api': {
                target: 'http://localhost:8000',
                logLevel: 'debug'
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },

        ],

    },
    resolve: {
        roots: [__dirname],
        alias: {
            public: path.resolve(__dirname, 'public'),
        },
        extensions: ['.svg', '.js', '.jsx','.ts', '.tsx'],
    },
}
