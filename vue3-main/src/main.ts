import '@/styles/index.less'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
import { listenReceiveMessage } from '@/utils/messageListener'

createApp(App).use(createPinia()).use(router).mount('#app')

listenReceiveMessage()
