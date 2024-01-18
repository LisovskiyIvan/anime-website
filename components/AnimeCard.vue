<template>
    <div class="flex flex-col items-center min-h-[100vh]">
        <div class="content card">
            <img class="img min-w-[400px] max-w-[550px] w-[550px]"  :src=anime.large_image_url :alt="anime.title">
            <div class="main">
                <div class="score">
                    <img src="/star.png" alt="" class="w-6 self-baseline mr-2">
                    {{ anime.score }}
                    <div class="ten">
                        /10
                    </div>
                </div>
                <div class="titles headingFont text-3xl">
                    <h1 class="font-bold">{{ anime.title }}</h1>
                    <div class="small-titles text-xl">
                        <h4>{{ anime.title_english }}</h4>
                        <h4>{{ anime.title_japanese }}</h4>
                    </div>
                </div>
                <div class="pt-2 px-[50px] text-xl flex-col mb-4">
                    <div class="flex-row flex">
                        <div class="font-bold mr-2">Эпизодов:</div>
                        <div>{{ anime.episodes }}</div>
                    </div>
                    <div class="flex-row flex">
                        <div class="font-bold mr-2">Впервые вышло:</div>
                        <div>{{ anime.aired_str }}</div>
                    </div>
                    <div class="flex-row flex">
                        <div class="font-bold mr-2">Статус:</div>
                        <div>{{ anime.status }}</div>
                    </div>
                    <div class="flex-row flex">
                        <div class="font-bold mr-2">Жанры:</div>
                        <div v-for="item in anime.genres" :key="item.id">{{ item.name_rus + '&nbsp' }}</div>
                    </div>
                    <div class="flex-row flex">
                        <div class="font-bold mr-2">Продолжительность:</div>
                        <div>{{ anime.duration }}</div>
                    </div>
                    <div class="flex-row flex">
                        <div class="font-bold mr-2">Возростной рейтинг:</div>
                        <div>{{ anime.rating }}</div>
                    </div>
                    <div class="flex-col flex">
                        <div class="font-bold mr-2">Описание:</div>
                        <div>{{ anime.synopsis }}</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="p-12" v-if="(anime.trailer != undefined)">
                <iframe :src="anime.trailer.embed_url + '&mute=1'" frameborder="0" width="1000" height="600"></iframe>
        </div>
        <!-- <div> Тут будет трейлер
            {{ anime.trailer.embed_url }}
        </div> -->
    </div>
</template>

<script setup lang="ts">
interface Anime {
    id: number,
    image_url: string,
    small_image_url: string,
    large_image_url: string,
    genres: [
        {
            id: number,
            name: string,
            name_rus: string
        }
    ] | null,
    studios: [
        {
            id: number,
            name: string
        }
    ] | null,
    trailer: {
        youtube_id: string | null,
        url: string | null,
        embed_url: string | null,
        image_url: string,
        small_image_url: string | null,
        medium_image_url: string | null,
        large_image_url: string | null,
        max_image_url: string | null
    } | null,
    title: string,
    title_english: string | null,
    title_japanese: string | null,
    type: string | null,
    source: string | null,
    episodes: number | null,
    status: string | null,
    airing: Boolean | null,
    aired_from: string | null,
    aired_to: string | null,
    aired_str: string | null,
    duration: string | null,
    rating: string | null,
    score: number | null,
    synopsis: string | null,
    season: string | null,
    year: string | null
}

const route = useRoute()
const id = route.params.id
const info: any = await useFetch(`http://localhost:8080/anime/${id}`)
const anime: Anime = info.data.value

</script>

<style scoped>
.content {
    margin-top: 50px;
    width: 90%;
    display: flex;
    flex-direction: row;
}

.img {
    padding: 5px;
    height: 700px;
    width: 550px;
    overflow: hidden;
    border-radius: 10px;
}

.titles,
.score {
    margin-left: 50px;
    margin-top: 10px;
}

.score {
    font-size: 2rem;
    display: flex;
    align-items: baseline;
}

.titles h1 {
    margin-bottom: 10px;
}

.small-titles {
    margin-bottom: 0;
}

.ten {
    font-size: 1rem;
}
</style>