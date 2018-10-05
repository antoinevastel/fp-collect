const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = process.env.WEBPACK_ENV;


const libraryName = 'fpCollect';
const plugins = [];
let outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = `${libraryName}.min.js`;
} else {
    outputFile = `${libraryName}.js`;
}

const config = {
    entry: `${__dirname}/src/${libraryName}.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: outputFile,
        library: libraryName
    },
    module: {
        loaders: [
            {
                loader:'babel-loader',
                test: /\.js$/,
                exclude:  /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: plugins
};

module.exports = config;