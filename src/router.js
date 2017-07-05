import index from './components/index/index.vue';
import filght from './components/filght/filght.vue';
import purchase from './components/purchase/purchase.vue';
import login from './components/login/login.vue';
import supplier from './components/supplier/supplier.vue';
const routers = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/filght',
    name: 'filght',
    component: filght
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: purchase
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/supplier',
    name: 'supplier',
    component: supplier
  }
];
export default routers;
/**
 * Created by Administrator on 2017/6/27.
 */
