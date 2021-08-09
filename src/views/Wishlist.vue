<template>
  <div class="wishlist">
    <h1>{{ username }}'s Wishlist</h1>
    <div v-for="game in wishlist" v-bind:key="game.id">
      <div v-if="game.on_sale === 1">ON SALE</div>
      <p><router-link v-bind:to="`/games/${game.game_id}`"><img
            v-if="game.image_url"
            :src="game.image_url.replace('t_thumb', 't_1080p')"
            :alt="game.title">
          <img v-else src="/no_image_found.jpeg" /></router-link></p>
      <h2>{{ game.title }}</h2>
      <button v-on:click="removeGame(game)">remove</button>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      wishlist: [],
      message: "Wishlist Page",
      username: [],
    };
  },
  created: function () {
    this.getWishlist();
  },
  methods: {
    getWishlist: function () {
      axios.get("/wishlists").then((response) => {
        console.log(response.data);
        this.wishlist = response.data;
        this.username = localStorage.username;
      });
    },
    removeGame: function (game) {
      axios.delete(`/wishlists/${game.id}`).then((response) => {
        console.log(response.data);
        let index = this.wishlist.indexOf(game);
        this.wishlist.splice(index, 1);
      });
    },
  },
};
</script>