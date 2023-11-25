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
                            <img class="img" :src="item.images.jpg.large_image_url" alt="">
                        </div>
                        <h4>{{ item.title }}</h4>
                        <p class="text">{{ item.synopsis }}</p>
                    </div>
                    </NuxtLink>
                </SwiperSlide>
            
            </Swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';

const { data: animes } = await useFetch('https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=10')
const anime: any[] = (animes.value as any).data



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
    height: 400px;
    width: 300px;
    position: relative;
    left: -1px;
    top: -1px;
    border: 0;
    border-radius: 5px 5px 0px 0px;
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