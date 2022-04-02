// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// 引入的不再是Vue構造函數，
// 引入的是名為createApp的工廠函數
import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import store from './store'
import router from './router'

const eventBus = mitt();

// 創建應用實例對象--app(類似於之前Vue2中的vm，但app比vm更"輕")
const app = createApp(App);
app.use(BootstrapVue3)
app.use(store)
app.use(router)
// 把 mitt 加入 Vue 的全域 Property，讓任何一個元件都能使用
app.config.globalProperties.eventBus = eventBus;
// 掛載
app.mount("#app");