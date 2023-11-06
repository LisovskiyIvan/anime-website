<template>
  <div>
    <NuxtPage />
  </div>
</template>


<script setup>
useHead({
  "link": [
    { "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" }
  ],
  title: 'Аниме вебсайт'
}
)

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Enriqueta&family=Geologica:wght@300;400;700&family=Nunito:wght@200;300;400&display=swap');

* {
  margin: 0;
  padding: 0;
}

.bg-rose {
  background-color: #EFBCD5;
}

.bg-dark {
  background-color: #403F4C;
}

.dark {
  color: #403F4C;
}

.rose {
  color: #EFBCD5;
}

.white {
  color: #fff;
}

.headingFont {
  font-family: 'Enriqueta', serif;
}

.textFont {
  font-family: 'Nunito', sans-serif;
}

.btn-outline-primary {
  margin-right: 20px;
  color: #EFBCD5;
  border-color: #EFBCD5;
}

.btn-outline-primary:hover {
  background-color: #EFBCD5;
  color: black;
}
</style>