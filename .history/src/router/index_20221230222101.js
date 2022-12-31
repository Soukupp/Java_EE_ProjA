import Vue from 'vue'
import VueRouter from 'vue-router'
import Helloworld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'
import Jay from '../components/Jay.vue'
import Login from '../components/Login.vue'
import Register from '../components/register.vue'
import Test from '../components/Test.vue'
import Test2 from '../components/Test2.vue'
import Topic from '../components/Topic.vue'
import Topic1 from '../components/Topic1.vue'
import UserInfo from '../components/userInfo.vue'
import Welcome from '../components/Welcome.vue'
Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/home', component: Home },
        { path: '/jay', component: Jay },
        { path: '/register', component: Register },
        { path: '/login', component: Login },
        { path: '/helloworld', component: Helloworld },
        { path: '/topic', component: Topic },
        { path: '/UserInfo', component: UserInfo },
        { path: '/Test', component: Test },
        { path: '/Welcome', component: Welcome },
        { path: '/Topic1', component: Topic1 },
        {path:'/Test2',component:Test2},
    ]
})
/*
router.beforeEach((to, from, next) => {
    if (to.path === "/login" || to.path === "/Welcome"||to.path ==="/register") return next();
    const tokenStr = window.sessionStorage.getItem("token");
    if(!tokenStr) return next("/Welcome");
    next();
  })
*/

export default router
