import axios from 'axios';
export default {
    namespaced: true,

    state : {
        movieDetails: '',
    },

    mutations : {
        SET_MOVIE_DETAILS: (state, movieDetails) => {
            state.movieDetails = movieDetails;
        },
    },

    actions : {
        async fetchMovieDetails({ commit }, movieId) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.VUE_APP_API_KEY}`);
                const movieDetails = response.data;
                commit('SET_MOVIE_DETAILS', movieDetails);
        } catch (error) {
            console.error('Error al obtener los detalles de la película:', error);
        }
    },
    },

    getters : {
        getMovieDetails: (state) => state.movieDetails,
    },

}

