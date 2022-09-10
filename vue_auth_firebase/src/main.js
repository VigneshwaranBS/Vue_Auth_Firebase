import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import firebase from "firebase";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyA679XIhtvriPrFiKsR5OBQhsfRGGJVcIs",
  authDomain: "vue-auth-92b34.firebaseapp.com",
  projectId: "vue-auth-92b34",
  storageBucket: "vue-auth-92b34.appspot.com",
  messagingSenderId: "225598483977",
  appId: "1:225598483977:web:dfbe07519eed7dc64692d8",
  measurementId: "G-8SC8YJVFD0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
