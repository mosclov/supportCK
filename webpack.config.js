// require.extensions['.css'] = () => {
//   return;
// };
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: '#cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  target: "web",
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
       Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
       fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
       React: 'react',
     }),
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebpackPlugin({
       template: path.join(__dirname, '/public/index.html'),
       hot: true,
       inject: 'body',
       filename: 'index.html'
     }),
  ],
  module: {
    loaders: [
      {include: /\.json$/, loaders: ["json-loader"]},
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /flexboxgrid/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'img',
      },
    ],
  },
};
