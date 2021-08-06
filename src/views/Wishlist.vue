<template>
  <div class="wishlist">
    <div v-for="game in wishlist">
      <p><router-link v-bind:to="`/games/${game.game_id}`"><img
            v-if="game.image_url"
            :src="game.image_url.replace('t_thumb', 't_1080p')"
            :alt="game.title">
          <img v-else src="/no_image_found.jpeg" /></router-link></p>
      <h2>{{ game.title }}</h2>
      <button v-on:click="removeGame">remove</button>
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
      });
    },
    removeGame: function () {
      axios.delete(`/wishlists/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/wishlists");
      });
    },
  },
};
</script>