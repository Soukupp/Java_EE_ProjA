<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login,
    Header
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:960px;
  width:640px;
  position:relative;
}
</style>
