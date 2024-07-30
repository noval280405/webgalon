// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],

  pinia: {
    storesDirs: ['./stores/**'],
  },
  ssr: false,
  vuefire: {
    auth: {
      enabled: true
    },
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
      // there could be other properties depending on the project
    },
  },
})