
var path = require("path"); //default nodejs library

// save path of dist and src into varible using path
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// config holds the webpack configuration
var config = {
  entry: SRC_DIR + "/app/index.js", // file that starts the application
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/" // lets webpack know where the app lives
  },
  module: { // transpile es6 to es5
    loaders: [
      {
        test: /\.js?/, //regx to look at all js files
        include: SRC_DIR, // where to look
        loader: "babel-loader", // load babel
        query: { // with our presets
          presets: ["react", "env", "stage-2"]
        }
      }
    ]
  }
};

module.exports = config;
