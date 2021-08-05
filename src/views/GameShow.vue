<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>{{ game }}</h2>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Game Show",
      game: [],
    };
  },
  created: function () {
    this.gameShow();
  },
  methods: {
    gameShow: function () {
      axios.post(`/games/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.game = response.data;
      });
    },
  },
};
</script>
