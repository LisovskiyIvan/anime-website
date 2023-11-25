<template>
    <div class="card">
        <div class="animeContainer" v-for="item in anime" :key="item.mal_id">
            <img :src="item.images.jpg.large_image_url" class="img" alt="">
            <div class="descriptionContainer">
                <h3 class="title headingFont">{{ item.title }}</h3>
                <p class="textFont description">{{ item.synopsis }}</p>
                <div class="genres">
                    <button type="button" v-for="genre in item.genres" class="genre btn btn-outline-secondary">
                        {{ genre.name }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props: any = defineProps({
    queryParam: {
        type: Object,
        required: true
    }
})
const {queryParam} = props
const { data: animes } = await useFetch(`https://api.jikan.moe/v4/top/anime?filter=${queryParam.filter}&limit=${queryParam.limit}&page=${queryParam.page}&sfw=true`)
const anime: any[] = (animes.value as any).data



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