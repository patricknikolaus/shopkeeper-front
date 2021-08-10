<template> 
  <div id="app">
    <header class="header-main bg-white header-dark header-option-1">
      <div class="header-top pt-3 pb-2 py-md-2 py-lg-4">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-6 col-lg-3 text-center text-md-start">
                      <!-- Logo -->
                      <a class="navbar-brand" href="/">
                          <img :src="`https://image.shutterstock.com/image-photo/concept-video-game-competition-esports-600w-1752952466.jpg`" title="" alt="">
                      </a>
                      <!-- Logo -->
                      <hr class="d-md-none mt-3 mb-2">
                  </div>
                  <div class="col-lg-6 d-none d-lg-block">
                      <!-- <img :src="`https://image.shutterstock.com/image-photo/concept-video-game-competition-esports-600w-1752952466.jpg`"> -->
                  </div>
                  <div class="col-md-6 col-lg-3">
                      <div class="nav flex-nowrap align-items-center justify-content-md-end header-right header-right-light w-100 w-md-auto position-relative">
                          <!-- Nav Search-->
                          <div class="nav-item dropdown position-static d-lg-none">
                              <a class="nav-link" href="#" role="button" id="dropdown_myaccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="bi bi-search"> </i>
                              </a>
                              <div class="dropdown-menu w-100 w-lg-auto">
                                  <form>
                                      <div class="input-group p-3">
                                          <!-- Search input -->
                                          <input class="form-control shadow-none" type="text" name="search" placeholder="What are you looking for?">
                                          <!-- Search button -->
                                          <button type="button" class="btn btn-primary shadow-none">
                                              <i class="bi bi-search"></i>
                                          </button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                          <!-- Acount -->
                          <!-- Wishlist -->
                          
                          <!-- Cart -->
                        <div class="menuToggle">
                          <div class="nav-item me-md-0 me-lg-0">
                              <a class="nav-link" data-bs-toggle="modal" data-bs-target="#modalMiniCart" href="/wishlists" v-on:click="getWishlist">
                                  <span class="">
                                      <h1 class="bi-border-width"></h1>
                                  </span>
                              </a>
                          </div>
                        </div>
                          <!-- Mobile Toggle -->
                          <button class="navbar-toggler navbar-toggler-px-light ms-auto ms-md-0 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                          <!-- End Mobile Toggle -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal px-modal-right fade" id="modalMiniCart" tabindex="-1" role="dialog" aria-hidden="true">
  <!-- Shopping Cart -->
  <div class="modal-dialog px-modal-vertical">
      <div class="modal-content">
        <div class="mt-auto p-2 pt-0">
              <div class="pt-4">
                  <a type="button" class="btn btn-close w-100 mb-3" data-bs-dismiss="modal"></a>
                  <a class="btn btn-block btn-dark w-100 mb-3" href="/">Home</a>
                  <a v-if="!isLoggedIn()" class="btn btn-block btn-dark w-100 mb-3" href="/login">Login</a>
                  <a v-if="isLoggedIn()" class="btn btn-block btn-dark w-100 mb-3" href="/logout">Logout</a>
                  <a v-if="!isLoggedIn()" class="btn btn-block btn-dark w-100 mb-3" href="/users">Signup</a>
                  <!-- <a v-if="isLoggedIn()" class="btn btn-block btn-dark w-100 mb-3" href="/wishlists">Wishlist</a> -->
              </div>
          </div>
          <!-- Header-->
          <div class="modal-header border-top">
              <!-- <h6 class="m-0 fw-bold textcenter"> -->
                <a v-if="isLoggedIn()" class="btn btn-block btn-dark w-100 mb-0" href="/wishlists">Wishlist</a>
              
              <!-- Close -->
          </div>
          <div class="modal-body">
              <!-- List group -->
              <ul class="list-unstyled m-0 p-0">
                  <li class="py-0 border-bottom">
                     
                          <div class="col-12" v-for="game in wishlist">
                            <h3>{{ game.title }}</h3>
                            <a :href="`/games/${game.game_id}`"><img
                              v-if="game.image_url"
                              :src="game.image_url.replace('t_thumb', 't_1080p')"
                              :alt="game.title">
                            <img v-else src="/no_image_found.jpeg" /></a>
                            <button class="btn btn-block btn-danger w-100 mb-0" v-on:click="removeGame(game)">Remove</button>
                            <hr>
                              <!-- Title -->
                              <p class="mb-2">
                                  <a class="text-dark fw-500" href="#"></a>
                                  <span class="m-0 text-muted w-100 d-block"></span>
                              </p>
                              <!--Footer -->
                              <div class="d-flex align-items-center">
                                  <!-- Select -->
                                  <!-- Remove -->
                              </div>
                          <!-- </div> -->
                      </div>
                  </li>
              </ul>
          </div>
          <!-- Footer -->
          
          <!-- Buttons -->
      </div>
  </div>
</div>
      <!-- End Top Header -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-black py-3">
          <div class="container">
              <!-- Menu -->
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto">
                      <li class="nav-item">
                          <a href="#" class="nav-link"></a>
                          <label></label>
                          <div class="dropdown-menu left shadow-lg">
                          </div>
                      </li>
                  </ul>
              </div>
              <!-- End Menu -->
          </div>
      </nav>
    </header>  

    <router-view/>

    <footer class="bg-dark footer footer-border-top light">
      <div class="footer-top py-6">
          <div class="container">
              <div class="row">
                  <div class="col-sm-6 col-lg-3 my-3">
                      <h6 class="text-uppercase mb-5 text-white">
                          Support
                      </h6>
                      <ul class="list-unstyled white-link footer-link-1 m-0">
                          <li class="pb-2">
                              <a href="#">Help</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Contact Us</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Feedback</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Unsubscribe</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Reservations</a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-sm-6 col-lg-3 my-3">
                      <h6 class="text-uppercase mb-5 text-white">
                          Policies
                      </h6>
                      <ul class="list-unstyled white-link footer-link-1 m-0">
                          <li class="pb-2">
                              <a href="#">Privacy Policy</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Terms of use</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Gift card conditions</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Shipping</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Return</a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-sm-6 col-lg-3 my-3">
                      <h6 class="text-uppercase mb-5 text-white">
                          Categories
                      </h6>
                      <ul class="list-unstyled white-link footer-link-1 m-0">
                          <li class="pb-2">
                              <a href="#">Men</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Women</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Accessories</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Shoes</a>
                          </li>
                          <li class="pb-2">
                              <a href="#">Denim</a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-sm-6 col-lg-3 my-3">
                      <h6 class="text-uppercase mb-5 text-white">
                          Stay up to date
                      </h6>
                      <p class="text-white-85">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>
                      <form>
                          <div class="input-group">
                              <input type="email" class="form-control" placeholder="Enter your email">
                              <button class="btn btn-primary" type="submit"><i class="bi bi-envelope"></i></button>
                          </div>
                          <p class="m-0 text-white-85">New UI kits or big discounts. Never spam.</p>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-bottom py-2 footer-border-top light small">
          <div class="container">
              <div class="row">
                  <div class="col-md-6 text-center text-md-start py-1">
                      <p class="m-0 text-white-85">© 2021 copyright by <a href="#" class="text-reset">pxdraft</a></p>
                  </div>
                  <div class="col-md-6 text-center text-md-end py-1">
                      <img src="" title="" alt="">
                  </div>
              </div>
          </div>
      </div>
    </footer>
  </div>
</template>

<style>
.menuToggle {
  width: 0%;
  align-items: flex;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      games: [],
      search: "",
      wishlist: [],
    };
  },
  created: function () {
    this.getWishlist();
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
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