<template>
  <v-app>
    <v-app-bar app dark>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <button @click="logout">Logout</button>
        <!-- <li>Home</li>
        <li>Register</li>
        <li>Dashboard</li>
        <li>Logout</li> -->
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
};
</script>

<style >
input {
  margin-right: 20px;
}
</style>
