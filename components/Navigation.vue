<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">Zotov`s anime</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <NuxtLink active-class="active" class="nav-link" aria-current="page" :to="item.path" v-for="(item, index) in routes" :key="index">{{ item.name }}</NuxtLink>
            </div>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Найти" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Найти</button>
            </form>
            <button type="button" class="btn" :class="{'btn-light': switcher, 'btn-dark': !switcher}">Light</button>
        </div>
        </nav>
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
    path: '/about',
    name: 'О нас'
  }
]

let switcher = true;
</script>