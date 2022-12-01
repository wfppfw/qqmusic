import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './mock'
import axios  from './plugins'
import {createPinia} from 'pinia'

const app = createApp(App);
app.use(store).use(createPinia()).use(router).mount('#app');
app.config.globalProperties.$axios=axios; 
