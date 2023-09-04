<template>
    <div class="mobile">
        <span class="mobile__btn" @click="toggleMenu">{{isOpen ? 'X': 'Menu'}}</span>
        <div class="mobile__content" v-if="isOpen">
            <ul class="mobile__content--list">
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/">Movies</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/celebs">Celebs & Photos</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/community">Community</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/news">News</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/about">in theaters</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/about">comming soon</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/about">charts</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/about">tv series</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/about">trailers</router-link>
                </li>
                <li class="mobile__content--item">
                    <router-link class="mobile__content--route" to="/about">User</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false,
            };
        },
        methods: {
            toggleMenu() {
                this.isOpen = !this.isOpen;
            },
        },
    };
</script>

<style lang='scss'>
    .mobile {
        width: 100%;
        text-align: right;
        padding-right: 10px;

        &__btn {
            border: none;
            color: #fff;
            cursor: pointer;
        }

        &__content {
            text-align: right;

            &--list {
                list-style-type: none;
            }

            &--item {
                cursor: pointer;
                margin-bottom: 5px;
                color: #fff;
            }

            &--route {
                color: #fff;
                text-decoration: none;
            }
        }

    }
</style>