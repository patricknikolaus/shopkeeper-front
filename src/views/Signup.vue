<template>
  <div class="section">
    <div class="container">
        <div class="justify-content-center row">
            <div class="col-lg-10 col-xxl-6">
                <div class="card">
                    <div class="card-header bg-black py-3">
                        <p class="login"><img src="../../public/static/img/signup.png" width="50%"></p>
                    </div>
                    <div class="card-body">
                        <form class="" v-on:submit.prevent="submit()">
                            <ul>
                            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                            </ul>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mb-3">
                                        <label for="name_1" class="form-label">Username<span class="text-danger">*</span></label>
                                        <input type="text" v-model="newUserParams.username" id="name_1" class="form-control" placeholder="Username">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mb-3">
                                        <label for="email_1" class="form-label">Email<span class="text-danger">*</span></label>
                                        <input type="email" v-model="newUserParams.email" id="email_1" class="form-control" placeholder="E-mail">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mb-3">
                                        <label class="form-label col" for="exampleInputPassword_01">Password<span class="text-danger">*</span></label>
                                        <input type="password" v-model="newUserParams.password" class="form-control" id="exampleInputPassword_01" placeholder="*********">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group mb-3">
                                        <label class="form-label col" for="exampleInputPassword1">Confirm Password<span class="text-danger">*</span></label>
                                        <input type="password" v-model="newUserParams.password_confirmation" class="form-control" id="exampleInputPassword1" placeholder="*********">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col">
                                    <button type="submit" class="btn btn-dark">
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>