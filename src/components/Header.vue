<template>
    <div>
        <div :class="{ header: true, 'header--hidden': isHeaderHidden }">
            <div class="header__logo">
                <router-link class="header__menu--item" to="/">DVP</router-link>
            </div>
            <div class="header__menu">
                <router-link class="header__menu--item" to="/">Movies</router-link> 
                <router-link class="header__menu--item" to="/about">Celebs & Photos</router-link> 
                <router-link class="header__menu--item" to="/about">Community</router-link> 
                <router-link class="header__menu--item" to="/about">News</router-link> 
            </div>
            <div class="header__user">
                <router-link class="header__menu--item" to="/about">User</router-link>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Header',
    data() {
    return {
      isHeaderHidden: false
    };
  },
  methods: {
    handleScroll() {
      // Verifica si el usuario ha desplazado hacia abajo al menos cierta cantidad de píxeles antes de ocultar el encabezado.
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 150) { // Cambia este valor según tus necesidades
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }
    }
  },
  mounted() {
    // Agrega un evento de escucha para el evento de desplazamiento cuando el componente se monta.
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Asegúrate de eliminar el evento de escucha cuando el componente se destruye.
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
<style lang="scss">
.header{
    position: fixed;
    width: 95%;
    background-color: transparent; /* Puedes ajustar el color de fondo según tus necesidades */
    z-index: 1000; /* Puedes ajustar el valor de z-index según tus necesidades */
    display: flex;
    justify-content: space-between;
    padding: 25px 20px;
    &__menu{
        &--item{
            margin: 0 15px;
            font-size: 18px;
            text-decoration: none;
            color: #fff;
        }
    }
}
.header--hidden {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

</style>