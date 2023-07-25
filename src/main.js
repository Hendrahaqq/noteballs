import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from "@intlify/unplugin-vue-i18n/messages";

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "de",
    fallbackLocale: "en",
    availableLocales: ["en", "de"],
    messages: messages,
  });

const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)


app.mount('#app')
