import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Varlet from '@varlet-vue2/ui';
import '@varlet-vue2/ui/es/style.js';

import './index.css';

Vue.use(Varlet);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
