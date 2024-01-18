<template>
    <div class="card mb-10">
        <div class="animeContainer" v-for="item in anime" :key="item.id">
            <NuxtLink :to="'/anime/' + item.id">
                <img :src="item.large_image_url"
                    class="img transition ease-in-out delay-50  hover:scale-105  duration-300 cursor-pointer"
                    :alt="item.title">
            </NuxtLink>
            <div class="descriptionContainer">
                <h3 class="title headingFont font-bold text-2xl">{{ item.title }}</h3>
                <h6 class="title mt-0 headingFont font-bold text-lg">{{ item.title_english }}</h6>
                <h6 class="title mt-0 headingFont font-bold text-lg">{{ item.title_japanese }}</h6>
                <p class="textFont description text-md">{{ item.synopsis }}</p>
                <div class="genres text-md">

                    <button type="button" v-for="genre in item.genres" class="genre btn btn-outline-secondary">
                        <NuxtLink :to="`/anime/?genres=${genre.name}`">
                            {{ genre.name_rus }}
                        </NuxtLink>
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    anime: {
        type: Object,
        required: true
    }
})
const { anime } = props



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