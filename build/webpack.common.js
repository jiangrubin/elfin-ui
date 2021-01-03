const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('./webpack.config')

module.exports = {
  mode: 'production',
  entry: {
    app: './packages/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'elfin-ui.common.js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  externals: config.externals,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}