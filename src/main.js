// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import store from './store'

const eventBus = mitt();
const app = createApp(App);
app.use(BootstrapVue3)
app.use(store)
// 把 mitt 加入 Vue 的全域 Property，讓任何一個元件都能使用
app.config.globalProperties.eventBus = eventBus;
app.mount("#app");