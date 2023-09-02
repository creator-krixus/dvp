<template>
  <div class="listMovies">
    <div class="listMovies__content" v-for="movie in popularMovies" :key="movie.id">
        <Card :item="movie" />
    </div>

    <div class="listMovies__btns">
      <button @click="previousPage" :disabled="currentPage === 1">Página Anterior</button>
      <span>Página {{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Página Siguiente</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '../components/Card.vue'

export default {
  name: 'ListMovies',
  components: {
        Card
    },

  computed: {
    ...mapState({
      popularMovies: state => state.movies.popularMovies,
      currentPage: state => state.movies.currentPage,
      totalPages: state => state.movies.totalPages,
    }),
  },

  async mounted() {
    await this.$store.dispatch('movies/fetchPopularMovies');
  },

  methods: {
    async nextPage() {
      await this.$store.dispatch('movies/nextPage');
    },
    async previousPage() {
      await this.$store.dispatch('movies/previousPage');
    },
  },
};
</script>

<style lang="scss">
.listMovies{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding: 100px 50px;
    background: rgb(243, 241, 241);
    &__content{
        width: 300px;
    }
    &__btns{
      width: 100%;
    }
}
</style>