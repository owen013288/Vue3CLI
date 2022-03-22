// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";

const eventBus = mitt();
const app = createApp(App);
console.log(eventBus);
// 把 mitt 加入 Vue 的全域 Property，讓任何一個元件都能使用
app.config.globalProperties.eventBus = eventBus;
app.mount("#app");