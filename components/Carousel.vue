<template>
    <div class="container-carousel">
        <div class="wrapper">
            <Swiper :modules="modules" :breakpoints="{
                0: {
                    slidesPerView: 1,
                },
                700: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3,
                },
                1350: {
                    slidesPerView: 4,
                },
                1700: {
                    slidesPerView: 5,
                }
            }" :grab-cursor="true" :space-between="10" :loop="false"
                :autoplay="{ delay: 2500, disableOnInteraction: false }">
                <SwiperSlide v-for="text in swiperText" :key="text.description">
                    <div class="card">
                        <div class="cover">
                            <img :src="text.image" alt="">
                        </div>
                        <h4>{{ text.title }}</h4>
                        <p>{{ text.description }}</p>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import { ref } from 'vue';

const swiperText = ref([
    { title: 'Наруто', description: 'крутой чел стновится хокаге и вообще всех трахает', image: 'img/photo.jpg' },
    { title: 'Блич', description: 'ичигша ищет банкай чтобы на его мече была киберзига', image: 'img/photo.jpg' },
    { title: 'Ванпис', description: 'кто это смотрит я в ахуе столько серий и что там произошло?? хз', image: 'img/photo.jpg' },
    { title: 'Xelfxtcndj k.,db yt gjvt[]', description: 'крутой чел стновится хокаге и вообще всех трахает', image: 'img/photo.jpg' },
    { title: 'Ямамото', description: 'ичигша ищет банкай чтобы на его мече была киберзига', image: 'img/photo.jpg' },
    { title: 'Моргенштерн', description: 'кто это смотрит я в ахуе столько серий и что там произошло?? хз', image: 'img/photo.jpg' },
    { title: 'Ниггре', description: 'крутой чел стновится хокаге и вообще всех трахает', image: 'img/photo.jpg' },
    { title: 'Вфыфыв', description: 'ичигша ищет банкай чтобы на его мече была киберзига', image: 'img/photo.jpg' },
    { title: '8', description: 'кто это смотрит я в ахуе столько серий и что там произошло?? хз', image: 'img/photo.jpg' }
])
const modules = [Autoplay, Pagination]


</script>

<style scoped>
.container-carousel {
    height: auto;
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
    height: 300px;
    width: auto;
    position: relative;
    left: -1px;
    top: -1px;
    border: 0;
    border-radius: 5px 5px 0px 0px;
}

.card {
    width: 300px;
    height: 500px;
}

h4,
p {
    margin: 10px;
}
</style>