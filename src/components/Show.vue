<template>
  <div>
      <h2>{{refrence}}</h2>
      <div v-for="(name,index) in data" v-bind:key="name.id">
          <div class="mx-4 m-auto">
          </div>
          <div class="card mx-2 my-2" style="background-color:wheat">
          <div class="card-header">
            <router-link v-bind:to="'/single/'+ index"> {{name.title}}</router-link>
          </div>
          <div class="card-body">
            <h5 class="text-primary card-title">{{name.title}}</h5>
            <hr width="80%" color="lightblue">
            <p class="card-text text-info">{{name.body}}</p>
          </div>
          <div class="card-footer text-muted">
            <footer class="blockquote-footer">{{name.user_id}} <cite title="Source Title"></cite></footer>
          </div>
        </div>

      </div>
        <hr >
  </div>
</template>

<script>
export default {

  props: {
  },
  data () {
    return {
      refrence: 'insert some infomations',
      data: {}
    }
  },
  created () {
    this.post()
  },
  methods: {
    post: function () {
      this.$http.get('https://vuejs-b419d.firebaseio.com/posts.json')
        .then(response => {
          this.data = response.body
        }, response => {
          console.log('error was callbacked')
        })
    }
  }
}

</script>

<style scoped>

</style>
