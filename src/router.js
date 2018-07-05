import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/Home.vue';
import about from '@/views/About.vue';
import contact from '@/views/Contact.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/contact', component: contact },
];

export default new Router({
  routes,
  mode: 'history',
});
