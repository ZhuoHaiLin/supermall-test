
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() =>import('views/home/Home.vue')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Logo=()=> import('views/login/login')
Vue.use(VueRouter)

const routes=[
    {
        path: '/',
        redirect: '/home'
        // meta:{name:'home',isbool:true}
    },
    {
        path:'/home',
        component:Home
    },{
        path: '/category',
        component: Category
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/detail',
        component: Detail
      },
      {
        path:'/login',
        component:Logo
      }
]

const router=new VueRouter({
    routes,
    mode:'history'
})

export default router
