module.exports = {
  srcDir: 'src',
  head: {
    title: 'Infinite Scroll',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Infinite Scroll with Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/styles.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/swiper.min.css' },
    ],
    script: [
      { src: "js/jquery-3.1.1.min.js" },
      { src: "js/script.js" }
    ]
  },
  /*
  ** Custom Plugin
  */
  plugins: [
    { src: '~plugins/lazyload.js' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // buildDir: '../functions/nuxt',
  build: {
    // publicPath: '/',
    extractCSS: true,
    // babel: {
    //   presets: ['@nuxt/babel-preset-app'],
    //   plugins: [
    //     ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }]
    //   ],
    // },
    // babel: {
    //   presets: [
    //     'es2015',
    //     'stage-0'
    //   ],
    //   plugins: [
    //     ["transform-runtime", {
    //       "polyfill": true,
    //       "regenerator": true
    //     }]
    //   ]
    // },
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.isDev && ctx.client) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })

    //     // const vueLoader = config.module.rules.find(
    //     //   ({loader}) => loader === 'vue-loader')
    //     // const { options: {loaders} } = vueLoader || { options: {} }
    //     // if (loaders) {
    //     //   for (const loader of Object.values(loaders)) {
    //     //     changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
    //     //   }
    //     // }
    //     // config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
    //     // console.log(util.inspect(config.module.rules, { depth: 6 }))
    //   }
    // }
  }  
}
// function changeLoaderOptions (loaders) {
//   if (loaders) {
//     for (const loader of loaders) {
//       if (loader.loader === 'sass-loader') {
//         Object.assign(loader.options, {
//           includePaths: ['./assets'],
//           // data: '@import "_imports";'
//         })
//       }
//     }
//   }
// }