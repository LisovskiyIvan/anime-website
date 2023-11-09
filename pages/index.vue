<template>
    <div class="wrapFirstPage">
        <div class="headline bg-dark">
            <Navigation />
            <div class="heading rose">
                ANIZIGA
            </div>
        </div>
        <div class="paragraph bg-rose">
            <div class="textContainer">
                <div class="headBlock">
                    <h4>Аниме вселенная ждет вас</h4>
                </div>
                <div class="textBlock">
                    <p>Погружайтесь в захватывающий мир аниме сериалов. Тысячи приключений на любой вкус от разбивающей
                        сердце драмы до захватывающих приключений</p>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapSecondPage bg-dark">
        <h1 class="rose headingFont">Новинки недели</h1>
        <Carousel />
    </div>
    <div class="wrapThirdPage bg-rose">
        <h1 class="dark headingFont">Последние аниме</h1>
        <div class="flex">
                <AnimeCardContainer />
                <News />
            </div>
    </div>
    <div class="footer bg-dark">
        <Footer />
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrapFirstPage,
.wrapSecondPage {
    width: 100%;
    height: 100vh;

}

.wrapThirdPage {
    width: 100%;
    height: auto;
    padding-bottom: 25px;
}

.headline {
    height: 55vh;
}

.paragraph {
    width: 100%;
    height: 625.5px;
    justify-content: center;
}

.heading {
    display: flex;
    justify-content: center;
    font-size: 261px;
    align-items: center;
    font-family: 'Elsie', serif;
    /* margin-top: 261.25px; */
    cursor: default;
}

.paragraph {
    display: flex;
    height: 45vh;
    justify-content: center;
    align-items: center;
    cursor: default;
}

.textContainer {
    display: flex;
    height: 120px;
    width: 75%;
    justify-content: center;
}

h4 {
    font-size: 50px;
    font-family: 'Elsie', serif;
}

p {
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
}

.headBlock {
    display: flex;
}

.textBlock {
    display: flex;
    width: 80%;
}

h1 {
    padding: 50px;
}

.footer {
    width: 100%;
    height: 75px;
}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
</style>