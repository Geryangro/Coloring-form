// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import {MediaQueries} from 'vue-media-queries';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueYouTubeEmbed);
const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mediaQueries: mediaQueries
})
