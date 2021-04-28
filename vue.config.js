module.exports = {
  configureWebpack: {
    output: {
      filename: "index.js",
      libraryTarget: "umd",
    },
    externals: {
      "v-calendar": "commonjs2 @sum.cumo/vue-datepicker",
    },
    mode: "production",
  },
};
