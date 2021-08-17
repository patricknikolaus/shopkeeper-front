<template> 
  <div id="app">
    <header class="header-main bg-white header-dark header-option-1">
      
      <nav>
        <div class="col-md-12">
          <img src="../public/static/img/header2.png" title="" alt="">
        </div> 
        <!-- <div class="col-lg-6 d-none d-lg-block">
                      <a href="/"><img src="../public/static/img/banner2.jpg"></a>
                  </div> -->
      </nav>
      <div class="header-top">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-1 col-lg-3 text-center text-md-start">
                      <!-- Logo -->
                      <a class="navbar-brand" href="/">
                          <!-- <img src="../public/static/img/banner2.jpg"title="" alt=""> -->
                      </a>
                      <!-- Logo -->
                      <hr class="d-md-none mt-3 mb-2">
                  </div>
                  <div class="col-lg-6 d-none d-lg-block">
                      <a href="/"><img src="../public/static/img/banner2.jpg"></a>
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
                          
                        <div class="nav-item">
                              <a class="nav-link" href="/"><h2 class="bi-arrow-clockwise"></h2></a>
                        </div>
                         <!-- Cart -->
                        <div class="menuToggle">
                          <div class="nav-item me-md-0 me-lg-0">
                              
                              <a class="nav-link" data-bs-toggle="modal" data-bs-target="#modalMiniCart" href="/wishlists" v-on:click="getWishlist">
                                  
                                      <h2 class="bi-grid-3x3-gap-fill"></h2>
                                      
                                   
                              </a>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal px-modal-right fade" id="modalMiniCart" tabindex="-1" role="dialog" aria-hidden="true">
  <!-- Shopping Cart -->
  <div class="modal-dialog px-modal-vertical bg-white">
      <div class="modal-content bg-white">
        <div class="mt-auto p-2 pt-0 sticky-sm-top bg-white">
              <div class="pt-4">
                  <a type="button" class="btn btn-block w-100 mb-1" data-bs-dismiss="modal"><img src="../public/static/img/close.png" width="20px" height="20px"></a>
                  <a class="btn btn-block btn-black w-100 mb-1" href="/"><big>Home</big></a>
                  <a v-if="!isLoggedIn()" class="btn btn-block btn-black w-100 mb-1" href="/login"><big>Login</big></a>
                  <a v-if="isLoggedIn()" class="btn btn-block btn-black w-100 mb-1" href="/logout"><big>Logout</big></a>
                  <a v-if="!isLoggedIn()" class="btn btn-block btn-black w-100 mb-1" href="/users"><big>Sign Up</big></a>
                  <!-- <a v-if="isLoggedIn()" class="btn btn-block btn-dark w-100 mb-3" href="/wishlists">Wishlist</a> -->
                  <div v-if="isLoggedIn()"><a href="/wishlists"><img src="../public/static/img/wishlistDarker.png" width="1050" height=65></a></div>
              </div>
          </div>
          <!-- Header-->
        <!-- <div class="modal-header bg-white sticky-lg-top"> -->
          <!-- <div v-if="isLoggedIn()"><a href="/wishlists"><img src="../public/static/img/wishlistDarker.png" width="1050" height=65></a></div> -->
          <!-- </div> -->
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
<!-- <nav class="navbar navbar-expand-md navbar-dark bg-white py-3">
  <div class="col-md-12">
    <img src="../public/static/img/header1.jpg" title="" alt="">
  </div> 
</nav> -->
      <!-- End Top Header -->
      
    </header>  

    <router-view/>

    <footer>  
      <!-- <div class="col-md-12 py-5"> -->
          <img src="../public/static/img/footer3.jpg" title="" alt="">
      
                   
        
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
        // console.log(response.data);
        this.wishlist = response.data;
        this.username = localStorage.username;
      });
    },
    removeGame: function (game) {
      axios.delete(`/wishlists/${game.id}`).then((response) => {
        // console.log(response.data);
        let index = this.wishlist.indexOf(game);
        this.wishlist.splice(index, 1);
        this.wishlisted = false;
      });
    },
  },
};
</script>