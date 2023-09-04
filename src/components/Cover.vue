<template>
    <div class="cover">
        <h1 class="cover__title">{{itemInfo.title}}</h1>
        <div class="cover__genres">
            <div v-for="genre, index in itemInfo.genres" :key="index">
                {{ genre.name }}
            </div>
        </div>
        <span class="cover__btn">Watch Trailer </span>
        <div class="cover__release">
            <p>In theaters</p>
            <p>{{formatearFecha(itemInfo.release_date)}}(USA)</p>
        </div>
        <Menu class="cover__menu" />
    </div>
</template>

<script>
    import axios from 'axios'
    import Menu from '../components/Menu.vue'

    export default {
        components: {
            Menu
        },
        data() {
            return {
                itemInfo: '',
            };
        },
        methods: {
            fetchItemInfo() {
                axios.get(`https://api.themoviedb.org/3/movie/346698?api_key=${process.env.VUE_APP_API_KEY}`)
                    .then(response => {
                        this.itemInfo = response.data;
                    })
                    .catch(error => {
                        console.error('Error al obtener la información del elemento', error);
                    });
            },
            formatearFecha(fechaISO) {
                const meses = [
                    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
                ];

                const partesFecha = fechaISO.split('-');
                const año = partesFecha[0];
                const mes = meses[parseInt(partesFecha[1]) - 1];
                const dia = partesFecha[2];

                return `${dia} ${mes}, ${año}`;
            }
        },
        mounted() {
            this.fetchItemInfo();
        },


    }
</script>

<style lang="scss">
    .cover {
        padding: 15px 100px;
        height: 500px;
        background-image: url('https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        text-align: start;

        &__title {
            margin-top: 230px;
            color: #fff;
        }

        &__genres {
            display: flex;
            gap: 25px;
            color: #fff;
            margin-top: -20px;
            margin-bottom: 45px;
            font-size: 13px;
        }

        &__btn {
            background-color: yellow;
            width: 100px;
            padding: 7px 20px;
            border-radius: 20px;
            font-size: 12px;
            color: grey;
            cursor: pointer;
        }

        &__release {
            margin-top: 65px;
            font-size: 14px;

            :nth-child(1) {
                color: lightgray;
                margin-bottom: -10px;
            }

            :nth-child(2) {
                color: rgba(167, 172, 8, 0.656);

            }
        }
    }

    @media screen and (max-width: 768px) {
        .cover {
            padding: 1px 20px;
        }
    }
</style>