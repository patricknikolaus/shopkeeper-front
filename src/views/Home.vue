<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <input type="text" v-model="game">
    <button v-on:click="gameIndex">CLICK ME</button>
    <p><img v-bind:src="games.image_url"></p>
    {{ games.title }}
    
    <!-- <div v-for="game in games"> -->
      <!-- <h1>{{ game.title }}</h1> -->
      <hr>
    </div>
    <!-- <div v-for="game in games">
      <img v-bind:src="game.thumb">
      <p>{{ game.title }}</p>
      <hr>
    </div> -->
  </div>
</template>

<style>
img {
  width: 200px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Shopkeep.gg",
      games: [],
      game: "",
    };
  },
  created: function () {
    this.gameIndex();
  },
  methods: {
    gameIndex: function () {
      axios.get("/games/183206").then((response) => {
        this.games = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
