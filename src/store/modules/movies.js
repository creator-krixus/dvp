import axios from 'axios';

export default {
  namespaced: true,
  state: {
    popularMovies: [],
    currentPage: 1,
  },
  mutations: {
    setPopularMovies(state, movies) {
      state.popularMovies = movies;
    },
    incrementPage(state) {
      state.currentPage++;
    },
    resetPage(state) {
      state.currentPage = 1;
    },
    decrementPage(state) {
        state.currentPage--;
      },
  },
  actions: {
    async fetchPopularMovies({ commit, state }) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.VUE_APP_AUT}`,
        },
      };

      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}?language=en-US&page=${state.currentPage}`, options);
        const data = response.data;
        console.log(data);
        commit('setPopularMovies', data.results);
      } catch (error) {
        console.error(error);
      }
    },
    nextPage({ commit, dispatch }) {
      commit('incrementPage');
      dispatch('fetchPopularMovies');
    },
    resetPagination({ commit, dispatch }) {
      commit('resetPage');
      dispatch('fetchPopularMovies');
    },
    previousPage({ commit, dispatch, state }) {
        if (state.currentPage > 1) {
          commit('decrementPage');
          dispatch('fetchPopularMovies');
        }
      },
  },
};