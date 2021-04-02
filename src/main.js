import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jquery from 'jquery'
import Popper from 'popper.js'
import bootstrap from  'bootstrap'
import element from 'element-ui'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

Vue.use(element);
Vue.use(VueCookie);

new Vue({
  router,
  store,
  jquery,
  Popper,
  bootstrap,
  render: h => h(App)
}).$mount('#app')

router.beforeResolve((to,from,next) => {
  if (to.matched.some(record => record.meta.title)){
    document.title= to.meta.title
  }else {
    document.title="“一站式”在线教育"
  }

  if (to.matched.some(record => record.meta.requiresAuth)){
    if (store.getters.checkLogin) next()
    else next(window.location.href='/login')
  }else {
    next()
  }
})

import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import el from "element-ui/src/locale/lang/el";
