const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './dist/index.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};