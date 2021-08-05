<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <input type="text" v-model="search"><button v-on:click="searchGame">search</button>
      </div>
    <div v-for="game in games">
        <h1>{{ game.name }}</h1>
          <p><router-link v-bind:to="`/games/${game.id}`"><img
            v-if="game.cover"
            :src="game.cover.url.replace('t_thumb', 't_1080p')"
            :alt="game.name">
          <img v-else src="/no_image_found.jpeg" /></router-link></p>
          <div v-for="genre in game.genres">
          <p>{{ genre.name }}</p>
          <!-- <p><button v-on:click="gameShow">More Info</button></p> -->
          </div>
          <hr>
      </div>
    </div>
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
      message: "Welcome to Shopkeeper.gg",
      games: [],
      search: "",
    };
  },
  created: function () {},
  methods: {
    searchGame: function () {
      axios.post("/games", { search: this.search }).then((response) => {
        this.games = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
