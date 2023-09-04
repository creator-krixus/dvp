<template>
    <div class="search">
        <input v-model="searchTerm" class="search__input" placeholder="Buscar..." />
        <button @click="search" class="search__button">Buscar</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchTerm: "",
            };
        },
        methods: {
            search() {
                this.$emit("search", this.searchTerm);
                this, this.searchTerm = ''
            },
        },
    };
</script>

<style lang='scss'>
    .search {
        display: flex;
        padding: 15px 0 0 0;
        align-items: center;
        justify-content: center;

        &__input {
            padding: 5px;
            width: 200px;
            margin-right: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        &__button {
            padding: 5px 15px;
            background-color: rgba(167, 172, 8, 0.656);
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    }
</style>