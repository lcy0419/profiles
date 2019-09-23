<template>
  <div ref="myRef">
    <hr />
    <h3 class="mb-4">Github仓库</h3>
    <div v-for="repo in repos" :key="repo.id" class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          <h4>
            <a :href="repo.html_url" class="text-info" target="_blank">{{repo.name}}</a>
          </h4>
          <p>{{repo.description}}</p>
        </div>
        <div class="col-md-6">
          <span class="badge badge-info mr-1">Stars: {{repo.stargazers_count}}</span>
          <span class="badge badge-secondary mr-1">Watchers: {{repo.watchers_count}}</span>
          <span class="badge badge-success">Forks: {{repo.forks_count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientID: "76cb216120fe6ce29e20",
      clientSecret: "c3e83183e55d62ee7e67f59a056811860fbd26cb",
      count: 0,
      sort: "created:dec",
      repos: []
    };
  },
  props: {
    username: String
  },
  created() {
    // console.log(this.username);
    fetch(`https://api.github.com/users/${this.username}/repos?per_page=${this.count}&sort=${this.sort}&client_id=${this.clientID}&client_secret=${this.clientSecret}
`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.repos = data;
      });
  }
};
</script>

<style scoped>
</style>