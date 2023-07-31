import { createApp } from 'vue'
import App from './App.vue'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import PrimeVue from 'primevue/config';

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(vuetify).use(PrimeVue).use(mdiVue,{
  icons: mdijs
}).mount('#app')
