<template>
    <div class="content card">
            <img class="img" src="/img/photo.jpg" alt="">
            <div class="main">
                <div class="score">
                    9
                    <div class="ten">
                        /10
                    </div>
                </div>
                <div class="titles headingFont">
                    <h1>Naruto</h1>
                    <div class="small-titles">
                        <h4>Another title</h4>
                        <h4>Boruto</h4>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
.content {
    margin-top: 50px;
    width: 70%;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
}

.img {
    padding: 5px;
    height: 500px;
    width: 400px;
    overflow: hidden;
    border-radius: 10px;
}

.titles, .score {
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
}
</style>