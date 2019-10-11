module.exports = {
  context: __dirname,
  entry: ["/app.js"],
  output: {
    filename: "./dist/undle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "bable-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  }
};
