//require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  //the base directory (absolute path) for resolving the entry option
  context: __dirname,
  //the entry point we created earlier. Note that './' means 
  //your current directory. You don't have to specify the extension  now,
  //because you will specify extensions later in the `resolve` section
  entry: './election2000/static/app', 
  
  output: {
    //where you want your compiled bundle to be stored
    path: path.resolve('./assets/bundles/'), 
    //naming convention webpack should use for your files
    filename: '[name]-[hash].js', 
  },
  
  plugins: [
    //tells webpack where to store data about your bundles.
    new BundleTracker({filename: './webpack-stats.json'}), 
  ],
  
  module: {
    loaders: [
      //a regexp that tells webpack use the following loaders on all 
      //.js and .jsx files
      {test: /\.jsx?$/, 
        //we definitely don't want babel to transpile all the files in 
        //node_modules. That would take a long time.
        exclude: /node_modules/, 
        //use the babel loader 
        loader: 'babel-loader', 
        query: {
          //specify that we will be dealing with React code
          presets: ['react'] 
        }
      },
      {test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
}
