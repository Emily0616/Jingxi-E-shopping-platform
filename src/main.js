// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import global_ from "@/components/Global";

import $ from "jquery";
import { global } from "../static/js/global.js";
import { swiper } from "../static/js/swiper.min.js";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.prototype.GLOBAL = global_;

Vue.prototype.getHomeGoods = function() {
  var that = this;
  axios
    .get(that.GLOBAL.basePath + "good/home")
    .then(function(response) {
      // console.log(response);
      console.log(response.data.goods);
      that.GLOBAL.homeGoods = response.data.goods;
      console.log(response.data.bigcategory);
      that.GLOBAL.bigCategory = response.data.bigcategory;
      console.log(that.GLOBAL.bigCategory);

      // that.GLOBAL=response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  // alert('执行成功')
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
