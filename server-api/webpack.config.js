const path = require('path');

module.exports = {
    target: 'node',
    entry: [
      './src/services/user/index.js',
      './src/services/auth/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    externals: {
      knex: 'commonjs knex'
    },
    module: {
      rules: [
        {
          test: /\.js$/, 
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };