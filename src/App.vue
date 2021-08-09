<template>
  <div class="container">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link v-if="!isLoggedIn()" to="/users">Sign Up</router-link> |
        <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
        <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
        <router-link v-if="isLoggedIn()" to="/wishlists">Wishlist</router-link>
      </div>   
      <router-view/>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      games: [],
      search: "",
    };
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>