const path = require('path');

const webpackConfig = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react'] }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

webpackConfig.module.loaders.push({
  test: /\.(scss|css)$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader'],
});

webpackConfig.module.loaders.push({
  test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
  loaders: ['url-loader'],
});

webpackConfig.module.loaders.push({
  test: /\.(jpe?g|png|gif|svg|ico)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {query: {name: 'assets/images/[name].[ext]'}}
    }
  ]
});

module.exports = webpackConfig;
