import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebook, faTwitter, faWhatsapp);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
