'use strict';
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const PreloadPlugin = require('preload-webpack-plugin');

const isImageRegExp = /\.(png|jpg|svg)$/;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/typescript',
                '@babel/react',
                [
                  '@babel/env',
                  {
                    modules: false,
                  },
                ],
              ],
              plugins: [
                'styled-jsx/babel',
              ],
            },
          },
          // 'ts-loader',
        ],
      },
      {
        test: isImageRegExp,
        use: [
          {
            loader: 'file-loader',
            options: {
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlPlugin({
    }),
    new PreloadPlugin({
      rel: 'preload',
      include: 'allAssets',
      as(entry) {
        if (isImageRegExp.test(entry)) {
          return 'image';
        }
        return 'script';
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
