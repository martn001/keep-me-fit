import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: require('../views/Test.vue').default,
    },
  ],
});

export { router };
