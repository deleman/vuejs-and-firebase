<template>
  <div >
  <div style="display:flex">
    <div id="card-style" v-for="info in data" v-bind:key="info.email">
        <h2 v-on:click="info.show = !info.show">{{info.name}} </h2>
        <h5 v-if="info.show">{{info.email}}</h5>
        <button v-on:click="remove">delete</button>
    </div>
  </div>

      <h1 v-on:click="remove_primitive" style="width:100%;color:orange;border:1px solid blue;">{{lang}}</h1>

  </div>
</template>


<script>
export default {
  props:{
    data:{
      type:Array
    },
    lang:{
      type:String
    }
  },
  data () {
    return {

    }
  },
  methods:{
    remove:function(){
      this.data.pop();
    },
    remove_primitive:function(){
      this.$emit('masterFunction','change text in refrence vue page');
    }

  }
}
</script>


<style scoped>
  #card-style{
    margin:10px;
    flex-grow: 1;
    flex-basis: 30%;
    background-color: gray;
    color:blue;
  }
</style>
