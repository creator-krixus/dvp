<template>
    <div class="card">
        <img :src="'https://image.tmdb.org/t/p/w300' + item.poster_path" :alt="item.title">
        <h2 class="card__title">{{ item.title}}</h2>
        <div class="card__votes">
            <div>{{ item.vote_average }}</div>
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
    &__title{
        font-size: 20px;
        white-space: nowrap; 
        overflow: hidden;    
        text-overflow: ellipsis; 
        text-align: left;
        padding: 0 5px;
    }
    &__votes{
        display: flex;
        justify-content: space-between;
        height: 40px;
        &--two{
            background: rgb(184, 184, 10);
            width: 40px;
            height: 40px;
            clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
        }
    }
}
</style>