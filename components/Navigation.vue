<template>
  <div class="wrapper">
    <ul class="nav">
      <li class="nav-item" v-for="(item, index) in routes" :key="index">
        <NuxtLink active-class="active" :to="item.path" class="nav-link" aria-current="page">{{ item.name }}</NuxtLink>
      </li>
    </ul>
    <div class="login">
      <button type="button" class="btn btn-outline-primary">Войти</button>
      <button type="button" class="btn btn-outline-secondary">Регистрация</button>
    </div>
  </div>
</template>

<script setup>
const routes = [
  {
    path: '/',
    name: 'Главная'
  },
  {
    path: '/anime',
    name: 'Аниме'
  },
  {
    path: '/random',
    name: 'Случайное аниме'
  },
  {
    path: '/top',
    name: 'Топ 100'
  },
  {
    path: '/about',
    name: 'О нас'
  }
]

</script>

<style scoped>
.wrapper {
  width: 80vw;
  margin-left: 10vw;
  display: flex;
  justify-content: space-between;
  font-family: 'Nunito', sans-serif;
  padding-top: 20px;
}

ul {
  margin: 0px;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #EFBCD5;
  font-size: 18px;
}

.nav-link:hover {
  color: #EFBCD5;
}

.nav-link:hover::after {
  transform-origin: right;
  transform: scaleX(1);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 5px;
  left: 0;
  bottom: -6px;
  transform: scaleX(0);
  transition: 0.5s;
}
.login {
  font-size: 16px;
}
.btn-outline-secondary:hover {
  background-color: #EFBCD5;
  color: black;
}
</style>