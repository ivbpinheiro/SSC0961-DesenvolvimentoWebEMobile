import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(router).use(vuetify).mount('#app')
