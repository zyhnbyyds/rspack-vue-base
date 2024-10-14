import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import i18n from './plugins/i18n'
import { router } from './router'
import './style/index.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export const app = createApp(App)
const pinia = createPinia()

// add plugins
app.use(createVuetify()).use(pinia).use(i18n)

app.use(router).mount('#root')
