<template>
    <div class="flex flex-col items-center">
        <div class="content card">
            <img class="img min-w-[400px] max-w-[550px] w-[550px]" :src=anime.images.jpg.large_image_url alt="">
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
                        <div class="font-bold mr-2">Статус:</div>
                        <div>{{ anime.status }}</div>
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
        <div class="p-12">
            <iframe :src="anime.trailer.embed_url+'&mute=1'" frameborder="0" width="1000" height="600"></iframe>
        </div>
        <!-- <div> Тут будет трейлер
            {{ anime.trailer.embed_url }}
        </div> -->
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id

const { data: animes } = await useFetch(`https://api.jikan.moe/v4/anime/${id}`)
const anime: any = (animes.value as any).data

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
}</style>