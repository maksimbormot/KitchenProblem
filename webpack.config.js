const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")
let plugins = [];

plugins = [ 
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development')
      }
    }),
    new Dotenv({
        path: __dirname + '/.env'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new webpack.ContextReplacementPlugin(
        /moment[\/\\]locale$/,
        /en-gb|ru/
    ),
    new webpack.NoEmitOnErrorsPlugin()
  ];

if (process.env.NODE_ENV === 'production'){
    plugins.push(new UglifyJSPlugin({ sourceMap: true, parallel: true }));
}
if (process.env.NODE_ENV === 'optimization'){
    plugins.push(new BundleAnalyzerPlugin());
}
module.exports = {
  entry: ['babel-polyfill',__dirname + "/frontend/index.js"],
  plugins,
  output:{
      path: __dirname + '/public/js/',
      publicPath: __dirname + '/public/js/',
      filename: "bundle.js"
  },
  module:{
      rules:[
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: "babel-loader"
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader"]
            })
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: (loader) => [
                        require('autoprefixer')(),                        
                    ]
                }
            },{
                loader: "less-loader", options: {                 
                    noIeCompat: true
                }
            }]           
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 50000, // Convert images < 50kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
          } 
      ]
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  devServer: {
    historyApiFallback: true,
    publicPath: "/",
    contentBase: "./public/assets",
    hot: true, 
    proxy: { 
        '/api/**': 
        { 
            target: 'http://localhost:3000/', 
            secure: false, 
            logLevel: 'debug' 
        } 
    }
  }
}