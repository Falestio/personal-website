<script setup>
useHead({
    title: "Wihhh support pisaan euy!",
})
</script>

<template>
    <div class="h-screen p-6 md:pt-8">
        <div class="mx-auto max-w-[820px] rounded bg-stone-800 p-6">
            <NuxtLink to="/" class="block mb-4">
                <img src="@/assets/logos/falestiodev_chickenlogosvg_light.svg" alt="logo">
            </NuxtLink> 
            <h1 class="text-4xl mb-4">Kirim pesan terimakasih</h1>
            <p class="text-xl mb-4">apresiet banget 💪🏻</p>

            <div class="w-full flex flex-col gap-4">
                <textarea class="p-4 text-xl"></textarea>
                <NuxtLink to="https://www.youtube.com/watch?v=MxodnipCunQ" target="_blank" class="self-start px-4 py-2 text-white bg-blue-400 rounded">Kirim</NuxtLink>
            </div>
            <!-- <hr class="my-8">
            <h1 class="text-4xl">Donation</h1>
            <p class="text-xl">
                Make a donation of your choice instead 😊
            </p> -->
        </div>
    </div>
</template>