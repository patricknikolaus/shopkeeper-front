<div class="home">
    <h1>{{ message }}</h1>
    <!-- COVER -->
    <div class="cover">
      <img v-if="game[0].cover" :src="game[0].cover.url.replace('t_thumb', 't_1080p')" :alt="game[0].name"><img v-else src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" />
    </div>
    <!-- END COVER -->
    <!-- TITLE -->
    <div class="title">
      <h2>{{ game[0].name }}</h2>
    </div>
    <!-- END TITLE -->
    <!-- WISHLIST BUTTON -->
    <div class="wishlistButton">
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
    </div>
    <!-- END WISHLIST BUTTON -->
    <!-- TWITCH -->
    <div class="twitch">
      <a :href="`https://www.twitch.tv/directory/game/` + game[0].name.split(' ').join('%20')" target="_blank">
        <img class="twitchIcon" src="../assets/twitch.png"/>
      </a> View gameplay on Twitch!
    </div>
    <!-- TWITCH END -->
    <!-- GENRES -->
    <div class="genres">
      <p v-for="genre in game[0].genres">{{ genre.name }}</h2>
      <h2>{{ Math.round(game[0].rating) }}/100</h2>
      <h4>{{ game[0].summary }}</h4>
    </div>
    <!-- END GENRES -->
    <!-- VIDEOS -->
    <div class="videos" v-for="video in videos">
      <youtube :video-id="video.video_id" player-width="640" player-height="370"></youtube> 
    </div>
    <!-- END VIDEO -->
    <!-- SCREENSHOT -->
    <div class="screenshot" v-for="screenshot in screenshots">
        <img v-if="screenshot.url" :src="screenshot.url.replace('t_thumb', 't_1080p')" :alt="game[0].name">
        <img v-else src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" />
    </div>
    <!-- END SCREENSHOT -->
    <!-- SIMILAR GAMES -->
    <div v-for="similar in similarGames">
      <a v-bind:href="`/games/${similar.id}`"><img :src="similar.image_url"></a>
    </div>
    <!-- END SIMILAR GAMES -->
    <hr>
    <!-- PRICES -->
    <div class="prices" v-for="price in prices">
      <div v-for="store in stores">
        <div v-if="price.storeID === store.storeID">
          <a :href="store.link + game[0].name" target="_blank"><img :src="`https://www.cheapshark.com/`+ store.images.logo"></a>
          {{ store.storeName }}
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
    <!-- END PRICES -->
    </div>
  </div>

<template>

<main>
  <section class="product-details py-6">
    
        <div class="container">
          
            <div class="row align-items-start">
                <!-- Product Gallery -->
                <div class="col-lg-6 lightbox-gallery product-gallery sticky-sm-top">
                    <div>
                        <div>
                            <img v-if="game[0].cover" :src="game[0].cover.url.replace('t_thumb', 't_1080p')" width="2000" :alt="game[0].name"><img v-else src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-3 pt-3 pt-lg-1">
                    <div class="product-detail">
                        <div class="products-title mb-1">
                            <h1 class="h1">{{ game[0].name }}</h1>
                        </div>
                          <li v-for="(genre, index) in game[0].genres"><p v-if="index === game[0].genres.length - 1">{{ ` `+ genre.name + ` `}}</p><p v-else> {{ ` `+ genre.name +` ` }}/</p></li>
                        <div>
                          <h3 v-if="game[0].rating >= 80" class="text-success">{{ Math.round(game[0].rating) }}/100</h3>
                          <h3 v-else-if="game[0].rating > 50" class="text-warning">{{ Math.round(game[0].rating) }}/100</h3>
                          <h3 v-else class="text-danger">{{ Math.round(game[0].rating) }}/100</h3>
                        </div>
                        <div class="product-description">
                            <p>{{ game[0].summary }}</p>
                        </div>
                        </div>         
                        <div class="product-detail-actions d-flex flex-wrap pt-3">
                            <div class="cart-button mb-3 d-flex">
                              <div v-if="isLoggedIn()">
                                <h4 v-if="wishlisted === false"><button class="btn btn-success me-3 btn-lg" v-on:click="wishlistGame">
                                  Add to wishlist
                                </button></h4>
                                <h4 v-else-if="wishlisted === true"><button class="btn btn-danger me-3 btn-lg" v-on:click="removeGame()">
                                  Remove from wishlist
                                </button></h4>
                              </div>
                                <div>
                                  <!-- <a :href="`https://www.twitch.tv/directory/game/` + game[0].name.split(' ').join('%20')" target="_blank">
                                  <img class="twitchIcon" src="../../public/static/img/twitchbanner2.jpeg" width="34%"> -->
                                  <!-- <h4><button class="btn me-3">View on Twitch</button></h4> -->
                                <a :href="`https://www.twitch.tv/directory/game/` + game[0].name.split(' ').join('%20')" target="_blank">
                                  <button type="button" class="btn btn-secondary btn-lg">View on Twitch</button>
                                </a>
                                </div>
                                <div></div>
                            </div>
                            
                            

                            <!-- <div class="screenshotCarousel" v-if="screenshots != null">
                              <img src="../../public/static/img/screenshots.jpg" width="50%" class="pb-1">
                              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                  <div class="carousel-item" v-for="(screenshot, index) in screenshots" :class="{ active: index===0}">
                                    <img :src="screenshot.url.replace('t_thumb', 't_1080p')" class="d-block w-100" alt="">
                                  </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Next</span>
                                </button>
                              </div>
                            </div> -->

                            <div class="screenshotCarousel pb-2">
                              <img src="../../public/static/img/screenshots.jpg" width="50%" class="pb-1">
                              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                  <div class="carousel-item" v-for="(screenshot, index) in screenshots" :class="{ active: index===0}" data-bs-interval="1000000">
                                    <img :src="screenshot.url.replace('t_thumb', 't_1080p')" class="d-block w-100" alt="">
                                  </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Next</span>
                                </button>
                              </div>
                            </div>
                            
                            
                            <div class="videoCarousel" v-if="videos != null">
                              <img src="../../public/static/img/videos.jpg" width="50%" class="pb-1">
                              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                  <div class="carousel-item" v-for="(video, index) in videos" :class="{ active: index===0}">
                                    <youtube :video-id="video.video_id" player-width="635" player-height="370" class="d-block w-100"></youtube>
                                  </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Next</span>
                                </button>
                              </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>

