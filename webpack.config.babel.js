import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: {
        index: [
            `${__dirname}/src/frontend/app/main.js`,
            `${__dirname}/src/frontend/app/main.scss`,
        ],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                plugins: [
                    'transform-runtime',
                    'add-module-exports',
                ],
                presets: [
                    'es2015',
                    'react',
                ],
            },
        }, {
            loader: ExtractTextPlugin.extract('css!sass?includePaths[]=./node_modules/compass-mixins/lib/'),
            test: /\.s?css$/,
        }],
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/build`,
        publicPath: '/',
    },
    plugins: [
        // @TODO: Add webpack.DefinePlugin to define config
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${__dirname}/src/frontend/index.html`,
            hash: true,
        }),
        new ExtractTextPlugin('[name].css', { allChunks: false }),
    ],
    resolve: {
        root: path.resolve(`${__dirname}`),
    },
};
