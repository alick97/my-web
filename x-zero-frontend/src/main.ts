import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store } from './store'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'


const app = createApp(App)

app.use(router)
  .use(store)
  .use(ViewUIPlus)
  .mount('#app')