<section class="section bg-gray-500">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-2 my-2" v-for="price in prices">
      <div class="product-card">
        <div v-for="(store, index) in stores">
          <div v-if="price.storeID === store.storeID">
            <div v-if="price.isOnSale === '1'">
              <div class="product-card-image">
                <div class="product-media position-relative">
                    <div class="badge-ribbon position-absolute top-0 start-0">
                      <h4> <span class="badge bg-danger"><small>{{ Math.round(price.savings) }}%<div>OFF</div></small></span></h4>
                    </div>
                    <a :href="`https://www.cheapshark.com/redirect?dealID=`+ price.dealID" target="_blank">
                        <img class="img-fluid" :src="`https://www.cheapshark.com/`+ store.images.logo">
                    </a> 
                </div>
              </div>
                <div class="product-card-info">  
                  <div class="product-price position-relative">
                    <h4><span class="badge bg-success position-absolute bottom-0 start-50 translate-middle-x">
                    <span class="text-white">${{ price.salePrice }}</span>
                      <div>
                        <del class="fs-sm text-dark">${{ price.normalPrice }}</del>
                      </div>
                    </span></h4>  
                    </div>               
                  </div>
                </div>
                <!-- ELSE -->
                <div v-else>
                  <div class="product-card-image">
                  <div class="product-media position-relative">
                      <a :href="store.link + game[0].name" target="_blank">
                          <img class="img-fluid" :src="`https://www.cheapshark.com/`+ store.images.logo">
                      </a> 
                  </div>
                </div>
                  <div class="product-card-info">  
                    <div class="product-price position-relative">
                      <h4><span class="badge bg-success position-absolute bottom-0 start-50 translate-middle-x">
                      <span class="text-white">${{ price.normalPrice }}</span>
                      </span></h4>  
                      </div>               
                    </div>
                  </div>
                </div>
                <!-- end else -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    <section class="section bg-white">
            <div class="container">
                <div class="row justify-content-center mb-7 mb-lg-7">
                    <div class="col-lg-6 text-center">
                        <img src="../../public/static/img/ymlt.png">
                    </div>
                </div>
                <div class="row g-1">
                    <div class="col-sm-2" v-for="similar in similarGames">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="product-media">
                                    <a :href="`/games/${similar.id}`">
                                        <img :src="similar.image_url">
                                    </a>
                                    <div class="product-cart-btn">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
  </main>
  

  
</template>


