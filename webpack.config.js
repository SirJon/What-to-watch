const path = require(`path`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV == 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `bundle.${ext}` : `[hash].bundle.${ext}`;

module.exports = {
  // mode: 'development',
  entry: `./src/index.js`,
  output: {
    filename: `${filename('js')}`,
    path: path.join(__dirname, `development`),
    publicPath: `/`,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'development'),
    },
    watchFiles: ["src/*"],
    compress: false,
    open: true,
    port: 1900,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: 'public/index.html'
      }
    ),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "public/css", to: "css" },
        { from: "public/img", to: "img" },
      ],
    }),
  ]
};

// module.exports = {
//   // mode: 'development',
//   entry: `./src/index.js`,
//   output: {
//     filename: `bundle.js`,
//     path: path.join(__dirname, `public`),
//     publicPath: `/`,
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     watchFiles: ["src/*"],
//     compress: false,
//     open: true,
//     port: 1900,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: `babel-loader`,
//         },
//       }
//     ],
//   },
//   devtool: `source-map`,
//   // plugins: [
//   //   new HtmlWebpackPlugin(
//   //     {
//   //       filename: 'index.html',
//   //       template: 'public/index.html'
//   //     }
//   //   ),
//   //   new CleanWebpackPlugin(),
//   //   new CopyPlugin({
//   //     patterns: [
//   //       { from: "public/css", to: "css" },
//   //       { from: "public/img", to: "img" },
//   //     ],
//   //   }),
//   // ]
// };