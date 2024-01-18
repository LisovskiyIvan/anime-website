<template>
    <div class="filters card textFont  bg-[#403F4C]">
        <h1 class="m-4 font-bold text-2xl text-white">Фильтры</h1>
        <div class="w-[80%] mx-[10%] mb-[10%]">
            <div class="mb-4">
                <div class="text-white text-2xl mb-3">Жанры</div>
                <MultiSelect v-model="selectedGenres"  :options="genres" optionLabel="name" placeholder="Выберите жанры"
                    :maxSelectedLabels="4" class="w-full md:w-20rem px-2 py-1 h-8 bg-[#EFBCD5]" :pt="{
                        list: ({props, state,context}) => ({
                            class: 'bg-[#EFBCD5]'
                        })
                    }"/>
            </div>
            <div class="mb-4">
                <div class="text-white text-2xl mb-3">Тип</div>
                <MultiSelect v-model="selectedTypes"  :options="type" optionLabel="name" placeholder="Выберите тип"
                    :maxSelectedLabels="4" class="w-full md:w-20rem px-2 py-1 h-8 bg-[#EFBCD5]" :pt="{
                        list: ({props, state,context}) => ({
                            class: 'bg-[#EFBCD5]'
                        })
                    }"/>
            </div>
            <div class="mb-4">
                <div class="text-white text-2xl mb-3">Статус</div>
                <MultiSelect v-model="selectedStatus"  :options="status" optionLabel="name" placeholder="Выберите статус"
                    :maxSelectedLabels="4" class="w-full md:w-20rem px-2 py-1 h-8 bg-[#EFBCD5]" :pt="{
                        list: ({props, state,context}) => ({
                            class: 'bg-[#EFBCD5]'
                        })
                    }"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const selectedGenres = ref();
const selectedTypes = ref()
const selectedStatus = ref()
const genres = ref([
    { name: 'Спорт', code: 'Sports' },
    { name: 'Фэнтези', code: 'Fantasy' },
    { name: 'Яой', code: 'Boys Love' },
    { name: 'Ужасы', code: 'Horror' },
    { name: 'Драма', code: 'Drama' },
    { name: 'Хоррор', code: 'Suspense' },
    { name: 'Научная фантастика', code: 'Sci-Fi' },
    { name: 'Романтика', code: 'Romance' },
    { name: 'Мистика', code: 'Mystery' },
    { name: 'Эротика', code: 'Erotica' },
    { name: 'Повседневность', code: 'Slice of life' },
    { name: 'Юри', code: 'Girls Love' },
    { name: 'Награжденное', code: 'Award Winning' },
    { name: 'Сверхъестественное', code: 'Supernatural' },
    { name: 'Приключения', code: 'Adventure' },
    { name: 'Гурман', code: 'Gourmet' },
    { name: 'Экшен', code: 'Action' },
    { name: 'Комедия', code: 'Comedy' },
    { name: 'Авангард', code: 'Avant Garde' },
    { name: 'Этти', code: 'Ecchi' }
]);


const type = ref([
    { name: 'Сериал', code: 'TV'},
    { name: 'ONA', code: 'ONA'},
    { name: 'OVA', code: 'OVA'},
    { name: 'Спешл', code: 'Special'},
    { name: 'Фильм', code: 'Movie'},
    { name: 'Музыка', code: 'Music'}
])

const status = ref([
    { name: 'Анонсированно', code: 'upcoming'},
    { name: 'Выходит', code: 'ongoing'},
    { name: 'Закончено', code: 'finished'}
])

</script>

<style scoped>
.filters {
    max-height: 800px;
    width: 25%;
    max-width: 500px;
    margin-right: 5%;
    position: sticky;
    top: 20px;
}
.new {
    padding: 10px;
}
</style>