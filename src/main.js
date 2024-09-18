import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./routers/index.js";
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import getDynamicPath from "./plugins/getDynamicPath.js";

import './style.css'

const app = createApp(App)
const pinia = createPinia()

app
    .use(router)
    .use(pinia)
    .use(getDynamicPath)
    .use(VueAxios, axios)
    .mount('#app')