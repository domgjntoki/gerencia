import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./routes/index";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import Vuelidate from "vuelidate";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
