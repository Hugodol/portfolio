const path = require('path');
const webpack = require('webpack');

const devtool = process.env.DEV === 'development' ? 'inline-source-map' : 'cheap-module-source-map';

const webpackConfig = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: devtool,
};

webpackConfig.module.loaders.push({
  test: /\.js[x]?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ['es2015', 'react'] },
});

webpackConfig.module.loaders.push({
  test: /\.(scss|css)$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader'],
});

webpackConfig.module.loaders.push({
  test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
  loaders: ['url-loader'],
});

webpackConfig.module.loaders.push({
  test: /\.(jpe?g|png|gif|svg|ico|mp3|m4a)$/i,
  loaders: ['file-loader'],
});

module.exports = webpackConfig;
