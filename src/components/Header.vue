<template>
  <div>
    <div :class="{ header: true, 'header--hidden': isHeaderHidden }">
      <div class="header__logo" v-if="screenWidth >= 900">
        <router-link class="header__menu--item" to="/">DVP</router-link>
      </div>
      <div class="header__menu" v-if="screenWidth >= 900">
        <router-link class="header__menu--item" to="/">Movies</router-link>
        <router-link class="header__menu--item" to="/celebs">Celebs & Photos</router-link>
        <router-link class="header__menu--item" to="/community">Community</router-link>
        <router-link class="header__menu--item" to="/news">News</router-link>
      </div>
      <div class="header__user" v-if="screenWidth >= 900">
        <router-link class="header__menu--item" to="/about">User</router-link>
      </div>
      <HeaderMobile v-if="screenWidth < 900" />
    </div>
    <router-view />
  </div>
</template>

<script>
  import HeaderMobile from '../components/HeaderMobile.vue'
  export default {
    name: 'Header',
    components: {
      HeaderMobile
    },
    data() {
      return {
        isHeaderHidden: false,
        windowWidth: window.innerWidth,
      };
    },
    computed: {
      screenWidth() {
        return this.windowWidth;
      }
    },
    methods: {
      handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > 150) {
          this.isHeaderHidden = true;
        } else {
          this.isHeaderHidden = false;
        }
      },
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.updateWindowWidth);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener("resize", this.updateWindowWidth);
    }
  }
</script>
<style lang="scss">
  .header {
    position: fixed;
    width: 95%;
    background-color: transparent;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    padding: 25px 20px;

    &__logo {
      background-color: yellow;
      padding: 5px;

      :nth-child(1) {
        color: black;
        font-weight: bold;
      }
    }

    &__menu {
      &--item {
        margin: 0 15px;
        font-size: 15px;
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