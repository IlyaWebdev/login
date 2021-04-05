var Vue = require('vue');


Vue.component("test-btn", require("./App.vue").default);

new Vue({
  el: "#app",
})