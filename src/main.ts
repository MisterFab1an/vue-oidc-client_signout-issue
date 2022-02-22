import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import authService from '@/services/authService'

authService.startup().then(ok => {
    if (ok) {
        const app = createApp(App).use(router)
        app.mount('#app')
    } else {
        console.log('Could not start auth service')
    }
})