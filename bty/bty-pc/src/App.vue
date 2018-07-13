<template>
  <div id="app">
    <Head/>
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
import Head from './components/head/head'
import Foot from './components/foot/foot'

export default {
  name: 'App',
  components:{
    Head, Foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
