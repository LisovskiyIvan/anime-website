
<template>
    <div class="card bg-[#403F4C]">
        <Paginator @page="onChange($event), getPage(offset)" :rows="1" :first="offset - 1" :totalRecords="lastPage" :pt="{
            root: ({ props, state, context }) => ({
                class: 'bg-[#403F4C] white',


            }),
            pageButton: ({ props, state, context }) => ({
                class: context.active ? 'bg-secondary' : undefined
            }),
            current: ({ props, state, context }) => ({

            })
        }"></Paginator>
    </div>
</template>

<script setup>
const props = defineProps({
    lastPage: {
        type: Number,
        required: true
    }
})
const { lastPage } = props
const emit = defineEmits(['getPage'])

const offset = ref(1)


async function onChange(event) {
    offset.value = event.page + 1
    await navigateTo({
        path: '/',
        query: {
            page: offset.value
        },
        
    })
}
function getPage(offset) {
    emit('getPage', offset)
}

</script>
