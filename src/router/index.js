import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '@/views/DashBoard'
import About from '@/views/About'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    props: { showAddForm: true }
  },
  {
    path: '/about*',
    name: 'about',
    component: About
  },
  {
    path: '/add/payment/:category',
    name: 'addpayment',
    redirect: to => {
      return { name: 'dashboard', query: { curCategory: to.params.category, showAddForm: true } }
    }
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '*',
    redirect: {
      name: 'notfound'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  addPayment: 'Add Payment',
  notfound: 'Not Found'
}

router.afterEach((to, from) => {
  document.title = titles[to.name]
  if (from.name === null && to.redirectedFrom) {
    to.query.curValue = to.redirectedFrom.split('?value=')[1]
  }
})

export default router
