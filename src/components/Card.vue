<template>
    <div class="card">
        <img class="card__image" :src="'https://image.tmdb.org/t/p/w300' + item.poster_path" :alt="item.title">
        <h2 class="card__title">{{ item.title}}</h2>
        <div class="card__votes">
            <div class="card__votes--one">{{ item.vote_average }}</div>
            <div class="card__votes--two"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss">
.card{
    border: 1px solid lightgrey;
    height: 550px;
    width: 300px;
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    &__image{
      border-top-right-radius: 6px; 
      border-top-left-radius: 6px;  
      height: 450px;
      cursor: pointer;
    }
    &__title{
        font-size: 20px;
        white-space: nowrap; 
        overflow: hidden;    
        text-overflow: ellipsis; 
        text-align: left;
        padding: 0 15px;
    }
    &__votes{
        display: flex;
        justify-content: space-between;
        height: 40px;
        &--one{
            padding: 0 15px;
        }
        &--two{
            background: rgb(184, 184, 10);
            width: 40px;
            height: 40px;
            clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
        }
    }
}
</style>