<template>
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
</template>

<style>
</style>

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
      boxart: [],
      similarGames: [],
      onSale: 0,
    };
  },
  mounted: function () {},
  created: function () {
    this.gameShow();
  },
  methods: {
    gameShow: function () {
      axios.post(`/games/${this.$route.params.id}`).then((response) => {
        // console.log(response.data);
        this.game = response.data;
        this.title = response.data[0].name.split(" ").join("").toLowerCase();
        console.log(this.title);
        this.screenshots = response.data[0].screenshots;
        this.videos = response.data[0].videos;
        this.similarGames = response.data[0].similar_games;
        // console.log(this.similarGames);
        this.gamePrice();
        this.storeName();
        this.getBoxarts();
      });
    },
    gamePrice: function () {
      // console.log("price");
      axios
        .get("https://www.cheapshark.com/api/1.0/deals", {
          params: { title: this.title, exact: 1 },
        })
        .then((response) => {
          console.log(response.data);
          this.prices = response.data;
          this.isOnSale();
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
          this.addStoreLinks();
        });
    },
    getBoxarts: function () {
      this.similarGames.forEach((game) => {
        axios.get("/covers/" + `${game.id}`).then((response) => {
          game["image_url"] = response.data.image;
        });
      });
      // console.log(this.similarGames);
    },
    addStoreLinks: function () {
      // console.log("STORE LINKS");
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
      // console.log(this.stores);
    },
    isOnSale: function () {
      this.prices.forEach((store) => {
        if (store.isOnSale === "1") {
          this.onSale = 1;
        }
      });
    },
  },
};
</script>
