<template>
    <div class="card">
        <div class="animeContainer" v-for="item in anime" :key="item.mal_id">
        <img :src="item.images.jpg.large_image_url" class="img" alt="">
        <div class="descriptionContainer">
        <h3 class="title headingFont">{{ item.title }}</h3>
        <p class="textFont description">{{ item.synopsis }}</p>
        <div class="genres">
            <button type="button" v-for="genre in item.genres" class="genre btn btn-outline-secondary">
                {{genre.name}}
            </button>
        </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: animes } = await useFetch('https://api.jikan.moe/v4/top/anime')
const anime: any[] = (animes.value as any).data

// console.log(anime)


    const anime2 = [
        {title: 'Наруто', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti', genres: ['Активность', 'Бой', 'Магия', 'Хентай']},
        {title: 'Блич', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti', genres: ['Активность', 'Бой', 'Магия']},
        {title: 'Ванпис', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti', genres: ['Активность', 'Бой', 'Магия']},
        {title: 'Зигхайл', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti', genres: ['Активность', 'Бой', 'Магия']},
        {title: 'Гитлир', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti', genres: ['Активность', 'Бой', 'Магия']},
        {title: 'Отто фон бисмарк', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti', genres: ['Активность', 'Бой', 'Магия']},
        {title: 'Отуран', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti', genres: ['Активность', 'Бой', 'Магия']}
    ]
</script>

<style scoped>
    .card {
        width: 60%;
        margin-left: 5%;
    }
    .animeContainer {
        display: flex;
        margin-bottom: 10px;
    }
    .descriptionContainer {
        display: flex;
        flex-direction: column;
    }
    .title {
        margin: 10px 20px;
    }
    .description, .genres {
        margin: 0 20px 5px 20px;
    }
    .description {
        max-width: 90ch;
    }
    .img {
        width: 280px;
        height: 400px;
        border: 0;
        border-radius: 5px;
    }
    .genres {
        display: flex;
        position: relative;
        bottom: -5%;
    }
    .genre {
        margin-right: 10px;
    }
</style>