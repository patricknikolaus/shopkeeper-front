<template>
<section class="py-3">
<div class="container">
    <div class="searchbar">
        <form>
            <div class="input-group">
                <!-- Search input -->
                <input class="form-control form-control-lg shadow-none px-" type="text" v-model="search" v-on:keyup.enter="searchGame" :placeholder="`Welcome to Shopkeeper ${this.username}!`">
                <!-- Search button -->
                <button class="btn btn-dark btn-sm shadow-none px-3" v-on:click="searchGame">
                    <i class="bi bi-search"></i>
                </button>
            </div>
        </form>
    </div>
  </div>
    <div class="container-fluid">
        <div class="row g-3">
            <div class="col-lg-2" v-for="game in games" >
                <div class="position-relative hover-scale">
                    <router-link class="stretched-link" v-bind:to="`/games/${game.id}`"></router-link>
                    <div class="hover-scale-in">
                        <img class="wd-50" v-if="game.cover"
                        :src="game.cover.url.replace('t_thumb', 't_1080p')" width="400" height="450" title="" :alt="game.name">
                        <img v-else :src="`https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png`">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>
  <!-- <div class="home">
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
      </div>
    </div>
  </div> -->


<style>
.searchbar {
  width: 500px;
  height: 70px;
  /* align-items: flex-end; */
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
