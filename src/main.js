import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router'
// import 'vant/lib/index.css' // 引入全部的vant组件,一般不推荐
import 'vant/lib/index.less'
Vue.config.productionTip = false
Vue.use(Vant) // 使用Vant
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
