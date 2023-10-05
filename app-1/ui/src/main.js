import element from "./vendors/element";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/scss/element/index.scss";

const app = createApp(App)

app.use(router)
element(app);

app.mount('#app')
