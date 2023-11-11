<template>
    <div class="wrap">
        <div class="bg-dark">
            <Navigation />
        </div>
        <div class="main-content bg-rose">
            <h1 class="headingFont heading">Топ 100 аниме</h1>
            <div class="flex">
                <AnimeCardContainer />
            </div>
        </div>
    </div>
</template>

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