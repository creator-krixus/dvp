<template>
  <div class="home">
    <ListMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import ListMovies from '@/components/ListMovies.vue'

export default {
  name: 'Home',
  components: {
    ListMovies
  }
}
</script>
