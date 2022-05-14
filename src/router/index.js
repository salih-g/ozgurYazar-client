import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: function () {
			return import('../views/Home.vue');
		},
	},
	{
		path: '/about',
		name: 'About',
		component: function () {
			return import('../views/About.vue');
		},
	},
	{
		path: '/content/:id',
		name: 'Contents',
		component: function () {
			return import('../views/AboutContent.vue');
		},
	},
	{
		path: '/section/:id',
		name: 'Content',
		component: function () {
			return import('../views/Content.vue');
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
