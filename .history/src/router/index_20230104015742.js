import Vue from 'vue'
import VueRouter from 'vue-router'
import AllExpert from '../components/AllExpert.vue'
import MakeComment from '../components/Comments/MakeComment.vue'
import MakeComplaint from '../components/Complaints/MakeComplaint.vue'
import Expert from '../components/expert.vue'
import ExpertDetailInfo from '../components/ExpertDetial/ExpertDetailInfo.vue'
import getQualification from '../components/getQualification/getQualification.vue'
import Header from '../components/Header.vue'
import Helloworld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'
import Jay from '../components/Jay.vue'
import Login from '../components/Login.vue'
import Messages from '../components/Messages/Messages.vue'
import MyExpertInfo from '../components/MyExpertInfo.vue'
import ConfirmOrder from '../components/Orders/confirmOrder.vue'
import OrderMenu from '../components/Orders/OrderMenu.vue'
import Orders from '../components/Orders/Orders.vue'
import Register from '../components/register.vue'
import Score from '../components/Score.vue'
import SearchResult from '../components/SearchResult.vue'
import Test from '../components/Test.vue'
import Test2 from '../components/Test2.vue'
import test3 from '../components/test3.vue'
import Test4 from '../components/Test4.vue'
import Topic from '../components/Topic.vue'
import Topic1 from '../components/Topic1.vue'
import CreateTopics from "../components/Topics/CreateTopics.vue"
import UserInfo from '../components/userInfo.vue'
import AboutUs from '../components/UserInfo/AboutUs.vue'
import AreaChoose from '../components/UserInfo/AreaChoose.vue'
import Me from '../components/UserInfo/Me.vue'
import MyCollection from '../components/UserInfo/MyCollection.vue'
import SpecialNotcie from '../components/UserInfo/SpecialNotice.vue'
import UserInfoEdit from '../components/userInfoEdit.vue'
import UserOrder from '../components/userOrder.vue'
import Welcome from '../components/Welcome.vue'
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {path:'/AreaChoose',component:AreaChoose},
    { path: '/AboutUs', component: AboutUs },
    { path: '/SpecialNotice', component: SpecialNotcie },
    { path: '/MakeComplaint', component: MakeComplaint },
    { path: '/getQualification', component: getQualification },
    { path: '/CreateTopics', component: CreateTopics },
    { path: '/MakeComment', component: MakeComment },
    { path: '/MyCollection', component: MyCollection },
    {path:'/MyExpertInfo',component:MyExpertInfo},

    { path: '/confirmOrder', component: ConfirmOrder },
    { path: '/ExpertDetailInfo/:id', component: ExpertDetailInfo },
    { path: '/AllExpert', component: AllExpert },
    { path: '/Score', component: Score },
    { path: '/Test4', component: Test4 },
    { path: '/', redirect: '/Welcome' },
    { path: '/home', component: Home },
    { path: '/searchresult/:input', name: SearchResult, component: SearchResult },
    { path: '/jay', component: Jay },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/helloworld', component: Helloworld },
    { path: '/topic', component: Topic },
    { path: '/UserInfo', component: UserInfo },
    { path: '/Test', component: Test },
    { path: '/Welcome', component: Welcome },
    { path: '/Topic1', component: Topic1 },
    { path: '/Test2', component: Test2 },
    { path: '/Test3', component: test3 },
    { path: '/Expert/:id', name: Expert, component: Expert },
    { path: '/UserOrder', component: UserOrder },
    { path: '/OrderMenu', component: OrderMenu },
    { path: '/Orders', component: Orders },
    { path: '/Header', component: Header },
    { path: '/Me', component: Me },
    { path: '/Messages', component: Messages },
    { path: '/UserInfoEdit', component: UserInfoEdit }
  ]
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/*
router.beforeEach((to, from, next) => {
    if (to.path === "/login" || to.path === "/Welcome"||to.path ==="/register") return next();
    const tokenStr = window.sessionStorage.getItem("token");
    if(!tokenStr) return next("/Welcome");
    next();
  })
*/


export default router
