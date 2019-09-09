import Vue from 'vue'
import App from './App.vue'
import {MdButton, MdTable, MdContent, MdRipple, MdField, MdCard, MdToolbar, MdMenu, MdList} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdTable);
Vue.use(MdContent);
Vue.use(MdRipple);
Vue.use(MdCard);
Vue.use(MdToolbar);
Vue.use(MdMenu);
Vue.use(MdList);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
