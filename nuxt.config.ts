// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue'],
  css: ['primevue/resources/themes/lara-light-green/theme.css']
})
