const pkg = require('./package')

module.exports = {
  mode: 'ssr',
  srcDir: 'src',
  head: {
    titleTemplate: '%s | きもの 着る・私 － 石川・富山の訪問着付教室',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '石川・富山の訪問着付教室' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'image/png', sizes: '32x32', href: '/android-icon-32x32.png' },
      { rel: 'image/png', sizes: '96x96', href: '/android-icon-96x96.png' },
      { rel: 'image/png', sizes: '16x16', href: '/android-icon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  loading: { color: '#fff' },
  css: [
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
    '~/assets/scss/style.scss',
  ],
  modules: [
    ['nuxt-sass-resources-loader', [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss'
    ]]
  ],
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['IE 11', 'last 2 versions' ]
      })
    ]
  }
}
