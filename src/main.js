import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import { createPinia } from 'pinia'
// import './assets/main.css'

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
