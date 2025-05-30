import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RestaurantList from '../views/RestaurantList.vue';
import RestaurantMenu from '../views/RestaurantMenu.vue';
import Cart from '../views/Cart.vue';
import OrderHistory from '../views/OrderHistory.vue';
import Login from '../views/Login.vue';
import AdminMenu from '../views/AdminMenu.vue';
import AdminOrders from '../views/AdminOrders.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/restaurants',
    name: 'RestaurantList',
    component: RestaurantList,
  },
  {
    path: '/restaurants/:id',
    name: 'RestaurantMenu',
    component: RestaurantMenu,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/order-history',
    name: 'OrderHistory',
    component: OrderHistory,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    component: {
      render(c) { return c('router-view'); }
    },
    children: [
      {
        path: 'menu',
        name: 'AdminMenu',
        component: AdminMenu,
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: AdminOrders,
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;