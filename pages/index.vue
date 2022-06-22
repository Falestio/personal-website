<script setup>
const allPost = await queryContent('/').find()
</script>

<template>
    <div>
        <div class="c pt-14">
            <h1 class="text-h1 text-center mb-2">Falestio.dev</h1>
            <p class="text-base text-center">Blog web development</p>
            <a class="text-base link" href="../assets/pdf/Tubes2_Falestio Hanif Al Hakim.pdf" download>
                FILE TUTORIAL WEB HOSTING
            </a>
        
            <div class="artikel-terbaru flex flex-col gap-8 mt-8">
                <div v-for="post in allPost" :key="post.title">
                    <NuxtLink :to="post._path" class="block p-6 border-b-2 border-slate-600">
                        <h2 class="text-h2 mb-2 text-blue-400">{{ post.title }}</h2>
                        <p class="text-base">{{ post.description }}</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>