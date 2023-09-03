<template>
  <div class="genre">
    <div class="genre__content" v-for="genre, index in itemInfo.genres" :key="index">
        {{ genre.name }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Generos',
    props: ['id'],
    data() {
        return {
            itemInfo: '',
        };
    },
    methods: {
        fetchItemInfo() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(response => {
                this.itemInfo = response.data;
            })
            .catch(error => {
                console.error('Error al obtener la información del elemento', error);
            });
        },
    },
    mounted() {
       this.fetchItemInfo();
    },
};
</script>

<style lang="scss">
.genre{
    display: flex;
    gap: 5px;
    padding: 0 15px;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap; 
    overflow: hidden;    
    text-overflow: ellipsis;
}

</style>