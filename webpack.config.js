'use strict';
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

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
    ],
  },
  plugins: [
    new HtmlPlugin({
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
