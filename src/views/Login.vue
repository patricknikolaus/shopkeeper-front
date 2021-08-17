<template>
  <div class="section">
              <div class="container">
                  <div class="justify-content-center row">
                      <div class="col-lg-5 col-xxl-4">
                          <div class="card">
                              <div class="card-header bg-black py-3">
                                 <p class="login"><img src="../../public/static/img/login.png" width="50%"></p>
                              </div>
                              <div class="card-body">
                                  <form class="" v-on:submit.prevent="submit()">
                                    <ul>
                                      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                                    </ul>
                                      <div class="form-group mb-3">
                                          <label for="email_1" class="form-label">Email<span class="text-danger">*</span></label>
                                          <input type="email" v-model="newSessionParams.email" id="email_1" class="form-control" placeholder="E-mail">
                                      </div>
                                      <div class="form-group mb-3">
                                          <div class="row align-items-center">
                                              <label class="form-label col" for="exampleInputPassword01">Password<span class="text-danger">*</span></label>
                                              <!-- <span class="col ms-auto small text-end"><a href="#!">Forgot password?</a></span> -->
                                          </div>
                                          <input type="password" v-model="newSessionParams.password" class="form-control" id="exampleInputPassword01" placeholder="*********">
                                      </div>
                                      <!-- Checkbox -->
                                      <div class="form-group text-center">
                                          <button type="submit" class="btn btn-dark w-100">
                                              Log in
                                          </button>
                                      </div>
                                  </form>
                                  <div class="text-center pt-0 pb-0" style="">
                                      <!-- <span class="px-0 bg-white d-inline-block align-middle lh-sm"></span> -->
                                      <div class="border-bottom mt-n3"></div>
                                  </div>
                                  <div class="pt-4 text-center">
                                      <div class="text-dark">Don't have an account? <a href="/users"><button class="btn w-100 btn-dark">Sign Up</button></a></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        <!-- end login -->

</template>

<style>
.login {
  text-align: center;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("email", response.data.email);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>