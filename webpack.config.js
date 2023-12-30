var path = require("path");

module.exports = {
  entry: "./src/main/webapp/Main.js",
  output: {
    path: path.join(__dirname, "/src/main/resources/static/assets/js"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: path.join(__dirname, "."),
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname),
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|eot|otf|ttf|woff|woff2)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "url-loader",
            options: {},
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  cache: true,
};
