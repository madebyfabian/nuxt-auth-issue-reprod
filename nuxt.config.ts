// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    shim: false
  },
  auth: {
    origin: process.env.NODE_ENV === 'production' ? 'https://nuxt-auth-issue-reprod.vercel.app' : 'http://localhost:3000'
  }
})
