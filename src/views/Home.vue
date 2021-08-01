<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="game in games">
      <p><img v-bind:src="game.image_url"></p>
      <h1>{{ game.title }}</h1>
      <p>{{ game.details }}</p>
      <p>{{ game.rating }}/10</p>
      <hr>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Shopkeep.gg",
      games: [],
    };
  },
  created: function () {
    this.gameIndex();
  },
  methods: {
    gameIndex: function () {
      axios.get("/games").then((response) => {
        console.log(response.data);
        this.games = response.data;
      });
    },
  },
};
</script>
