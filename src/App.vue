<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <div class="app_route-container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default {
  components: { Header, Navbar },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app_route-container {
    min-height: 100vh;
    position: relative;
    margin-left: 64px;
    overflow: auto;
    padding: 20px;
    padding-top: 70px
}
</style>
