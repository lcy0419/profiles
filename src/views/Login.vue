<template>
  <!-- 登录 -->
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登录</h1>
          <p class="lead text-center">用正确的账号登录</p>
          <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
            <!-- <div class="form-group">
              <input
                v-model="user.email"
                type="email"
                class="form-control form-control-lg"
                placeholder="Email Address"
                name="email"
                :class="{'is-invalid':errors.email}"
              />
              <div class="invalid-feedback" v-if="errors.email">{{errors.email}}</div>
            </div>-->

            <!-- <div class="form-group">
              <input
                v-model="user.password"
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
                name="password"
                :class="{'is-invalid':errors.password}"
              />
              <div class="invalid-feedback" v-if="errors.password">{{errors.password}}</div>
            </div>-->

            <TextFieldGroup
              v-model="user.email"
              type="email"
              placeholder="Email Address"
              name="email"
              :error="errors.email"
            />

            <TextFieldGroup
              v-model="user.password"
              type="password"
              placeholder="Password"
              name="password"
              :error="errors.password"
            />

            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import { decode } from "punycode";
import { type } from "os";
import TextFieldGroup from "../components/common/TextFieldGroup";

export default {
  name: "login",
  components: {
    TextFieldGroup
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      //   console.log(this.user);
      this.$axios
        .post("/api/users/login", this.user)
        .then(res => {
          // console.log(res.data);
          // const token = res.data.token;
          const { token } = res.data;
          localStorage.setItem("jwtToken", token);

          // 解析token
          const decoded = jwt_decode(token);
          // console.log(decoded);

          // 将解析完的token存储到vuex中
          this.$store.dispatch("setUserAsync", decoded);

          // 存储isLogin的值到vuex
          this.$store.dispatch("setIsLoginAsync", !this.isEmpty(decoded));
          this.errors = {};

          // 页面跳转
          this.$router.push("/dashboard");
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>


<style scoped>
</style>
