import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style/css/reset.css'
import './style/css/app.css'
import './style/css/home.css'
import './style/css/about.css'
import './style/css/tools.css'
import './style/css/work.css'
import './style/css/contact.css'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount('#app')
