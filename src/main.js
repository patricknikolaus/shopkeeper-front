import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueYouTubeEmbed from 'vue-youtube-embed';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-vue-ui-kit/css/mdb.min.css';

Vue.use(VueYouTubeEmbed)

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "localhost:3000" : "https://shopkeeper-backend.herokuapp.com";

var jwt = localStorage.getItem("jwt");
if (jwt) { axios.defaults.headers.common["Authorization"] = "Bearer " + jwt; }

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
