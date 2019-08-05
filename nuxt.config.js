module.exports = {
  mode: 'universal',
  router: {
    base: process.env.NODE_ENV === 'production' ? '/ian/TEK1905B0005-demo' : ''
    // base: '/ian/TEK1905B0005-demo'
    // linkActiveClass: 'active'
  },
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'NBA金頭腦',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content: process.env.npm_package_description || ''
      // }
      { name: 'description', content: '你能回答出所有NBA問題嗎？' },
      {
        name: 'keywords',
        content: '會員, nba, 好禮, 免費, 聯合新聞網, udn.com, 活動, 贈品, 好康'
      },
      { property: 'og:title', content: 'NBA金頭腦' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://nba.udn.com/playerquiz/' },
      {
        property: 'og:description',
        content: '你能回答出所有NBA問題嗎？'
      },
      {
        property: 'og:image',
        content: 'https://nba.udn.com/playerquiz/img/1200x630.jpg'
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'NBA金頭腦' },
      { property: 'og:description', content: '你能回答出所有NBA問題嗎？' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://s.udn.com.tw/static/font-icons/css/fontello.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/style/normalize.css',
    '@/assets/style/animate.css',
    '@/assets/stylus/main.styl'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/ga.js', ssr: false },
    { src: '@/plugins/swal.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
    // 'vue-sweetalert2/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
