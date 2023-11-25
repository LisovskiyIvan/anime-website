<template>
    <div class="wrap">
        <div class="bg-dark">
            <Navigation />
        </div>
        <div class="main-content bg-rose">
            <h1 class="headingFont heading text-4xl">Аниме</h1>
            <div class="flex">
                <AnimeCardContainer :queryParam="queryParam"/>
                <Filters />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
 const queryParam: Object = {
    filter: 'bypopularity',
    limit: 25,
    page: 1
 }
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