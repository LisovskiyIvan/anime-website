<template>
    <div class="aboutView textFont bg-dark">
        <Navigation />
        <div class="container">
            <p>Приветствуем тебя, зритель. Мы - небольшая команда из двух студентов разработчиков с идеей и мечтой. По
                вопросам сотрудничества и кооперации обращайтесь в tg, наши другие проекты доступны на github. Сайт ANIBOOM
                создан для максимально удобного просмотра аниме. Спасибо вам, что пользуетесь сайтом и остаетесь с нами.</p>
        </div>
        <div class="footer">
            <div class="links">
                <div class="headings">
                    <div class="frontend">frontend</div>
                    <div class="backend">backend</div>
                </div>
                <ul>
                    <li>
                        <NuxtLink target="_blank" class="facebook" to="https://github.com/LisovskiyIvan">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="" aria-hidden="true"><img src="github.png" alt=""></i>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink target="_blank" class="twitter" to="https://t.me/daymewannabe">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="" aria-hidden="true"><img src="telegram.png" alt=""></i>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink target="_blank" class="instagram" to="https://github.com/suzumeGO">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="" aria-hidden="true"><img src="github.png" alt=""></i>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink target="_blank" class="google" to="https://t.me/suzuuuya">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="" aria-hidden="true"><img src="telegram.png" alt=""></i>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.aboutView {
    height: 100vh;
    width: 100%;
}

.container {
    font-size: 30px;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 30vh;
}

.footer {
    color: white;
    position: absolute;
    bottom: 20%;
    right: 45%;
}
.headings {
    display: flex;
}
.frontend {
    right: 110px;
}
.backend {
    left: 110px;
}
.backend, .frontend {
    position: relative;
    font-size: 25px;
    bottom: 100px;
}
img {
    width: 80px;
    position: relative;
    bottom: -10%;
    left: 9%;
}
ul {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  margin:0;
  padding:0;
  display:flex;
}
ul li {
  list-style:none;
}
ul li a {
  display:block;
  position:relative;
  width:100px;
  height:100px;
  line-height:100px;
  font-size:40px;
  text-align:center;
  text-decoration:none;
  color:#404040;
  margin: 0 30px;
  transition:.5s;
}
ul li a span {
  position:absolute;
  transition: transform .5s;
}
ul li a span:nth-child(1),
ul li a span:nth-child(3){
  width:100%;
  height:3px;
  background:#404040;
}
ul li a span:nth-child(1) {
  top:0;
  left:0;
  transform-origin: right;
}
ul li a:hover span:nth-child(1) {
  transform: scaleX(0);
  transform-origin: left;
  transition:transform .5s;
}

ul li a span:nth-child(3) {
  bottom:0;
  left:0;
  transform-origin: left;
}
ul li a:hover span:nth-child(3) {
  transform: scaleX(0);
  transform-origin: right;
  transition:transform .5s;
}

ul li a span:nth-child(2),
ul li a span:nth-child(4){
  width:3px;
  height:100%;
  background:#404040;
}
ul li a span:nth-child(2) {
  top:0;
  left:0;
  transform:scale(0);
  transform-origin: bottom;
}
ul li a:hover span:nth-child(2) {
  transform: scale(1);
  transform-origin: top;
  transition:transform .5s;
}
ul li a span:nth-child(4) {
  top:0;
  right:0;
  transform:scale(0);
  transform-origin: top;
}
ul li a:hover span:nth-child(4) {
  transform: scale(1);
  transform-origin: bottom;
  transition:transform .5s;
}

.facebook:hover {
  color: #c32aa3;
}
.facebook:hover span { 
  background: #c32aa3;
}
.twitter:hover {
  color: #1da1f2;
}
.twitter:hover span { 
  background: #1da1f2;
}
.instagram:hover {
  color: #c32aa3;
}
.instagram:hover span { 
  background: #c32aa3;
}
.google:hover {
  color: #1da1f2;
}
.google:hover span { 
  background: #1da1f2;
}
ul li a .twitter {
  color: #1da1f2;
}
ul li a:hover:nth-child(3) {
  color: #c32aa3;
}
ul li a:hover:nth-child(4) {
  color: #dd4b39;
}</style>