import './assets/app.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(createMetaManager())

app.mount('#app')