<style>
li {
  display: inline-block;
  /* You can also add some margins here to make it look prettier */
  zoom: 1;
  *display: inline;
  /* this fix is needed for IE7- */
}
.product-price2 {
  margin: 0, auto;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      game: [],
      prices: [],
      title: "",
      stores: [],
      screenshots: [],
      videos: [],
      boxart: [],
      similarGames: [],
      onSale: 0,
      wishlist: [],
      wishlisted: false,
      wishlistID: 0,
    };
  },
  mounted: function () {},
  created: function () {
    this.gameShow();
  },
  methods: {
    gameShow: function () {
      axios.post(`/games/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.game = response.data;
        this.similarGames = response.data[0].similar_games;
        this.title = response.data[0].name.split(" ").join("").toLowerCase();
        this.screenshots = response.data[0].screenshots;
        this.videos = response.data[0].videos;
        this.gamePrice();
        this.storeName();
        this.getBoxarts();
        this.getWishlist();
      });
    },
    gamePrice: function () {
      axios
        .get("https://www.cheapshark.com/api/1.0/deals", {
          params: { title: this.title, exact: 1 },
        })
        .then((response) => {
          this.prices = response.data;
          console.log(response.data);
        });
    },
    storeName: function () {
      axios
        .get("https://www.cheapshark.com/api/1.0/stores")
        .then((response) => {
          this.stores = response.data;
          // this.addStoreLinks();
        });
    },
    getBoxarts: function () {
      this.similarGames.forEach((game) => {
        axios.get("/covers/" + `${game.id}`).then((response) => {
          this.$set(game, "image_url", response.data.image);
        });
      });
    },
    // addStoreLinks: function () {
    //   this.stores.forEach((store) => {
    //     if (store.storeID === "1") {
    //       store["link"] = "https://store.steampowered.com/search/?term=";
    //     } else if (store.storeID === "2") {
    //       store["link"] = "https://www.gamersgate.com/games/?query=";
    //     } else if (store.storeID === "3") {
    //       store["link"] = "https://www.greenmangaming.com/search?query=";
    //     } else if (store.storeID === "6") {
    //       store["link"] = "https://www.direct2drive.com/#!/search?q=";
    //     } else if (store.storeID === "7") {
    //       store["link"] = "https://www.gog.com/games?search=";
    //     } else if (store.storeID === "8") {
    //       store["link"] =
    //         "https://www.origin.com/usa/en-us/search?searchString=";
    //     } else if (store.storeID === "11") {
    //       store["link"] = "https://www.humblebundle.com/store/search?search=";
    //     } else if (store.storeID === "13") {
    //       store["link"] = "https://store.ubi.com/us/home/?lang=en_US";
    //     } else if (store.storeID === "15") {
    //       store["link"] = "https://www.fanatical.com/en/search?search=";
    //     } else if (store.storeID === "21") {
    //       store["link"] = "https://www.wingamestore.com/search/?SearchWord=";
    //     } else if (store.storeID === "23") {
    //       store["link"] = "https://www.gamebillet.com/search?q=";
    //     } else if (store.storeID === "24") {
    //       store["link"] = "https://www.voidu.com/en/search?q=";
    //     } else if (store.storeID === "25") {
    //       store["link"] = "https://www.epicgames.com/store/en-US/browse?q=";
    //     } else if (store.storeID === "27") {
    //       store["link"] = "https://us.gamesplanet.com/search?query=";
    //     } else if (store.storeID === "28") {
    //       store["link"] = "https://www.gamesload.com/results.html?search=";
    //     } else if (store.storeID === "29") {
    //       store["link"] = "https://2game.com/en-us/catalogsearch/result/?q=";
    //     } else if (store.storeID === "30") {
    //       store["link"] = "https://www.indiegala.com/search/";
    //     } else if (store.storeID === "31") {
    //       store["link"] = "https://us.shop.battle.net/en-us/family/";
    //     } else if (store.storeID === "32") {
    //       store["link"] = "https://www.allyouplay.com/en/search?q=";
    //     }
    //   });
    // },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getWishlist: function () {
      axios.get("/wishlists").then((response) => {
        console.log(response.data);
        this.wishlist = response.data;
        this.username = localStorage.username;
        this.wishlist.forEach((list) => {
          if (list.game_id == this.game[0].id) {
            this.wishlistID = list.id;
            this.wishlisted = true;
          }
        });
        console.log(this.wishlistID);
      });
    },
    wishlistGame: function () {
      axios
        .post("/wishlists", {
          user_id: localStorage.user_id,
          game_id: this.game[0].id,
          image_url: this.game[0].cover.url,
          title: this.game[0].name,
          on_sale: this.onSale,
        })
        .then((response) => {
          this.wishlistID = response.data.game.id;
          this.wishlisted = true;
          console.log(this.wishlisted);
          console.log(response.data.game.id);
        });
    },
    removeGame: function () {
      console.log(this.wishlistID);
      axios.delete(`/wishlists/${this.wishlistID}`).then((response) => {
        console.log(response.data);
        this.wishlisted = false;
      });
    },
    checkID: function () {
      console.log(this.wishlistID);
    },
  },
};
</script>
