<template>
  <div class="home">
    <Cover />
    <Search @search="search" />
    <ListMovies />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ListMovies from '@/components/ListMovies.vue'
  import Cover from '@/components/Cover.vue'
  import Search from '../components/Search.vue'

  export default {
    name: 'Home',
    components: {
      ListMovies,
      Cover,
      Search
    },
    methods: {
      search(searchTerm) {
        alert(`Buscar la pelicula: ${searchTerm}`);
      },
    },
  }
</script>
<style lang="scss">
  .home {
    background: rgb(243, 241, 241);
  }
</style>