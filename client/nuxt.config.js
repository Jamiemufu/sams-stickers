export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { href: "https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Permanent+Marker&family=Satisfy&display=swap", rel: "stylesheet" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],

  // added for WSL2 bug
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '@/components/atoms/',
    '@/components/molecules/',
    '@/components/organisms/',
    '@/components/schema/',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
  ],

  styleResources: {
    // your settings here
    scss: ['~/assets/css/_colors.scss'],
    hoistUseStatements: true  // Hoists the "@use" imports. Applies only 
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
  ],

  fontawesome: {
    icons: {
      solid: ['faSearch', 'faUserCircle', 'faShoppingCart', 'faCaretDown'],
    }
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
