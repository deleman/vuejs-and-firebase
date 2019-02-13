<template>
  <div >
    <h1>{{id}}</h1>
    <h2>{{refrence}}</h2>
    <hr >
    <div>
      <div class="card mx-2">
        <div class="card-header">
          post infomations
        </div>
        <div class="card-body">
          <h5 class="text-primary card-title">{{data.title}}</h5>
          <hr width="80%" color="lightblue">
          <p class="card-text text-info">{{data.body}}</p>
        </div>
        <div class="card-footer text-muted">
          <footer class="blockquote-footer">{{data.user_id}} <cite title="Source Title"></cite></footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
  },
  data () {
    return {
      refrence: 'single page infomations',
      data: {},
      id: this.$route.params.id
    }
  },
  created () {
    this.post()
  },
  methods: {
    post: function () {
      this.$http.get('https://vuejs-b419d.firebaseio.com/posts/' + this.id + '.json')
        .then(response => {
          console.log(response)
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
