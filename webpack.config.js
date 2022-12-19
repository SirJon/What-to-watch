const path = require(`path`);

module.exports = {
  mode: 'development',
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    // contentBase: path.join(__dirname, `public`),
    
    static: {
      directory: path.join(__dirname, 'development'),
    },
    watchFiles: ["src/*"],
    compress: false,
    open: true,
    port: 1337,
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
  devtool: `source-map`
};