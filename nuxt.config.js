const nodeExternals = require('webpack-node-externals')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/housebrew.github.io/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'yolo-doc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Documentation for Yolo UI Library' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }

      // allow ES6 to be compiled inside node_module (Yolo)
      // https://github.com/nuxt/nuxt.js/issues/1753
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^Yolo/]
          })
        ]
      }
    }
  },

  plugins: ['~/plugins/doc-component', '~/plugins/yolo-lib'],

  ...routerBase
}
