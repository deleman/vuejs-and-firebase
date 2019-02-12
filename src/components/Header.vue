<template>
  <div>
    <h1 v-on:[ce]="show = !show" >file header </h1>
    <p v-bind:[type]="value" v-show="show">{{info}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: 'my name is vue-cli',
      type:'class',
      value:'red',
      ce:'click',
      show:true
    }
  },
  methods:{

  }
}
</script>

<style scoped>
    p{
      border:2px solid cyan;
    }
    .red{
      color:red;
    }
</style>
