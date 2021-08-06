<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>
      <img v-if="game[0].cover" :src="game[0].cover.url.replace('t_thumb', 't_1080p')" :alt="game[0].name"><img v-else src="/no_image_found.jpeg" />
    </p>
    <h2>{{ game[0].name }}</h2>
    <button>add to wishlist</button>
    <p v-for="genre in game[0].genres">{{ genre.name }}</h2>
    <h2>{{ Math.round(game[0].rating) }}/100</h2>
    <h4>{{ game[0].summary }}</h4>
    <p v-for="similar in game[0].similar_games">{{ similar.name }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Game Show",
      game: [],
      prices: [],
      title: "",
    };
  },

  created: function () {
    this.gameShow();
  },
  methods: {
    gameShow: function () {
      axios.post(`/games/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.game = response.data;
        this.title = response.data[0].name.split(" ").join("").toLowerCase();
        this.gamePrice();
      });
    },
    gamePrice: function () {
      console.log("price");
      axios
        .get("https://www.cheapshark.com/api/1.0/deals", {
          params: { title: this.title, exact: 1 },
        })
        .then((response) => {
          console.log(response.data);
          this.prices = response.data;
        });
    },
  },
};
</script>
