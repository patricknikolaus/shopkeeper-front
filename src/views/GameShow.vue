<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>
      <img v-if="game[0].cover" :src="game[0].cover.url.replace('t_thumb', 't_1080p')" :alt="game[0].name"><img v-else src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" />
    </p>
    <h2>{{ game[0].name }}</h2>
    <button v-on:click="wishlistGame">add to wishlist</button>
    <dialog id="wishlist-add">
      <form method="dialog">
        <div v-if="this.errors.length === 1">
          <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
        </div>
        <div v-else>
          <p>Game added to wishlist!</p>
        </div>
        <button>X</button>
      </form>
    </dialog>
    <a :href="`https://www.twitch.tv/directory/game/` + game[0].name.split(' ').join('%20')" target="_blank">
    <h2>Twith Streams</h2>
    </a>
    <p v-for="genre in game[0].genres">{{ genre.name }}</h2>
      <h2>{{ Math.round(game[0].rating) }}/100</h2>
      <h4>{{ game[0].summary }}</h4>
    <div v-for="video in videos">
      <youtube :video-id="video.video_id"></youtube> 
    </div> 
    <div v-for="screenshot in screenshots">
        <img v-if="screenshot.url" :src="screenshot.url.replace('t_thumb', 't_1080p')" :alt="game[0].name"><img v-else src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" />
    </div>
    <div v-for="similar in game[0].similar_games">
      <a v-bind:href="`/games/${similar.id}`">{{ similar.name }}</a>
    </div>
      <hr>
      <div v-for="price in prices">
        <div v-for="store in stores">
          <div v-if="price.storeID === store.storeID">
            <h2>{{ store.storeName }}</h2>
          </div>
        </div>
        <div v-if="price.isOnSale === '1'">
          <h2>ON SALE: {{ Math.round(price.savings) }}% OFF!</h2>
          <h3><strike>${{ price.normalPrice }}</strike></h3> 
          <h2>${{ price.salePrice }}</h2>
        </div>
        <div v-else><h3>{{ price.normalPrice }}</h3></div>
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
      message: "Game Show",
      game: [],
      prices: [],
      title: "",
      stores: [],
      screenshots: [],
      errors: [],
      videos: [],
    };
  },

  created: function () {
    this.gameShow();
    this.twitchStream();
  },
  methods: {
    gameShow: function () {
      axios.post(`/games/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        // console.log(response.data[0].screenshots);

        this.game = response.data;
        this.title = response.data[0].name.split(" ").join("").toLowerCase();
        this.screenshots = response.data[0].screenshots;
        this.videos = response.data[0].videos;
        // console.log(localStorage.user_id);
        this.gamePrice();
        this.storeName();
      });
    },
    gamePrice: function () {
      // console.log("price");
      axios
        .get("https://www.cheapshark.com/api/1.0/deals", {
          params: { title: this.title, exact: 1 },
        })
        .then((response) => {
          // console.log(response.data);
          this.prices = response.data;
        });
    },
    wishlistGame: function () {
      axios
        .post("/wishlists", {
          user_id: localStorage.user_id,
          game_id: this.game[0].id,
          image_url: this.game[0].cover.url,
          title: this.game[0].name,
        })
        .catch((error) => {
          // console.log(error.response);
          this.errors = ["Game is already on your wishlist!"];
        });
      document.querySelector("#wishlist-add").showModal();
    },
    storeName: function () {
      axios
        .get("https://www.cheapshark.com/api/1.0/stores")
        .then((response) => {
          // console.log(response.data);
          this.stores = response.data;
        });
    },
  },
};
</script>
