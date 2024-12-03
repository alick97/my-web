import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store } from './store'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import XzUI from '@xz-ui/xz-ui'

const app = createApp(App)

app.use(router)
  .use(store)
  .use(ViewUIPlus)
  .use(XzUI)
  .use(ElementPlus)
  .mount('#app')
