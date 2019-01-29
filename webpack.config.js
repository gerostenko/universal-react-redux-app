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
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
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
            },
            {
                test: /\.scss$/,
                use: [
                        {
                            loader: 'isomorphic-style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                sourceMap: true
                        }
                    },
                        {           
                            loader: 'sass-loader'
                    }
                ]
        }    
        ]
    },
    stats: 'errors-only',
};

module.exports = [browserConfig, serverConfig];