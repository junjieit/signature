module.exports = {
  entry: __dirname + '/src/drawBoard.js',
  output: {
    path: __dirname + '/build',
    filename: 'drawBoard.min.js',
    library: 'DrawBoard',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['es2015']
      }
    }]
  }
};
