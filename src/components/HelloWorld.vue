<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr color="orange">
    <app-header></app-header>
    <refrence-type v-bind:data="data" v-bind:lang="lang_data" v-on:masterFunction="MasterUpdate($event)"></refrence-type>
      <hr color="red" width="90%">
    <refrence-footer  v-bind:data="data" v-bind:lang="lang_data" v-on:masterFunction="MasterUpdate($event)"></refrence-footer>
  </div>
</template>

<script>
import Header from './Header';
import Refrence from './Refrence';
import Footer from './Footer';

export default {
  components:{
    'app-header': Header,
    'refrence-type':Refrence,
    'refrence-footer':Footer,
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:[
        {name: 'mohammad' , email:'computercode@gamil.com',show:false},
        {name: 'shnia', email: 'shnia@gmail.com', show: false},
        {name: 'hedieh', email: 'hedieh@gmail.com', show: false}
      ],
      lang_data:'php progaraming and laravel framework',
    }
  },
  methods:{
    MasterUpdate(newText){
      this.lang_data=newText;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
