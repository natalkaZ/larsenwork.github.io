const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'larsenwork',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Andreas Larsen is an ambitious and humble healthcare professional turned developer + designer from Copenhagen, Denmark.' },
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/larsenwork/image/upload/v1517138735/andreas.jpg' },
      { name: 'apple-mobile-web-app-title', content: 'Larsenwork' },
      { name: 'application-name', content: 'Larsenwork' },
      { name: 'theme-color', content: '#ee2b7c' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ee2b7c' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'hsl(335, 85%, 55%)' },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
        openAnalyzer: false,
        logLevel: 'info'
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    /*
    ** PostCSS config
    */
    postcss: [
      require('postcss-import')(),
      require('postcss-custom-media')(),
      require('postcss-nesting')(),
      require('postcss-easing-gradients')(),
      require('autoprefixer')
    ],

    /*
    ** Babel config
    */
    babel: {
    }
  }
}
