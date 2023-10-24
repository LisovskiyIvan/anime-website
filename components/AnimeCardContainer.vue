<template>
    <div class="card">
        <div class="animeContainer" v-for="item in anime">
        <img src="img/photo.jpg" class="img" alt="">
        <div class="descriptionContainer">
        <h3 class="title">Название аниме</h3>
        <p class="textFont description">Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti.</p>
        <div class="genres">
            <button type="button" class="genre btn btn-outline-secondary">
                Активность
            </button>
            <button type="button" class="genre btn btn-outline-secondary">
                Боевич
            </button>
            <button type="button" class="genre btn btn-outline-secondary">
                романтика
            </button>
            <button type="button" class="genre btn btn-outline-secondary">
                Пиздарезка
            </button>
        </div>
        </div>
        </div>
    </div>
</template>

<script setup>
    const anime = [
        {title: 'Наруто', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti'},
        {title: '<Блич>', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti'},
        {title: 'ванпис', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti'},
        {title: 'Зигхайл', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti'},
        {title: 'гитлир', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti'},
        {title: 'отто фон бисмарк', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti'},
        {title: 'Наруто', description: 'Тут будут описание какие-то к аниме много текста нужно регить как оно будет оказано Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, deleniti'}
    ]
</script>

<style scoped>
    .card {
        width: 60%;
        margin-left: 5%;
    }
    .animeContainer {
        display: flex;
        margin-bottom: 20px;
    }
    .descriptionContainer {
        display: flex;
        flex-direction: column;
    }
    .title {
        margin: 20px;
    }
    .description, .genres {
        margin: 0 20px 5px 20px;
    }
    .img {
        width: 300px;
        height: 400px;
    }
    .genres {
        position: relative;
        bottom: -30%;
    }
    .genre {
        margin-right: 10px;
    }
</style>