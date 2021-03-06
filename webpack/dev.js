'use strict'

/**
 * Default dev server configuration.
 */
const webpack = require('webpack')
const WebpackBaseConfig = require('./base')

class WebpackDevConfig extends WebpackBaseConfig {
  constructor () {
    super()
    this.config = {
      devtool: 'cheap-module-source-map',
      entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000/',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './client.js'
      ],
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
          React: 'react'
        })
      ]
    }

    this.config.module.rules = this.config.module.rules.concat([
      {
        test: /^.((?!cssmodule).)*\.(sass|scss)$/,
        loaders: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /^.((?!cssmodule).)*\.less$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ])
  }
}

module.exports = WebpackDevConfig
