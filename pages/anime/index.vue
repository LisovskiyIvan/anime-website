<template>
    <div class="wrap">
        <div class="bg-dark">
            <Navigation />
        </div>
        <div class="main-content bg-rose">
            <h1 class="headingFont heading text-4xl pb-3">Аниме</h1>
            <div class="flex">
                <AnimeCardContainer :anime="anime"/>
                <Filters />
            </div>
        </div>
        <Pagination />
    </div>
</template>

<script setup>
 const queryParam = {
    filter: 'finished',
    limit: 20,
    page: 1,
    sortBy: 'score',
    type: 'TV'
 }

 const { data: animes } = await useFetch(`/api/anime?filter=${queryParam.filter}&limit=${queryParam.limit}&page=${queryParam.page}&sortBy=${queryParam.sortBy}&type=${queryParam.type}`)
const anime = animes.value.data

</script>

<style scoped>
.wrap {
    height: auto;
    width: 100%;
}

.bg-dark {
    height: 10vh;
}

.main-content {
    padding-top: 30px;
}

.heading {
    margin: 0 0 20px 30px;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
</style>