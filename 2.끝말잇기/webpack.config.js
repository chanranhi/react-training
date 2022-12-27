const path = require("path");
const webpack = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'config name',
  mode: 'development',
  devtool: 'eval', // prod일때 hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'] // entry 파일확장자 생략
  },

  // 입력
  entry: {
    app: ['./client']
  },

  // entry의 파일을 읽어서 모듈화 한 후
  // output으로 출력
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              // https://github.com/browserslist/browserslist#queries
              browsers: ['> 5% in KR', 'last 2 chrome versions'],
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          'react-refresh/babel'
        ],
      }
    }]
  },

  plugins: [
    //new webpack.LoaderOptionsPlugin({debug: true})
    new RefreshWebpackPlugin()
  ],

  // 출력
  output: {
    path: path.join(__dirname, 'dist'), // 실제 경로
    filename: 'app.js',
    publicPath: '/dist/', // 가상 경로
  },

  devServer: {
    devMiddleware: { publicPath: '/dist/' }, // 생성하는 경로
    static: { directory: path.resolve(__dirname) }, // 실제 존재 파일
    hot: true
  }
}
