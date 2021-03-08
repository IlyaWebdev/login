var Vue = require('vue');


Vue.component("login", require("./App.vue").default);

new Vue({
  el: "#app",
  data: {
    visible: false,
  }
})