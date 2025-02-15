import { createApp } from 'vue'
//引入createPinia，用于创建pinia 
import {createPinia} from 'pinia'

import './style.css'
import App from './App.vue'
import router from './router'


// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//状态管理库
//pinia 的实例 vue 全家桶中的Store
const pinia = createPinia()

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



app.use(router)
app.use(pinia)
app.mount('#app')
