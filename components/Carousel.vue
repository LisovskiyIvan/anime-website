<template>
    <div class="container-carousel">
        <div class="wrapper">
        <Swiper :modules="modules" :slides-per-view="5" :space-between="0" :loop="false" :autoplay="{delay: 2500, disableOnInteraction: false}">
            <SwiperSlide v-for="text in swiperText" :key="text.description">
                <div class="card">
                    <img :src="text.image" alt="">
                    <h4>{{ text.title }}</h4>
                    <p>{{ text.description }}</p>
                </div>
                
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css';
import { ref } from 'vue';

const swiperText = ref([
    {title: 'Наруто', description: 'крутой чел стновится хокаге и вообще всех трахает', image: 'img/photo.jpg'},  
    {title: 'Блич', description: 'ичигша ищет банкай чтобы на его мече была киберзига', image: 'img/photo.jpg'},
    {title: 'Ванпис', description: 'кто это смотрит я в ахуе столько серий и что там произошло?? хз', image: 'img/photo.jpg'},
    {title: 'Xelfxtcndj k.,db yt gjvt[]', description: 'крутой чел стновится хокаге и вообще всех трахает', image: 'img/photo.jpg'},  
    {title: 'Ямамото', description: 'ичигша ищет банкай чтобы на его мече была киберзига', image: 'img/photo.jpg'},
    {title: 'Моргенштерн', description: 'кто это смотрит я в ахуе столько серий и что там произошло?? хз', image: 'img/photo.jpg'},
    {title: '6', description: 'крутой чел стновится хокаге и вообще всех трахает', image: 'img/photo.jpg'},  
    {title: '7', description: 'ичигша ищет банкай чтобы на его мече была киберзига', image: 'img/photo.jpg'},
    {title: '8', description: 'кто это смотрит я в ахуе столько серий и что там произошло?? хз', image: 'img/photo.jpg'} 
])
const modules = [Autoplay, Pagination]
</script>

<style scoped>
    .container-carousel {
        width: 100vw;
        height: auto;
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
    .wrapper {
        display: flex;
        width: 90vw;
    }
    SwiperSlide {
        max-width: 300px;
    }
    img {
        width: 299px;
        height: 420px;
    }
    .card {
        width: 300px;
        height: 500px;
    }
    h4, p {
        margin: 10px;
    }
</style>