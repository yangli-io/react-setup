module.exports = {
  context: __dirname + "/src",
  entry: {
    'index': './index.js'
  },

  output: {
    filename: "[name].js",
    path: process.cwd() + "/dist"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
