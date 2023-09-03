<template>
  <div class="listMovies">
    <div class="listMovies__content" v-for="movie in popularMovies" :key="movie.id">
        <Card :item="movie" @card-click="handleCardClick"/>
    </div>

    <div class="listMovies__btns">
      <button class="listMovies__btns--items" @click="previousPage" :disabled="currentPage === 1">Prev</button>
      <span class="listMovies__btns">{{currentPage}}</span>
      <button class="listMovies__btns--items" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
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
    handleCardClick(movie) {
      console.log(movie);
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
    padding: 50px 100px;
    background: rgb(243, 241, 241);
    &__content{
        width: 300px;
    }
    &__btns{
      width: 100%;
      &--items{
        margin: 0 10px;
        width: 45px;
        height: 30px;
        border-radius: 6px;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
}
</style>