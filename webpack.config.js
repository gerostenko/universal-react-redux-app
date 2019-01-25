var path = require('path');
var nodeExternals = require('webpack-node-externals');

var browserConfig = {
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    parser: 'babel-eslint',
                    failOnError: true,
                    failOnWarning: true
                }
            }
        ]
    },
    stats: 'errors-only',
};

var serverConfig = {
    entry: './src/server/index.js',
    node: {
        __dirname: false
    },
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    parser: 'babel-eslint',
                    failOnError: true,
                    failOnWarning: true
                }
            }
        ]
    },
    stats: 'errors-only',
};

module.exports = [browserConfig, serverConfig];