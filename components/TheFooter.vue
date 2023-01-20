<template>  
<footer class="w-full bg-slate-800">
    <div class="grid grid-cols-12 gap-4 w-full px-8 py-10">
        <div class="col-span-12 md:col-span-6 flex flex-col justify-between">
            <div class="w-64">  
                <img src="@/assets/logos/falestiodev_logosvg_light.svg" alt="logo" />
            </div>

            <div>
                <p>2022 All Rights Reserved</p>
            </div>
        </div>
        <div class="col-span-12 md:col-span-3">
            <h3 class="text-xl font-bold mb-4">Medsos</h3>
            <ul class="flex flex-col gap-3">
                <li>
                    <NuxtLink to="https://www.linkedin.com/in/falestio-hanif-al-hakim-ab4610221/" target="_blank">
                        LinkedIn
                    </NuxtLink>
                </li>   
                <li>
                    <NuxtLink to="https://www.instagram.com/falestiohanif/" target="_blank">
                        Instagram
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="col-span-12 md:col-span-3">
            <h3 class="text-xl font-bold mb-4">oder</h3>
            <ul class="flex flex-col gap-3"> 
                <li>
                    <NuxtLink to="/support" class="p-2 bg-green-700 rounded">
                        Kasih support
                    </NuxtLink>
                </li>
                
                <li>
                    <NuxtLink to="mailto: falestionewsletter@gmail.com" target="_blank">
                        Kontak
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</footer>
</template>