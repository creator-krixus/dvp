<template>
  <div class="modal"  v-if="showModal">
    <div class="modal__content">   
        <img 
         :src="'https://image.tmdb.org/t/p/w300' + modalItem.poster_path" 
         :alt="modalItem.title" 
         class="modal__image" >
        <div class="modal__info">
            <span @click="closeModal" class="modal__close">x</span>
            <div class="modal-content">
                <h2 class="modal__title">{{ modalItem.title }}</h2>
                <Genres :id="modalItem.id" class="modal__gener"/>
                <p class="modal__vote">💖{{ modalItem.vote_average }}</p>
            </div>
            <div class="modal__footer">
                <p class="modal__footer--text">{{ modalItem.overview}}</p>
                <p class="modal__footer--info">Full movie profile</p>
                <div class="modal__footer--btns">
                    <div class="btn--one">Watch triller</div>
                    <div class="btn--two">To watch list</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Genres from '../components/Generos.vue'
export default {
  props: ['showModal','modalItem'],
  components: { Genres },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    mostrar(){
        console.log('hola');
    }
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  &__content{
    display: flex;
    width: 800px;
    // &:hover{
    // transform: perspective(800px) rotateY(10deg);
    // }
  }
  &__title{
    text-align: left;
    white-space: nowrap; 
    overflow: hidden;    
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  &__gener{
    text-align: left;
    margin-left: -15px;
    color: blue;
  }
  &__vote{
    text-align: left;
  }
  &__info{
    background-color: lightgrey ;
    .modal-content {
        background-color: white;
        padding: 10px;
        position: relative;
        top: 10px;
        left: -25px;
    }
  }
  &__close{
    margin-top: 5px;
    margin-left: 88%;
    padding: 1px 10px;
    cursor: pointer;
    font-size: 25px;
    color: 00000;
  }
  &__footer{
    &--text{
        height: 185px;
        padding: 0 15px;
        text-align: left;
    }
    &--info{
        padding: 0 15px;
        text-align: left;
        color: blue;
    }
    &--btns{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .btn--one{
            background-color: yellow;
            padding: 15px;
            width: 50%;
        }
                .btn--two{
            background-color: grey;
            padding: 15px;
            width: 50%;
        }
    }
  }
}
</style>
