<template>
  <!-- 导航 -->
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">中北大学个人履历</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/profiles">开发者</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="isLogin">
            <router-link class="nav-link" to="/feed">留言</router-link>
          </li>
          <li class="nav-item" v-if="isLogin">
            <router-link class="nav-link" to="/dashBoard">DashBoard</router-link>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <router-link class="nav-link" to="/register">注册</router-link>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <router-link class="nav-link" to="/login">登录</router-link>
          </li>
          <li class="nav-item" v-if="isLogin && user != null">
            <a class="nav-link" @click.prevent="logout">
              <img class="rounded-circle headerImg" :src="user.avatar" alt />
              注销
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app-nav",
  computed: mapGetters(["isLogin", "user"]),
  methods: {
    logout() {
      // 干掉localStorage里面存储的Token
      localStorage.removeItem("jwtToken");
      // isLogin 为false  vuex状态初始化
      this.$store.dispatch("setIsLoginAsync", false);
      this.$store.dispatch("setProfileAsync", null);
      this.$store.dispatch("setUserAsync", null);

      //页面跳转
      this.$router.push("/login");
    }
  }
};
</script>


<style scoped>
.headerImg {
  width: 25px;
  margin-right: 5px;
}
</style>
