// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import storeOption from './store';
//引入mint-ui作为UI组件库
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';




Vue.use(MintUI);
Vue.use(Vuex);
Vue.use(VueRouter);


// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(storeOption);

window.__lendApp__ = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});