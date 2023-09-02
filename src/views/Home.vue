<template>
  <div class="home">
    <Cover />
    <ListMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import ListMovies from '@/components/ListMovies.vue'
import Cover from '@/components/Cover.vue'

export default {
  name: 'Home',
  components: {
    ListMovies, Cover
  }
}
</script>
<style lang="scss">
</style>
