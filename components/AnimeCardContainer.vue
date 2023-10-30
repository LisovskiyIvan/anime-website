<template>
    <div class="card">
        <div class="animeContainer" v-for="item in anime" :key="item.title">
        <img src="img/photo.jpg" class="img" alt="">
        <div class="descriptionContainer">
        <h3 class="title headingFont">{{ item.title }}</h3>
        <p class="textFont description">{{ item.description }}</p>
        <div class="genres">
            <button type="button" v-for="genre in item.genres" class="genre btn btn-outline-secondary">
                {{genre}}
            </button>
        </div>
        </div>
        </div>
    </div>
</template>

<script setup>
    const anime = [
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
    .img {
        width: auto;
        height: 300px;
        border: 0;
        border-radius: 5px;
    }
    .genres {
        display: flex;
        position: relative;
        bottom: -30%;
    }
    .genre {
        margin-right: 10px;
    }
</style>