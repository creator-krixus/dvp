<template>
    <div>
        <div class="header">
            <div class="header__logo">logo</div>
            <div class="header__menu">
                <router-link class="header__menu--item" to="/">Movies</router-link> 
                <router-link class="header__menu--item" to="/about">Celebs & Photos</router-link> 
                <router-link class="header__menu--item" to="/about">Community</router-link> 
                <router-link class="header__menu--item" to="/about">News</router-link> 
            </div>
            <div class="header__user">user</div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    &__menu{
        &--item{
            margin: 0 15px;
        }
    }
}

</style>