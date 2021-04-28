module.exports = {
  configureWebpack: {
    output: {
      filename: "index.js",
      libraryTarget: "umd",
    },
    externals: {
      "vue-datepicker": "commonjs2 @sum.cumo/vue-datepicker",
    },
    mode: "production",
  },
};
