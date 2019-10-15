const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: join(__dirname, 'index.jsx'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      source: join(__dirname, 'sources'),
      utils: join(__dirname, 'utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test application',
      template: 'index.html'
    })
  ]
};
