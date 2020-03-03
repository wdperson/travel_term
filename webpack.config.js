const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    './src/index'
  ],
  mode: 'development',
  target: 'web',
  output: {
    filename: 'index.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
      { test: /\.jsx$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file?name=assets/[name].[ext]'] },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
}
