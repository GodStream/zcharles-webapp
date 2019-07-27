import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './views/layout/DefaultLayout.vue';

const HomeIndex = () => import('./views/home/HomeIndex.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: DefaultLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeIndex,
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
});
