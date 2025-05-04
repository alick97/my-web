import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import XzUI from '@xz-ui/xz-ui'

const app = createApp(App)

app.use(router)
  .use(createPinia())
  .use(XzUI)
  .use(ElementPlus)
  .mount('#app')
