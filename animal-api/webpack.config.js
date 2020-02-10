const path = require('path');

module.exports = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'animal-api.js',
    library: 'AnimalApi',
    libraryTarget: 'var'
  },
};