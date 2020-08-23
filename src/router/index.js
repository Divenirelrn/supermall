import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import("views/home/Home")
const Category = () => import("views/category/Category")
const ShopCart = () => import("views/shopCart/ShopCart")
const Profile = () => import("views/profile/Profile")
const Detail = () => import("components/content/detail/Detail")

const router = new VueRouter({
  routes: [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/category",
      component: Category
    },
    {
      path: "/shopcart",
      component: ShopCart
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/detail",
      component: Detail
    }
  ],
  mode: 'history'
})

export default router
