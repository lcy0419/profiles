<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建一个新的账号</p>
          <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
            <!-- <div class="form-group">
              <input
                v-model="newUser.name"
                type="text"
                class="form-control form-control-lg"
                placeholder="Name"
                name="name"
                required
                :class="{'is-invalid':errors.name}"
              />
              <div class="invalid-feedback" v-if="errors.name">{{errors.name}}</div>
            </div>-->

            <!-- 封装组件 -->
            <!-- <div class="form-group">
              <input
                v-model="newUser.email"
                type="email"
                class="form-control form-control-lg"
                placeholder="Email Address"
                name="email"
                :class="{'is-invalid':errors.email}"
              />
              <div class="invalid-feedback" v-if="errors.email">{{errors.email}}</div>

              <small class="form-text text-muted">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>-->

            <!-- <div class="form-group">
              <input
                v-model="newUser.password"
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
                name="password"
                :class="{'is-invalid':errors.password}"
              />
              <div class="invalid-feedback" v-if="errors.password">{{errors.password}}</div>
            </div>-->

            <!-- <div class="form-group">
              <input
                v-model="newUser.password2"
                type="password"
                class="form-control form-control-lg"
                placeholder="Confirm Password"
                name="password2"
                :class="{'is-invalid':errors.password2}"
              />
              <div class="invalid-feedback" v-if="errors.password2">{{errors.password2}}</div>
            </div>-->

            <TextFieldGroup
              v-model="newUser.name"
              type="text"
              placeholder="Name"
              name="name"
              :error="errors.name"
            />

            <TextFieldGroup
              v-model="newUser.email"
              type="email"
              placeholder="Email Address"
              name="email"
              info=" This site uses Gravatar so if you want a profile image, use a
                Gravatar email"
              :error="errors.email"
            />

            <TextFieldGroup
              v-model="newUser.password"
              type="password"
              placeholder="Password"
              name="password"
              :error="errors.password"
            />

            <TextFieldGroup
              v-model="newUser.password2"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              :error="errors.password2"
            />

            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextFieldGroup from "../components/common/TextFieldGroup";
export default {
  name: "register",
  components: {
    TextFieldGroup
  },
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      //   console.log(this.newUser);
      this.$axios
        .post("/api/users/register", this.newUser)
        .then(res => {
          this.errors = {};
          // 页面跳转的方式一 不能传参
          this.$router.push("/login");
          // 页面跳转方式二 还可以传参
          //   this.$router.push({ name: "login", params: { param: "helloword" } });
          //   this.$router.replace("/login")
          //   this.$router.replace({ name: "login", params: { param: "helloword" } })
          //  this.$router.go(-1);
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });

      // 同源策略
      /** http://localhost:8080/
       * 1.请求头 http://  https://  file://
       * 2.域名 localhost / 127.0.0.1 / www.baidu.com / tao.com
       * 3.端口号 :8080  :8081  :5000  :5001
       *
       * 请求头,域名,端口号必须一致才是同源,不同源就是跨域
       * http://www.baidu.com:2042
       * https://www.baidu.com:2042
       *
       * 解决跨域问题
       * 在根目录下创建一个文件 vue.config.js
       */
    }
  }
};
</script>


<style scoped>
</style>
