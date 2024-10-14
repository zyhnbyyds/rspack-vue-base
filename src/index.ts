import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import locales from './locales'
import { router } from './router'
import './style/index.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
const pinia = createPinia()

const i18n = createI18n({
  locale: '中文简体',
  fallbackLocale: '中文简体',
  messages: locales,
})

// add plugins
app.use(createVuetify()).use(pinia).use(i18n)

app.use(router).mount('#root')
