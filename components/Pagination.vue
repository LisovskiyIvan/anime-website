
<template>
    <div class="card bg-[#403F4C]">
        <Paginator @page="onChange($event)" v-model:first="offset" :rows="1" :totalRecords="8" :pt="{
            root: ({props, state,context}) => ({
                            class: 'bg-[#403F4C] white'
                        }),
            pageButton: ({ props, state, context }) => ({
                    class: context.active ? 'bg-secondary' : undefined
                }),
            current: ({ props, state, context}) => ({
                
            })
        }"></Paginator>
    </div>
</template>

<script setup>
const offset = ref(0)

function onChange(event) {
    offset.value = event.page
    return offset
}  

// console.log(offset)
</script>

z``