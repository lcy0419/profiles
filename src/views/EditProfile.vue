<template>
  <!-- 个人信息 -->
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a @click.prevent="$router.go(-1)" class="btn btn-light">返回</a>
          <h1 class="display-4 text-center">编辑个人信息</h1>
          <p class="lead text-center">写一些有关于你的个人信息</p>
          <small class="d-block pb-3">* = 必填</small>
          <form @submit.prevent="handleSubmit">
            <!-- <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="* Profile handle"
                name="handle"
                required
              />
              <small class="form-text text-muted">有关于你的个人信息</small>
            </div>-->

            <TextFieldGroup
              v-model="msgInfo.handle"
              type="text"
              placeholder="* Profile handle"
              name="handle"
              info="有关于你的个人信息"
              :error="errors.handle"
            />
            <!-- <div class="form-group">
              <select class="form-control form-control-lg" name="status">
                <option value="0">* 选择你的职业</option>
                <option value="Developer">前端开发</option>
                <option value="Junior Developer">后端开发</option>
                <option value="Senior Developer">后端开发</option>
                <option value="Manager">后端开发</option>
                <option value="Student or Learning">后端开发</option>
                <option value="Instructor">后端开发</option>
                <option value="Intern">后端开发</option>
                <option value="Other">后端开发</option>
              </select>
              <small class="form-text text-muted">写一些关于你工作的内容</small>
            </div>-->

            <SelectListGroup
              v-model="msgInfo.status"
              name="status"
              :error="errors.status"
              info="请选择您的职业"
              :options="options"
            />

            <!-- <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="公司"
                name="company"
              />
              <small class="form-text text-muted">公司</small>
            </div>-->

            <TextFieldGroup
              v-model="msgInfo.company"
              type="text"
              placeholder="公司"
              name="company"
              info="公司"
              :error="errors.company"
            />

            <!-- <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="网址"
                name="website"
              />
              <small class="form-text text-muted">网址</small>
            </div>-->

            <TextFieldGroup
              v-model="msgInfo.website"
              type="text"
              placeholder="网址"
              name="website"
              info="网址"
              :error="errors.website"
            />

            <!-- <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="地点"
                name="location"
              />
              <small class="form-text text-muted">地点</small>
            </div>-->

            <TextFieldGroup
              v-model="msgInfo.location"
              type="text"
              placeholder="地点"
              name="location"
              info="地点"
              :error="errors.location"
            />

            <!-- <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="技能"
                name="skills"
              />
              <small class="form-text text-muted">技能( HTML,CSS,JavaScript,PHP)</small>
            </div>-->

            <TextFieldGroup
              v-model="msgInfo.skills"
              type="text"
              placeholder="* 技能"
              name="skills"
              info="技能( HTML,CSS,JavaScript,PHP)"
              :error="errors.skills"
            />

            <!-- <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Github 用户名"
                name="githubusername"
              />
              <small class="form-text text-muted">Github 用户名</small>
            </div>-->

            <TextFieldGroup
              v-model="msgInfo.githubusername"
              type="text"
              placeholder="Github 用户名"
              name="githubusername"
              info="Github 用户名"
              :error="errors.githubusername"
            />

            <!-- <div class="form-group">
              <textarea class="form-control form-control-lg" placeholder="个人介绍" name="bio"></textarea>
              <small class="form-text text-muted">个人介绍</small>
            </div>-->

            <TextAreaGroup
              placeholder="个人介绍"
              name="bio"
              v-model="msgInfo.bio"
              :error="errors.bio"
              info="自我介绍"
            />

            <div class="mb-3">
              <button
                @click="displaySocialInputs = !displaySocialInputs"
                type="button"
                class="btn btn-light"
              >社交应用</button>
              <span class="text-muted">选项</span>
            </div>
            <div v-show="displaySocialInputs">
              <!-- <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-QQ"></i>
                  </span>
                </div>
                <input type="text" class="form-control form-control-lg" placeholder="QQ" name="QQ" />
              </div>-->

              <InputGroup
                placeholder="QQ"
                name="QQ"
                v-model="msgInfo.QQ"
                :error="errors.QQ"
                icon="fa fa-qq"
              />

              <!-- <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-wechat"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="wechat"
                  name="wechat"
                />
              </div>-->

              <InputGroup
                placeholder="腾讯课堂网址"
                name="tengxunkt"
                v-model="msgInfo.tengxunkt"
                :error="errors.tengxunkt"
                icon="fa fa-wechat"
              />

              <!-- <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-linkedin"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Linkedin"
                  name="linkedin"
                />
              </div>-->

              <InputGroup
                placeholder="网易课堂网址"
                name="wangyikt"
                v-model="msgInfo.wangyikt"
                :error="errors.wangyikt"
                icon="fa fa-weibo"
              />

              <!-- <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-weibo"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="weibo"
                  name="weibo"
                />
              </div>-->

              <InputGroup
                placeholder="微信公众号"
                name="wechat"
                v-model="msgInfo.wechat"
                :error="errors.wechat"
                icon="fa fa-weixin"
              />
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextFieldGroup from "../components/common/TextFieldGroup";
import InputGroup from "../components/common/InputGroup";
import SelectListGroup from "../components/common/SelectListGroup";
import TextAreaGroup from "../components/common/TextAreaGroup";
export default {
  name: "CreateProfile",
  //   组件内守卫
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //   vm.msgInfo = vm.$store.getters.profile;
      vm.getCurrentProfile();
    });
  },
  methods: {
    handleSubmit() {
      // console.log(this.msgInfo);
      // 发起请求
      this.$axios
        .post("/api/profile", this.msgInfo)
        .then(res => {
          // console.log(res.data);
          this.errors = {};
          this.$store.dispatch("setProfileAsync", res.data);
          this.$router.push("/dashboard");
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
    getCurrentProfile() {
      const profile = this.$store.getters.profile;

      profile.company = profile.company ? profile.company : "";
      profile.website = profile.website ? profile.website : "";
      profile.location = profile.location ? profile.location : "";
      profile.githubusername = profile.githubusername
        ? profile.githubusername
        : "";
      profile.bio = profile.bio ? profile.bio : "";

      profile.social = profile.social ? profile.social : {};
      profile.QQ = profile.social.QQ ? profile.social.QQ : "";
      profile.wechat = profile.social.wechat ? profile.social.wechat : "";
      profile.tengxunkt = profile.social.tengxunkt
        ? profile.social.tengxunkt
        : "";
      profile.wangyikt = profile.social.wangyikt ? profile.social.wangyikt : "";

      profile.skills = profile.skills.length ? profile.skills.join(",") : "";

      this.msgInfo = profile;
    }
  },
  data() {
    return {
      msgInfo: {
        handle: "",
        company: "",
        website: "",
        location: "",
        skills: "",
        githubusername: "",
        status: "* 选择你的职业",
        bio: "",
        QQ: "",
        wechat: "",
        tengxunkt: "",
        wangyikt: ""
      },
      errors: {},
      options: [
        { label: "0", value: "* 请选择您的职业" },
        { label: "Junior Developer", value: "前端初级工程师" },
        { label: "Senior Developer", value: "前端中级工程师" },
        { label: "HighDeveloper", value: "前端高级工程师" },
        { label: "Manager", value: "前端管理" },
        { label: "backend Developer", value: "后端开发" },
        { label: "Python machine learning", value: "Python机器学习" },
        { label: "Other", value: "其他" }
      ],
      displaySocialInputs: false
    };
  },
  components: {
    TextFieldGroup,
    InputGroup,
    SelectListGroup,
    TextAreaGroup
  }
};
</script>

