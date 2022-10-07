const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var webpackConfig = {

entry: {
  main: "./src/main.ts"
},
mode: 'production',
resolve: {
  extensions: ['.ts', '.js']
},
output: {
  filename: 'bundle.js',
  path: path.join(__dirname, 'src', 'dist')
},
module: {
  rules: [
    {
      test: /\.ts$/,
      use: ['ts-loader', 'angular2-template-loader']
    },
    {
      test: /\.(png|jpg)$/,
      type: 'asset/resource'
  },
    {
      test: /\.html$/,
      use: 'html-loader'
    },
    {
      test:  /\.css$/,
      use: [
          MiniCssExtractPlugin.loader, 'css-loader'
      ]
  },
  {
      test:  /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
      ]
  },
  ]
},
}
webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'style.css'
})
];
module.exports = webpackConfig;
