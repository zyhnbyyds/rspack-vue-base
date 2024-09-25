import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './index.css'
import 'lew-ui/style'

createApp(App).use(router).mount('#root')
