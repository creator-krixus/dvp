<template>
  <div id="app">
    <Header  />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {Header, Footer}

}
</script>

<style lang="scss">
.header--hidden {
  top: -60px; /* Oculta el header desplazándolo hacia arriba */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
