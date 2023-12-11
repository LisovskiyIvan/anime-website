<template>
    <div class="card">
        <div class="animeContainer" v-for="item in anime" :key="item.mal_id">
            <NuxtLink :to="'/anime/' + item.mal_id">
                <img :src="item.images.jpg.large_image_url"
                    class="img transition ease-in-out delay-50  hover:scale-105  duration-300 cursor-pointer" alt="">
            </NuxtLink>
            <div class="descriptionContainer">
                <h3 class="title headingFont font-bold text-2xl">{{ item.title }}</h3>
                <p class="textFont description text-md">{{ item.synopsis }}</p>
                <div class="genres text-md">

                    <button type="button" v-for="genre in item.genres" class="genre btn btn-outline-secondary">
                        <NuxtLink :to="`/anime/?genres=${genre.name}`">
                            {{ genre.name }}
                        </NuxtLink>
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    queryParam: {
        type: Object,
        required: true
    }
})
const { queryParam } = props
// const { data: animes } = await useFetch(`https://api.jikan.moe/v4/top/anime?filter=${queryParam.filter}&limit=${queryParam.limit}&page=${queryParam.page}&sfw=true`)
// const anime: any[] = (animes.value as any).data

const { data: animes} = await useFetch(`/api/anime?filter=${queryParam.filter}&limit=${queryParam.limit}&page=${queryParam.page}&sfw=true`)
const value = animes.value
const anime = value.info.data




// const route = useRoute()
// const genre = route.query.genres
// console.log(genre)


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

.description,
.genres {
    margin: 0 20px 5px 20px;
}

.description {
    max-width: 90ch;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
}

.img {
    width: 280px;
    height: 400px;
    border: 0;
    border-radius: 5px;
    margin: 5px;
    overflow: hidden;
}

.img:first-of-type {
    margin-top: 10px;
}

.genres {
    display: flex;
    position: relative;
    padding-top: 10px;
}

.genre {
    margin-right: 10px;
}
</style>