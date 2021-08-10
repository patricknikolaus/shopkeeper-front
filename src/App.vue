<template> 
  <div id="app">
    <header class="header-main bg-white header-dark header-option-1">
      <div class="header-top pt-3 pb-2 py-md-2 py-lg-4">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-6 col-lg-3 text-center text-md-start">
                      <!-- Logo -->
                      <a class="navbar-brand" href="">
                          <img src="" title="" alt="">
                      </a>
                      <!-- Logo -->
                      <hr class="d-md-none mt-3 mb-2">
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
                          <div class="nav-item dropdown">
                              <a class="nav-link" href="#" role="button" id="dropdown_myaccount" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false">
                                  <i class="bi bi-person-circle"> </i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-hover right shadow" aria-labelledby="dropdown_myaccount">
                                  <a class="dropdown-item" href="">Login</a>
                                  <a class="dropdown-item" href="">Register</a>
                                  <a class="dropdown-item" href="">Wishlist</a>
                                  <a class="dropdown-item" href="">My account</a>
                              </div>
                          </div>
                          <!-- Wishlist -->
                          <div class="nav-item">
                              <a class="nav-link" href="#">
                                  <i class="bi bi-heart"> </i>
                              </a>
                          </div>
                          <!-- Cart -->
                          <div class="nav-item me-md-3 me-lg-0">
                              <a class="nav-link" data-bs-toggle="modal" data-bs-target="#modalMiniCart" href="javascript:void(0)">
                                  <span class="" data-cart-items="8">
                                      <i class="bi bi-cart"> </i>
                                  </span>
                              </a>
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
      <!-- End Top Header -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
          <div class="container">
              <!-- Menu -->
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto">
                      <li class="nav-item">
                          <a href="/" class="nav-link">Home</a>
                          <label class="px-dropdown-toggle mob-menu"></label>
                      </li>
                      <li class="nav-item">
                          <a href="" class="nav-link">Pages</a>
                          <label class="px-dropdown-toggle mob-menu"></label>
                          <ul class="dropdown-menu left list-unstyled">
                              <li><a class="dropdown-item" href="">About</a></li>
                              <li><a class="dropdown-item" href="">FAQ's</a></li>
                              <li><a class="dropdown-item" href="">Contact Us</a></li>
                          </ul>
                      </li>
                      <li class="dropdown dropdown-full nav-item">
                          <a href="#" class="nav-link">Shop</a>
                          <label class="px-dropdown-toggle mob-menu"></label>
                          <div class="dropdown-menu dropdown-menu-lg py-lg-2">
                              <div class="container px-0">
                                  <div class="row g-0">
                                      <div class="col-md-6 my-3">
                                          <h6 class="px-3">Shop Style</h6>
                                          <ul class="list-unstyled">
                                              <li>
                                                  <a href="" class="dropdown-item">Shop Default</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Shop Filter</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Shop Full Width</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Shop Full Width Right</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Shop Full Width No Filter</a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div class="col-md-6 my-3">
                                          <h6 class="px-3">Product Pages</h6>
                                          <ul class="list-unstyled">
                                              <li>
                                                  <a href="" class="dropdown-item">Product Details 01</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Product Details 02</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Product Details 03</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Product Details 04</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Product Details 05</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li class="dropdown dropdown-full nav-item">
                          <a href="#" class="nav-link">Categories</a>
                          <label class="px-dropdown-toggle mob-menu"></label>
                          <div class="dropdown-menu dropdown-mega-menu py-3">
                              <div class="container">
                                  <div class="row g-3">
                                      <div class="col-sm-6 col-md-4 col-lg-2">
                                          <div class="hover-scale position-relative mb-3">
                                              <div class="hover-scale-in">
                                                  <a href="#">
                                                      <img src="" title="" alt="">
                                                  </a>
                                              </div>
                                              <div class="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                                                  <h5 class="m-0 h6 bg-white px-3 py-2"><a class="text-reset link-effect" href="#">Categories</a></h5>
                                              </div>
                                          </div>
                                          <ul class="list-unstyled link-style-1">
                                              <li><a href="#">Scarf</a></li>
                                              <li><a href="#">Shirt</a></li>
                                              <li><a href="#">Shoes</a></li>
                                              <li><a href="#">Shorts</a></li>
                                              <li><a href="#">Summer</a></li>
                                              <li><a href="#">Sunglasses</a></li>
                                              <li><a href="#">Vintage</a></li>
                                          </ul>
                                      </div>
                                      <div class="col-sm-6 col-md-4 col-lg-2">
                                          <div class="hover-scale position-relative mb-3">
                                              <div class="hover-scale-in">
                                                  <a href="#">
                                                      <img src="" title="" alt="">
                                                  </a>
                                              </div>
                                              <div class="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                                                  <h5 class="m-0 h6 bg-white px-3 py-2"><a class="text-reset link-effect" href="#">Categories</a></h5>
                                              </div>
                                          </div>
                                          <ul class="list-unstyled link-style-1">
                                              <li><a href="#">Scarf</a></li>
                                              <li><a href="#">Shirt</a></li>
                                              <li><a href="#">Shoes</a></li>
                                              <li><a href="#">Shorts</a></li>
                                              <li><a href="#">Summer</a></li>
                                              <li><a href="#">Sunglasses</a></li>
                                              <li><a href="#">Vintage</a></li>
                                          </ul>
                                      </div>
                                      <div class="col-sm-6 col-md-4 col-lg-2">
                                          <div class="hover-scale position-relative mb-3">
                                              <div class="hover-scale-in">
                                                  <a href="#">
                                                      <img src="" title="" alt="">
                                                  </a>
                                              </div>
                                              <div class="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                                                  <h5 class="m-0 h6 bg-white px-3 py-2"><a class="text-reset link-effect" href="#">Categories</a></h5>
                                              </div>
                                          </div>
                                          <ul class="list-unstyled link-style-1">
                                              <li><a href="#">Scarf</a></li>
                                              <li><a href="#">Shirt</a></li>
                                              <li><a href="#">Shoes</a></li>
                                              <li><a href="#">Shorts</a></li>
                                              <li><a href="#">Summer</a></li>
                                              <li><a href="#">Sunglasses</a></li>
                                              <li><a href="#">Vintage</a></li>
                                          </ul>
                                      </div>
                                      <div class="col-sm-6 col-md-4 col-lg-2">
                                          <div class="hover-scale position-relative mb-3">
                                              <div class="hover-scale-in">
                                                  <a href="#">
                                                      <img src="" title="" alt="">
                                                  </a>
                                              </div>
                                              <div class="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                                                  <h5 class="m-0 h6 bg-white px-3 py-2"><a class="text-reset link-effect" href="#">Categories</a></h5>
                                              </div>
                                          </div>
                                          <ul class="list-unstyled link-style-1">
                                              <li><a href="#">Scarf</a></li>
                                              <li><a href="#">Shirt</a></li>
                                              <li><a href="#">Shoes</a></li>
                                              <li><a href="#">Shorts</a></li>
                                              <li><a href="#">Summer</a></li>
                                              <li><a href="#">Sunglasses</a></li>
                                              <li><a href="#">Vintage</a></li>
                                          </ul>
                                      </div>
                                      <div class="col-sm-6 col-md-4 col-lg-2">
                                          <div class="hover-scale position-relative mb-3">
                                              <div class="hover-scale-in">
                                                  <a href="#">
                                                      <img src="" title="" alt="">
                                                  </a>
                                              </div>
                                              <div class="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                                                  <h5 class="m-0 h6 bg-white px-3 py-2"><a class="text-reset link-effect" href="#">Categories</a></h5>
                                              </div>
                                          </div>
                                          <ul class="list-unstyled link-style-1">
                                              <li><a href="#">Scarf</a></li>
                                              <li><a href="#">Shirt</a></li>
                                              <li><a href="#">Shoes</a></li>
                                              <li><a href="#">Shorts</a></li>
                                              <li><a href="#">Summer</a></li>
                                              <li><a href="#">Sunglasses</a></li>
                                              <li><a href="#">Vintage</a></li>
                                          </ul>
                                      </div>
                                      <div class="col-sm-6 col-md-4 col-lg-2">
                                          <div class="hover-scale position-relative mb-3">
                                              <div class="hover-scale-in">
                                                  <a href="#">
                                                      <img src="" title="" alt="">
                                                  </a>
                                              </div>
                                              <div class="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                                                  <h5 class="m-0 h6 bg-white px-3 py-2"><a class="text-reset link-effect" href="#">Categories</a></h5>
                                              </div>
                                          </div>
                                          <ul class="list-unstyled link-style-1">
                                              <li><a href="#">Scarf</a></li>
                                              <li><a href="#">Shirt</a></li>
                                              <li><a href="#">Shoes</a></li>
                                              <li><a href="#">Shorts</a></li>
                                              <li><a href="#">Summer</a></li>
                                              <li><a href="#">Sunglasses</a></li>
                                              <li><a href="#">Vintage</a></li>
                                          </ul>
                                      </div>
                                      <div class="col-12">
                                          <div class="d-flex rounded w-100 align-items-center justify-content-center mx-2 py-4 position-relative bg-cover bg-center bg-no-repeat" style="background-image: url(../static/img/1000x1000.jpg);">
                                              <div class="text-center">
                                                  <h5 class="text-white">Flat 20% Off</h5>
                                                  <h2 class="text-white h2 m-0"><a class="stretched-link text-reset" href="#">Big Sale Offer</a></h2>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li class="dropdown dropdown-full nav-item">
                          <a href="#" class="nav-link">Account</a>
                          <label class="px-dropdown-toggle mob-menu"></label>
                          <div class="dropdown-menu dropdown-menu-lg py-lg-2">
                              <div class="container px-0">
                                  <div class="row g-0">
                                      <div class="col-md-6 my-3">
                                          <h6 class="px-3">Account</h6>
                                          <ul class="list-unstyled">
                                              <li>
                                                  <a href="" class="dropdown-item">Login </a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Sign up</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Forgot Password</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Wishlist</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Shopping Cart </a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">My Account</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Checkout</a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div class="col-md-6 my-3">
                                          <h6 class="px-3">My Account Option 2 </h6>
                                          <ul class="list-unstyled">
                                              <li>
                                                  <a href="" class="dropdown-item">Account Address</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Account Order</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Account Payment</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Account Profile</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Account Tickets</a>
                                              </li>
                                              <li>
                                                  <a href="" class="dropdown-item">Account Wishlist</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li class="dropdown nav-item">
                          <a href="#" class="nav-link">Blog</a>
                          <label class="px-dropdown-toggle mob-menu"></label>
                          <div class="dropdown-menu left shadow-lg">
                              <a class="dropdown-item" href="">Blog</a>
                              <a class="dropdown-item" href="">Blog Single</a>
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
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      games: [],
      search: "",
    };
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
  },
};
</script>