export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  bootstrapVue: {
    icons: true //import iccons
  },
  axios: {
    baseURL: 'http://127.0.0.1:8000/',
  },
  auth:{
    strategies:{
      local:{
        endpoints:{
          login:{
            url:'token/login/',
            method: 'post',
            propertyName: 'auth_token',
          },
          logout:{
            url:'token/logout/',
            method: 'post',
          },
          user:{
            url: 'account/data/',
            method: 'get',
            propertyName: false,
          },
          
        },
        tokenType: 'Token',
        tokenName: 'Authorization',
      },
      redirect:{
        login:'/',
        home:'/',
        logout: '/login'
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  router: {
    middleware: ['auth'] //rutea si no esta loggeado
  }
}
