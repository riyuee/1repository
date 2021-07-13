module.exports = {
  devServer: {
    port: 3333,
    open: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`,
        // sass-loader换成低版本还是报错，将data改成prependData
      },
    },
  },
}
