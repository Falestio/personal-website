<script setup>
const { $sanity } = useNuxtApp();

const query = '*[_type == "article"]{_createdAt, title ,metaDesc, slug, secondTitle, category->{_id, name, slug}}';
const params = "";
const articles = await $sanity.fetch(query, params);

const displayArticles = ref(articles);

const allArticlesCount = articles.length;

const categoriesCount = computed(() => {
    const result = [];

    articles.forEach((article) => {
        const isCategoryExists = result.filter((obj) => obj.slug == article.category.slug.current).length > 0;

        // if the categories IS NOT in array push the categories with count 1
        if (!isCategoryExists) {
            const newCategory = {
                name: article.category.name,
                slug: article.category.slug.current,
                count: 1,
            };

            result.push(newCategory);
        }

        // if the categories IS in array, increment the count of that array
        if (isCategoryExists) {
            const categoryInResult = result.filter((obj) => obj.slug === article.category.slug.current)[0];
            categoryInResult.count++;
        }
    });

    return result;
});

const fetchCategory = async (category) => {
    if (category === "all") {
        displayArticles.value = articles;
    } else {
        const query = '*[_type == "article" && category._ref in *[_type == "category" && slug.current == $category]._id]{_id,_createdAt,title,metaDesc,slug,secondTitle, }';
        const params = { category: category };
        displayArticles.value = await $sanity.fetch(query, params);
    }
};
</script>

<template>
    <div>
        <div class="h-screen relative p-4">
            <header class="mb-4 h-[8%]">
                <div class="flex items-end justify-between">
                    <NuxtLink to="/">
                        <img src="@/assets/logos/falestiodev_logosvg_light.svg" alt="logo" width="300" />
                    </NuxtLink>
                    <SearchField></SearchField>
                </div>
            </header>

            <main class="grid grid-cols-12 gap-2 h-[90%]">
                <div class="rounded border border-white col-span-3 overflow-y-auto">
                    <ul class="flex flex-col">
                        <li @click="fetchCategory('all')" class="flex items-center gap-2 w-full p-4 hover:bg-slate-800 cursor-pointer">
                            <p class="text-xl">All</p>
                            <span class="p-2 bg-slate-600 rounded-lg">{{ allArticlesCount }}</span>
                        </li>
                        <template v-for="category in categoriesCount" :key="category.slug">
                            <li @click="fetchCategory(category.slug)" class="flex items-center gap-2 w-full p-4 hover:bg-slate-800 cursor-pointer">
                                <p class="text-xl">{{ category.name }}</p>
                                <span class="p-2 bg-slate-600 rounded-lg">{{ category.count }}</span>
                            </li>
                        </template>
                    </ul>
                </div>

                <div class="p-4 rounded border border-white col-span-6 overflow-y-auto">
                    <div class="flex flex-col gap-8">
                        <template v-for="article in displayArticles" :key="article._createdAt">
                            <NuxtLink :to="`/${article.slug.current}`">
                                <h2 class="text-2xl font-bold text-blue-200">{{ article.title }}</h2>
                                <span class="text-lg opacity-50">{{ article.secondTitle }}</span>
                                <p>{{ article.metaDesc }}</p>
                            </NuxtLink>
                        </template>
                    </div>
                </div>

                <div class="p-4 rounded border border-white col-span-3">
                    <h2 class="text-2xl mb-4">Hello There!</h2>
                    <ul class="flex flex-col gap-4">
                        <li>
                            <NuxtLink class="p-2 rounded hover:bg-stone-900" target="_blank" to="https://www.linkedin.com/in/falestio-hanif-al-hakim-ab4610221/"> LinkedIn </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="p-2 rounded hover:bg-stone-900" target="_blank" to="https://www.instagram.com/falestiohanif/"> Instagram </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="p-2 rounded hover:bg-stone-900" to="/support"> Support me </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink class="p-2 rounded hover:bg-stone-900" to="mailto: falestionewssletter@gmail.com"> Contact </NuxtLink>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    </div>
</template> 