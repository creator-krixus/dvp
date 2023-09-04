<template>
  <div class="card" @click="handleClick">
    <img class="card__image" :src="'https://image.tmdb.org/t/p/w300' + item.poster_path" :alt="item.title">
    <h2 class="card__title">{{ item.title}}</h2>
    <Genres :id="item.id" />
    <div class="card__votes">
      <div class="card__votes--one">💖{{ item.vote_average }}</div>
      <div class="card__votes--two"></div>
    </div>
    <Modal :showModal="showModal" :modalItem="selectedItem" @close-modal="handleCardClick" />
  </div>
</template>

<script>
  import Genres from '../components/Generos.vue'
  import Modal from '../components/Modal.vue';

  export default {

    props: ['item'],
    components: {
      Genres,
      Modal
    },
    data() {
      return {
        showModal: false,
        selectedItem: {},
      };
    },
    methods: {
      async handleClick() {
        this.$emit('card-click', this.item);
        this.selectedItem = this.item;
        this.showModal = !this.showModal;
      },
    },
  };
</script>

<style lang="scss">
  .card {
    border: 1px solid lightgrey;
    height: 562px;
    width: 300px;
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &__image {
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
      height: 450px;
      cursor: pointer;
    }

    &__title {
      font-size: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      padding: 0 15px;
      margin-bottom: 5px;
    }

    &__votes {
      display: flex;
      justify-content: space-between;
      height: 40px;

      &--one {
        padding: 0 15px;
        margin-top: 10px;
      }

      &--two {
        background: rgb(184, 184, 10);
        width: 40px;
        height: 40px;
        margin-top: 7px;
        clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
      }
    }
  }
</style>