<template>
  <!-- <div class="wishlist">
    <h1>{{ username }}'s Wishlist</h1>
    <div v-for="game in wishlist" v-bind:key="game.id">
      <p><router-link v-bind:to="`/games/${game.game_id}`"><img
            v-if="game.image_url"
            :src="game.image_url.replace('t_thumb', 't_1080p')"
            :alt="game.title">
          <img v-else src="/no_image_found.jpeg" /></router-link></p>
      <div v-if="game.on_sale === 1"><h1>ON SALE</h1></div>
      <h2>{{ game.title }}</h2>
      <button v-on:click="removeGame(game)">remove</button>
      <hr>
    </div>
  </div> -->

  
  <section class="py-3">
    <div class="container">
        <!-- <div class="searchbar">
            <div class="input-group">
                <input class="form-control form-control-lg shadow-none px-2" type="text" v-model="search" v-on:keyup.enter="searchGame" placeholder="Khajiit has wares, if you have coin...">
                <button class="btn2 btn-dark btn-md shadow-none px-3" v-on:click="searchGame">
                    <i class="bi bi-joystick"></i>
                </button>
            </div>
        </div> -->
      </div>
        <div class="container-fluid">
            <div class="row g-3 justify-content-center">
                <div class="col-lg-2" v-for="game in wishlist" v-bind:key="game.id" >
                    <div class="position-relative hover-scale">
                        <router-link class="stretched-link" v-bind:to="`/games/${game.game_id}`"></router-link>
                        <div class="hover-scale-in">
                            <img
                              v-if="game.image_url"
                              :src="game.image_url.replace('t_thumb', 't_1080p')"
                              :alt="game.title">
                            <img v-else :src="`https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png`">
                        </div>
                        <button type="button" class="btn btn-dark" v-on:click="removeGame(game)">Remove</button>
      <!-- <button >remove</button> -->
                    </div>
                </div>
            </div>
        </div>
    </section>

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