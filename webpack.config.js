const path = require('path');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  target: "node",
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: { // KEEP IN SYNC WITH tsconfig.json.compilerOptions.paths !
      '@src': path.resolve(__dirname, 'src'),
      '@models': path.resolve(__dirname, 'src', 'models')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
}