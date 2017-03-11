import webpack from 'webpack';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV;

const plugins = [];

if (NODE_ENV === 'production') {
  plugins.push(new LodashModuleReplacementPlugin);
}

const config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: NODE_ENV === 'production' ? ['lodash'] : [],
          presets: ['es2015'],
        },
      }
    ],
  },
  plugins,
};

module.exports = config;
