import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GameShow from '../views/GameShow.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Wishlist from '../views/Wishlist.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games/:id',
    name: 'GameShow',
    component: GameShow
  },
  {
    path: '/wishlists',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/users',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
