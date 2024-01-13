<template>
    <div class="filters card textFont h-[600px] bg-gray-200">
        <h1 class="m-4 font-bold text-2xl">Фильтры</h1>
        <div class="w-[80%] mx-[10%] mb-[10%]">
            <div class="p-[5px] bg-white">
                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select genres"
                    :maxSelectedLabels="10" class="w-full md:w-20rem" />
            </div>
        </div>
    </div>
</template>

<script setup>
const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

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