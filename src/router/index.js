import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: require('../views/Home.vue').default,
    },
    {
      path: '/test',
      name: 'test',
      component: require('../views/Test.vue').default,
    },
    {
      path: '/vandaag',
      name: 'today',
      component: require('../views/Today.vue').default,
    },
  ],
});

export { router };
