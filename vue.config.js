module.exports = {
  configureWebpack: {
    output: {
      filename: "index.js",
      libraryTarget: "umd",
    },
    externals: {
      "v-calendar": "commonjs2 v-calendar",
    },
    mode: "production",
  },
};
