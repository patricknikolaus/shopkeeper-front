<template>
  <main>
    <section class="product-details py-6">
        <div class="container">
            <div class="row align-items-start">
                <div class="col-lg-6 lightbox-gallery product-gallery sticky-lg-top">
                    <div>
                        <div>
                            <img v-if="game[0].cover" :src="game[0].cover.url.replace('t_thumb', 't_1080p')"  :alt="game[0].name"><img v-else src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-3 pt-3 pt-lg-1">
                    <div class="product-detail">
                        <div class="products-title mb-1">
                            <h1 class="h1"><big>{{ game[0].name }}</big></h1>
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
                            </div>                            
                            <div class="screenshotCarousel pb-4">
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
                            <div class="videoCarousel pb-2" v-if="videos != null">
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
                            <div class="pt-4" v-if="twitchChannel != null">
                              <img src="../../public/static/img/twitchheader.png" width="25%" class="pb-1">
                              <iframe
                                  :src="`https://player.twitch.tv/?channel=${streamName}&parent=shopkeepergg.netlify.app`"
                                  height="345"
                                  width="640"
                                  allowfullscreen="true">
                              </iframe>
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
                    <a :href="store.link + game[0].name" target="_blank">
                    
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
                <div class="row g-1 justify-content-center">
                    <div class="col-sm-2" v-for="similar in similarGames">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="product-media">
                                    <a :href="`/games/${similar.id}`">
                                        <img :src="similar.image_url.replace('t_thumb', 't_1080p')">
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
  zoom: 1;
  *display: inline;
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
      streamID: [],
      streamName: [],
    };
  },
  mounted: function () {},
  created: function () {
    this.gameShow();
  },
  methods: {
    gameShow: function () {
      axios.post(`/games/${this.$route.params.id}`).then((response) => {
        this.game = response.data;
        this.similarGames = response.data[0].similar_games;
        this.title = response.data[0].name.split(" ").join("").toLowerCase();
        this.screenshots = response.data[0].screenshots;
        this.videos = response.data[0].videos;
        this.gamePrice();
        this.storeName();
        this.getBoxarts();
        this.getWishlist();
        this.twitchID();
      });
    },
    gamePrice: function () {
      axios
        .get("https://www.cheapshark.com/api/1.0/deals", {
          params: { title: this.title, exact: 1 },
        })
        .then((response) => {
          this.prices = response.data;
          this.onSale = response.data[0].gameID;
        });
    },
    storeName: function () {
      axios
        .get("https://www.cheapshark.com/api/1.0/stores")
        .then((response) => {
          this.stores = response.data;
          this.addStoreLinks();
        });
    },
    getBoxarts: function () {
      this.similarGames.forEach((game) => {
        axios.post(`/games/${game.id}`).then((response) => {
          this.$set(game, "image_url", response.data[0].cover.url);
        });
      });
    },
    addStoreLinks: function () {
      this.stores.forEach((store) => {
        if (store.storeID === "1") {
          store["link"] = "https://store.steampowered.com/search/?term=";
        } else if (store.storeID === "2") {
          store["link"] = "https://www.gamersgate.com/games/?query=";
        } else if (store.storeID === "3") {
          store["link"] = "https://www.greenmangaming.com/search?query=";
        } else if (store.storeID === "6") {
          store["link"] = "https://www.direct2drive.com/#!/search?q=";
        } else if (store.storeID === "7") {
          store["link"] = "https://www.gog.com/games?search=";
        } else if (store.storeID === "8") {
          store["link"] =
            "https://www.origin.com/usa/en-us/search?searchString=";
        } else if (store.storeID === "11") {
          store["link"] = "https://www.humblebundle.com/store/search?search=";
        } else if (store.storeID === "13") {
          store["link"] = "https://store.ubi.com/us/home/?lang=en_US";
        } else if (store.storeID === "15") {
          store["link"] = "https://www.fanatical.com/en/search?search=";
        } else if (store.storeID === "21") {
          store["link"] = "https://www.wingamestore.com/search/?SearchWord=";
        } else if (store.storeID === "23") {
          store["link"] = "https://www.gamebillet.com/search?q=";
        } else if (store.storeID === "24") {
          store["link"] = "https://www.voidu.com/en/search?q=";
        } else if (store.storeID === "25") {
          store["link"] = "https://www.epicgames.com/store/en-US/browse?q=";
        } else if (store.storeID === "27") {
          store["link"] = "https://us.gamesplanet.com/search?query=";
        } else if (store.storeID === "28") {
          store["link"] = "https://www.gamesload.com/results.html?search=";
        } else if (store.storeID === "29") {
          store["link"] = "https://2game.com/en-us/catalogsearch/result/?q=";
        } else if (store.storeID === "30") {
          store["link"] = "https://www.indiegala.com/search/";
        } else if (store.storeID === "31") {
          store["link"] = "https://us.shop.battle.net/en-us/family/";
        } else if (store.storeID === "32") {
          store["link"] = "https://www.allyouplay.com/en/search?q=";
        }
      });
    },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getWishlist: function () {
      axios.get("/wishlists").then((response) => {
        this.wishlist = response.data;
        this.username = localStorage.username;
        this.wishlist.forEach((list) => {
          if (list.game_id == this.game[0].id) {
            this.wishlistID = list.id;
            this.wishlisted = true;
          }
        });
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
        });
    },
    removeGame: function () {
      axios.delete(`/wishlists/${this.wishlistID}`).then((response) => {
        this.wishlisted = false;
      });
    },
    twitchID: function () {
      axios
        .get("/twitch", {
          params: { name: this.game[0].name.split(" ").join("%20") },
        })
        .then((response) => {
          this.streamID = response.data.data[0].id;
          this.twitchChannel();
        });
    },
    twitchChannel: function () {
      axios
        .get("twitch/channel", { params: { game_id: this.streamID } })
        .then((response) => {
          this.streamName = response.data.data[0].user_login;
          // let channels = response.data.data;
          // channels.forEach((channel) => {
          //   if (channel.language === "en") {
          //     this.streamName = channel.user_login;
          //   }
          // });
        });
    },
  },
};
</script>
