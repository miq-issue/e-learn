const webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/index.js'],
  },

  output: {
    path: path.join(__dirname, 'target/'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=env&plugins[]=transform-object-rest-spread&plugins[]=transform-react-jsx',
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(svg|png|gif|jpeg|jpg|bmp)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=assets/images/[name]-[hash].[ext]',
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=assets/fonts/font[name]-[hash].[ext]',
      },
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'assets/images' },
      { from: 'src/json', to: 'assets/json' },
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"',
      'process.env.DB_CONFIG': `{
        apiKey: 'AIzaSyCW7Nf-yGT2hc0ExkqReuSu9twaEFRxAIs',
        authDomain: 'memapp112233.firebaseapp.com',
        databaseURL: 'https://memapp112233.firebaseio.com',
        projectId: 'memapp112233',
        storageBucket: 'memapp112233.appspot.com',
        messagingSenderId: '769758321502',
      }`,
    }),
  ],

  watch: true,
  devtool: 'cheap-inline-module-source-map',
};
