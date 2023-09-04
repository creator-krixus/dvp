<template>
    <div class="menu" v-if="screenWidth >= 900">
        <div v-for="(item, index) in ['in theaters', 'coming soon', 'charts', 'tv series', 'trailers']" :key="index"
            class="menu__item" :class="{ 'menu__item--selected': selectedItemIndex === index }"
            @click="selectMenuItem(index)">
            {{ item }}
        </div>
        <div class="menu__item">
            <select v-model="selectedOption">
                <option value="option1">more</option>
                <option value="option2">Opción 2</option>
                <option value="option3">Opción 3</option>
            </select>
        </div>
        <div class="menu__item">
            <span class="menu__item--stars">✨179</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Menu',
        data() {
            return {
                isHeaderHidden: false,
                windowWidth: window.innerWidth,
                selectedOption: 'option1',
                selectedItemIndex: null
            };
        },
        computed: {
            screenWidth() {
                return this.windowWidth;
            }
        },
        methods: {
            updateWindowWidth() {
                this.windowWidth = window.innerWidth;
            },
            selectMenuItem(index) {
                this.selectedItemIndex = index;
            }
        },
        mounted() {
            window.addEventListener("resize", this.updateWindowWidth);
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.updateWindowWidth);
        }
    }
</script>
<style lang="scss">
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: rgb(243, 241, 241);
        padding: 20px 20px;
        gap: 15px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        font-size: 11px;

        &__item {
            text-transform: uppercase;
            cursor: pointer;
            flex: 1;
            text-align: center;

            select {
                text-transform: uppercase;
                border: none;
                background: none;
                font-family: inherit;
                font-size: inherit;
                cursor: pointer;
                width: 100%;
            }

            &--stars {
                background-color: rgba(167, 172, 8, 0.656);
                color: #fff;
                padding: 2px 7px;
                border-radius: 2px;
                margin-left: 25px;
            }

            &--selected {
                padding-bottom: 18px;
                border-bottom: 2px solid rgba(167, 172, 8, 0.656);
            }
        }
    }
</style>