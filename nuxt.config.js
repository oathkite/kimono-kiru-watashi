const pkg = require('./package')

module.exports = {
  mode: 'spa',
  srcDir: 'src',
  head: {
    titleTemplate: '%s | きもの 着る・私 － 石川・富山の訪問着付教室',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '石川・富山の訪問着付教室' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP' }
    ]
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
