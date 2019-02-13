<template>
  <div class="mb-3 pb-3">
    <div v-if="!submited">
      <h2 class="text-primary">{{refrence}}</h2>
      <form action="" method="post" class="w-75 m-auto mb-4">
        <div class="form-group bg-info">
          <label for="title">post title</label>
          <input type="text" v-model="info.title" class="text-danger form-control text-center" id="title">
        </div>

        <div class="form-group bg-info">
          <label for="body">post content</label>
          <textarea class="form-control text-center" v-model="info.body" id="body" rows="3"></textarea>
        </div>

        <div class="form-group bg-info">
          <label for="authour">author name</label>
          <input type="text" v-model="info.user_id" class="form-control text-center" id="authour" >
        </div>

        <input type="submit" class="mb-5 btn btn-primary btn-block w-50 m-auto" v-on:click.prevent="post" value="create new post">
      </form>
    </div>

    <!-- show thanks for creation a new post -->
    <div v-if="submited" class="card text-white bg-primary w-75 mt-3 m-auto">
      <img class="card-img-top" src="holder.js/100px180/" alt="">
      <div class="card-body">
        <h4 class="card-title">Thanks for create new  post</h4>
        <p class="card-text">Your post was successfuly created.</p>
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
      refrence: 'insert some infomations',
      info: {
        user_id: '',
        title: '',
        body: ''
      },
      submited: false
    }
  },
  methods: {

    post: function () {
      //  https://jsonplaceholder.typicode.com/posts
      this.$http.post('https://vuejs-b419d.firebaseio.com/posts.json', this.info)
        .then(response => {
          // get status
          console.log(response.status)

          // get status text
          console.log(response.statusText)

          this.submited = true
          this.someData = response.body
        },
        response => {
        // error callback
          console.log('error was callbacked')
        })
    }
  }
}

</script>

<style scoped>

</style>
