import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);

ApiService.init();

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import "./assets/css/bootstrap.min.css";
import "./assets/fonts/iconfonts.css";
import "./assets/css/plugins.css"; 
import "./assets/css/style.css"; 
import "./assets/css/responsive.css";
import "./assets/css/color.css";
import "./assets/js/jquery.min.js"; 
// import "./assets/js/bootstrap.min.js"; 
// import "./assets/js/plugins.js"; 
import "./assets/js/custom.js";
