const path = require("path");

module.exports = {
  entry: {
    main: ["./src/api.js", "./src/interface.js"], // Combine multiple entry points
  },
  devtool: "inline-source-map", // Enable multi-file debugging
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
