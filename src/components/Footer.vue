<template>
  <div >
  <div style="display:flex">

    <div id="card-style" v-for="info in data" v-bind:key="info.email">
        <h2 v-on:click="info.show = !info.show">{{info.name}} </h2>
        <h5 v-if="info.show">{{info.email}}</h5>

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
    remove_primitive:function(){
      this.$emit('masterFunction','change text in refrence vue page');
    }
  }
}
</script>


<style scoped>
  #card-style{
    margin:10px;
    margin-top: 200px;
    flex-grow: 1;
    flex-basis: 30%;
    color:blue;
    min-height: 120px;
    border-top:3px solid teal;
  }
</style>
