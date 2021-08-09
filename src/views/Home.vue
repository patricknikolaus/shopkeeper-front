<template>
  <div class="home">
    <h1>Welcome to Shopkeeper.gg {{ username }}!</h1>
    <div>
      <input type="text" v-model="search" v-on:keyup.enter="searchGame"><button v-on:click="searchGame">search</button>
      </div>
    <div v-for="game in games">
      <div v-if="game.cover">
        <h1>{{ game.name }}</h1>
          <p><router-link v-bind:to="`/games/${game.id}`"><img
            v-if="game.cover"
            :src="game.cover.url.replace('t_thumb', 't_1080p')"
            :alt="game.name">
          <p v-else></p>
          </router-link></p>
          <hr>
        </div
      </div>
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
      message: "Welcome to Shopkeeper.gg",
      games: [],
      search: "",
      username: [],
    };
  },
  created: function () {
    this.getUsername();
    this.onLoad();
  },
  methods: {
    searchGame: function () {
      axios.post("/games", { search: this.search }).then((response) => {
        this.games = response.data;
        console.log(response.data);
      });
    },
    getUsername: function () {
      this.username = localStorage.username;
    },
    onLoad: function () {
      axios.post("/games", { search: this.search }).then((response) => {
        this.games = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
