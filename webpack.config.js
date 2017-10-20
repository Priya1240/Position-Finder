module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./src/app.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "public/bundle.js"
  },
 
  // This section desribes the transformations we will perform
  module: {
    rules : [
       {
        test : /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
         loader : 'babel-loader',
        query: {
          presets: ['react', ['es2015', { "modules": false  }]]
        }
      },
      {
        test: /\.s?css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
      test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
      use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      },
      {
        test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
      },
    }
    ]//rules
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
