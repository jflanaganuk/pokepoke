const path = require('path');

module.exports = {
    entry: './src/app.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: [/\.(ts|tsx)$/],
                loader: 'babel-loader',
                options: {
                    configFile: './babel.config.json',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]-[local]___[hash:base64:5]',
                            }
                        },
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: (_url, resourcePath, context) => {
                        return path.relative(context, resourcePath);
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: '@svgr/webpack'
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            },
        ]
    },
    plugins: [
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    mode: 'development',
}