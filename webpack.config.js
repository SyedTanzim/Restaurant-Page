import path from 'node:path';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(import.meta.dirname, 'dist'),
        clean: true,
    },

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ['./src/template.html'],
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
};