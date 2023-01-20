<script setup>
import { matchSorter } from "match-sorter"
const { $sanity } = useNuxtApp()
const showResults = ref(false)

const query = ref('')
const results = ref(null)

const articleQuery = '*[_type == "article"]{title , slug, secondTitle, category->{ name, slug}}'
const params = {}
const list = await $sanity.fetch(articleQuery, params)

watch(query, (newQuery, oldQuery) => {
    if(newQuery === ''){
        results.value = null
    } else {
        results.value = matchSorter(list, newQuery, {keys: ['title', 'category.name']})
    }
})
</script>

<template>
    <div>
        <div class="flex flex-col w-[150px] md:w-[350px] lg:w-[500px] relative" @blur="showResults = false">
            <div class="relative">
                <svg class="absolute mt-1 ml-1 text-gray-100 text-center" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/></svg>
                <input type="text" placeholder="Cari artikel.." v-model="query" class="p-2 pl-10 w-full" @focus="showResults = true">
            </div>
            
            <div class="z-50 absolute bg-slate-700 top-12" v-if="showResults">
                <ul class="flex flex-col gap-2">
                    <template v-for="result in results" :key="result.title">
                        <li class="m-2">
                            <NuxtLink :to="result.slug.current">
                                {{ result.title }}
                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>