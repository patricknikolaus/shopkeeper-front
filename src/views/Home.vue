<template>
  <section class="py-3">
    <div class="container">
      <div class="searchbar">
        <div class="input-group">
          <button class="btn2 btn-dark btn-md shadow-none px-3" v-on:click="searchGame">
            <i class="bi bi-shuffle"></i>
          </button>
          <input class="form-control form-control-lg shadow-none px-2" type="text" v-model="search" v-on:keyup.enter="searchGame" placeholder="Khajiit has wares, if you have coin...">
          <button class="btn2 btn-dark btn-md shadow-none px-3" v-on:click="searchGame">
            <i class="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
      </div>
        <div class="container-fluid">
          <div class="row g-3 justify-content-center">
            <div class="col-lg-2" v-for="game in games" >
              <div class="position-relative hover-scale">
                <router-link class="stretched-link" v-bind:to="`/games/${game.id}`"></router-link>
                <div class="hover-scale-in">
                    <img class="wd-100" v-if="game.cover"
                    :src="game.cover.url.replace('t_thumb', 't_1080p')" height="325px" width="250"  title="" :alt="game.name">
                    <img v-else :src="`https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png`">
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>
  


<style>
.searchbar {
  width: 500px;
  height: 70px;
  margin: 0 auto;
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
      username: [],
      wishlist: [],
      quotes: ["hello", "goodbye", "today", "tomorrow"],
    };
  },
  created: function () {
    this.getUsername();
    this.onLoad();
    this.getWishlist();
  },
  methods: {
    searchGame: function () {
      axios.post("/games", { search: this.search }).then((response) => {
        this.games = response.data;
      });
    },
    getUsername: function () {
      this.username = localStorage.username;
    },
    onLoad: function () {
      axios.post("/games", { search: this.search }).then((response) => {
        this.games = response.data;
      });
    },
    getWishlist: function () {
      axios.get("/wishlists").then((response) => {
        this.wishlist = response.data;
        this.username = localStorage.username;
      });
    },
    removeGame: function (game) {
      axios.delete(`/wishlists/${game.id}`).then((response) => {
        let index = this.wishlist.indexOf(game);
        this.wishlist.splice(index, 1);
      });
    },
  },
};
</script>
