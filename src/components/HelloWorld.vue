<template>
  <div>
    <div class="two">
        <div  v-for="name in home" class="one" v-bind:key="name.name"  >
          <button class="show"  v-on:click="currentPage = 'app-' + name.name;remove();name.active=true"  v-bind:class="{'yellow':name.active}">
              {{name.name}} {{name.active}}
          </button>

        </div>
    </div>

     <div class="content">
      <component v-bind:is="currentPage"></component>

      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Refrence from './Refrence.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-refrence': Refrence
  },
  data () {
    return {
      home: [
        {name: 'header', active: false},
        {name: 'refrence', active: false},
        {name: 'footer', active: false}
      ],
      currentPage: ''
    }
  },
  methods: {
    remove: function () {
      this.home.forEach(element => {
        element.active = false
      })
    }
  }
}
</script>

<style>
button{
  padding: 4px 12px;
  font-size:2rem;
  border-radius: 12px 12px 0px 0px;
  position: relative;
}
button:active{
  border:none;
  box-shadow: none;
}
.show{
  margin:auto;
  outline: none;
  box-shadow: none;
  border:1px solid cadetblue;
}


.one{

  justify-content: space-around;
  background-color:gray;
  border-left:2px solid blue;
}
.two{
  display: flex;
  background-color: indigo;
  justify-content: center;
}
.yellow{
  border-bottom: 2px solid crimson;
  transition: border-bottom 0.1s;
}
</style>
