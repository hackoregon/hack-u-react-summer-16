// Webpack config for creating the production bundle.
/* eslint-disable no-var */
require('babel-polyfill');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
// var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var strip = require('strip-loader');

var relativeAssetsPath = '../static/dist';
var assetsPath = path.join(__dirname, relativeAssetsPath);

var config = {
  bail: true,
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    'client': [
      './src/client.js'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [strip.loader('debug'), 'babel'] },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version') },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10240' },
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },

  externals: [],
  plugins: [
    // new CleanPlugin([relativeAssetsPath]),

    // css files from the extract-text-plugin loader
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   '__ENV__': JSON.stringify(process.env.NODE_ENV),
    //   '__TARGET__': JSON.stringify(process.env.TARGET),
    //   'process.env.TARGET': JSON.stringify(process.env.TARGET),
    //   __CLIENT__: true,
    //   __SERVER__: false,
    //   __DEVELOPMENT__: false,
    //   __DEVTOOLS__: false,
    //   __PG_API__: JSON.stringify('http://pg-dev.us-west-2.elasticbeanstalk.com/api'),
    // }),

    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // set global vars
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // TODO: Re-enable when dev builds are working.
    //
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    }),
  ]
};

module.exports = config;
