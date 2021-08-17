<template>
 


  
  <section class="py-3">
    <div class="container">
      </div>
        <div class="container-fluid">
            <div class="row g-3 justify-content-center">
                <div class="col-lg-2" v-for="game in wishlist" v-bind:key="game.id" >
                    <div class="position-relative hover-scale">
                        <router-link class="stretched-link" v-bind:to="`/games/${game.game_id}`">
                          <img
                            v-if="game.image_url"
                            :src="game.image_url.replace('t_thumb', 't_1080p')"
                            :alt="game.title">
                          <img v-else :src="`https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png`">
                        </router-link>
                    </div>
                    <div class="removeButton">
                        <button v-on:click="removeGame(game)" class="btn btn-block btn-black w-100">Remove</button>
                    </div>
                    <big>Alert me when this game is under:</big>
                        <div id="priceInput" class="input-group w-50">
                          <span class="input-group-text">$</span>
                          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" v-model="alertPrice">
                          <span class="input-group-text">.00</span>
                        </div>
                    <div class="removeButton mt-2">
                        <button v-on:click="setAlert(game.on_sale)" class="btn btn-block btn-black w-100">Set alert
                        </button>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-center mb-3">
                  <button v-on:click="manageAlerts" class="btn btn-black me-md-2" type="button">Manage alerts</button>
                </div>
                </div>
                  <dialog id="alert-manage">
                    <form method="dialog">
                      <p>A link was sent to your email</p>
                      <p><button class="btn btn-block btn-black w-100">Close</button></p>
                    </form>
                  </dialog>
                  <dialog id="alert-confirm">
                    <form method="dialog">
                      <p class="justify-text-center">Alert set!</p>
                      <p><button class="btn btn-block btn-black w-100">Close</button></p>
                    </form>
                  </dialog>
                </div>
                
            </div>
        </div>

    </section>

</template>

<style>
.removeButton {
  margin: 1px;
}
#priceInput {
  margin: 0 auto;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      wishlist: [],
      message: "Wishlist Page",
      username: localStorage.username,
      email: localStorage.email,
      alertPrice: "",
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
    removeGame: function (game) {
      axios.delete(`/wishlists/${game.id}`).then((response) => {
        console.log(response.data);
        let index = this.wishlist.indexOf(game);
        this.wishlist.splice(index, 1);
      });
    },
    setAlert: function (game) {
      axios.get("https://www.cheapshark.com/api/1.0/alerts", {
        params: {
          action: "set",
          email: this.email,
          gameID: game,
          price: this.alertPrice,
        },
      });
      document.querySelector("#alert-confirm").showModal();
      console.log("alert set");
    },
    manageAlerts: function () {
      axios
        .get("https://www.cheapshark.com/api/1.0/alerts", {
          params: { action: "manage", email: this.email },
        })
        .then((response) => {
          console.log(response.data);
        });
      document.querySelector("#alert-manage").showModal();
    },
  },
};
</script>