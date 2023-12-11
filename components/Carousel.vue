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
                
                <SwiperSlide v-for="item in anime" :key="item.mal_id">
                    <NuxtLink :to="'/anime/'+ item.mal_id">
                    <div class="card">
                        <div class="cover">
                            <img class="img transition ease-in-out delay-50  hover:scale-105  duration-300 cursor-pointer" :src="item.images.jpg.large_image_url" alt="">
                        </div>
                        <h4 class="font-bold text-lg">{{ item.title }}</h4>
                        <p class="text text-md leading-relaxed">{{ item.synopsis }}</p>
                    </div>
                    </NuxtLink>
                </SwiperSlide>
            
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';

const { data: animes} = await useFetch(`/api/anime?filter=upcoming&limit=10&page=1&sfw=true`)
const value = animes.value
const anime = value.info.data



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

a:link {
    text-decoration: none;
}

.img {
    height: 390px;
    width: 286px;
    position: relative;
    left: 6px;
    top: 5px;
    border: 0;
    border-radius: 5px;
}
.img:hover {
    border-radius: 10px 10px 5px 5px ;
}

.card {
    width: 300px;
    height: 600px;
    
}

h4,
p {
    margin: 10px;
    text-decoration: none;
}
.text {
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
}
</style>