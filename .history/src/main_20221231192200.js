import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Footer from './components/Footer.vue'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vuex);



new Vue({
  router,
  Footer,
  render: h => h(App),
}).$mount('#app')
