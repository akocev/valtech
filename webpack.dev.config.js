const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var webpackConfig = {

entry: {
  main: "./src/main.ts"
},
mode: 'development',
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
          'style-loader', 'css-loader'
      ]
  },
  {
      test:  /\.scss$/,
      use: [
          'style-loader', 'css-loader', 'sass-loader'
      ]
  },
  {
    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
    use: 'file-loader'
  }
  ]
},
}
webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  })
];
module.exports = webpackConfig;
