import Vue from 'vue';
import VueLuxon from 'vue-luxon';
import { BootstrapVue } from 'bootstrap-vue';

import App from './App.vue';
import router from './router';

import './assets/css/bootstrap.css';
import './assets/css/main.css';

Vue.config.productionTip = false;

Vue.use(VueLuxon, {
	input: {
		zone: 'Europe/Istanbul',
		format: 'iso',
	},
	output: 'short',
});
Vue.use(BootstrapVue);

new Vue({
	router,
	render: function (h) {
		return h(App);
	},
}).$mount('#app');
