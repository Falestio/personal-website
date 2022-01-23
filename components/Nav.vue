<template>
    <nav class="w-full h-20 px-4 lg:px-12 bg-blue-50">
        <div class="flex items-center justify-between h-full">
            <div class="flex items-center gap-10">
                <div>
                    <h1 class="text-2xl font-bold">Falestio Hanif</h1>
                </div>
                <div>
                    <div :class="{'left-0': showMenu, 'left-full': !showMenu }"
                    class="fixed p-8 top-20 w-full bg-blue-100 md:static md:p-0 md:bg-transparent">
                        <ul class="flex-col gap-10 text-center md:flex md:items-center md:flex-row md:gap-6">
                            <li class="p-4 hover:bg-blue-200">
                                <NuxtLink to="">projects</NuxtLink>
                            </li>
                            <li class="p-4 hover:bg-blue-200" >
                                <NuxtLink to="">contact</NuxtLink>
                            </li>
                            <li class="p-4 hover:bg-blue-200">
                                <NuxtLink to="">blog</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <kbd>github</kbd>
                <kbd>moon</kbd>
                <button @click="toggleMenuMobile"
                class="p-2 bg-gray-200 rounded-md md:hidden">
                    <div class="h-1 w-4 bg-black mb-1"></div>
                    <div class="h-1 w-4 bg-black mb-1"></div>
                    <div class="h-1 w-4 bg-black"></div>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    data(){
        return {
            showMenu: false,
        }
    },
    methods: {
        toggleMenuMobile() {
            this.showMenu = !this.showMenu
        }
    }
}
</script>

<style>

</style>