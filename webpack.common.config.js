const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'idp_client_spa',
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      template: 'src/index.html',
      inject: true
    })
  ],
  resolve: {
    mainFiles: ['index'],
    modules: ['node_modules'],
    extensions: ["jsx", ".js", ".json"] 
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
                outputPath: 'images',
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'file-loader'
        ]
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'file-loader'
        ]
      }
    //]
      //{
        //test: /\.(csv|tsv)$/,
        //include: path.resolve(__dirname, 'src'),
        //use: [
          //'csv-loader'
        //]
      //},
      //{
        //test: /\.xml$/,
        //include: path.resolve(__dirname, 'src'),
        //use: [
          //'xml-loader'
        //]
      //}
    ]
  }
};

