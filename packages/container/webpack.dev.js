const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: packageJson.name,
      filename: 'remoteEntry.js',
      remotes: {
        feed: 'feed@http://localhost:8081/remoteEntry.js',
      },
      exposes: {},
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);