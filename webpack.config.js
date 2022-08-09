const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devServer: {
      static: './dist',
      port: 8800
    },
    // optimization: {
    //   runtimeChunk: 'single',
    // }, 
};

// plugins: [
//   new HtmlWebpackPlugin({
//   title: 'Output Management',
//   template: './src/index.html',
//   }),
// ]