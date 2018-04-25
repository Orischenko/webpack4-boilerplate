let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js'
    },
    devServer: {
        overlay: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node-modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = (env, options) => {
    const prod = options.mode === 'production';
    conf.devtool = prod ? 'source-map' : 'eval-source-map';
    return conf;
};