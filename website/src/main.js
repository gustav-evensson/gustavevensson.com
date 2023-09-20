import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style/reset.css'
import './style/app.css'
import './style/home.css'
import './style/about.css'
import './style/tools.css'
import './style/work.css'
import './style/contact.css'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({once: true});

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount('#app')
