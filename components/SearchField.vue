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
        <div class="flex flex-col w-[500px] relative" @blur="showResults = false">
            <input type="text" v-model="query" class="p-2" @focus="showResults = true">
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