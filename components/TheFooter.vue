<template>  
<footer class="w-full bg-slate-800">
    <div class="grid grid-cols-12 w-full p-4">
        <div class="col-span-6 flex flex-col justify-between">
            <div class="w-64">
                <img src="@/assets/logos/falestiodev_logosvg_light.svg" alt="logo" />
            </div>

            <div>
                <p>2022 All Rights Reserved</p>
            </div>
        </div>
        <div class="col-span-3">
            <h3 class="text-xl font-bold mb-4">Socials</h3>
            <ul class="flex flex-col gap-3">
                <li>
                    <NuxtLink to="https://www.linkedin.com/in/falestio-hanif-al-hakim-ab4610221/">
                        LinkedIn
                    </NuxtLink>
                </li>   
                <li>
                    <NuxtLink to="https://www.instagram.com/falestiohanif/">
                        Instagram
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="col-span-3">
            <h3 class="text-xl font-bold mb-4">Other pages</h3>
            <ul class="flex flex-col gap-3"> 
                <li>
                    <NuxtLink to="/support" class="p-2 bg-green-700 rounded">
                        Support me
                    </NuxtLink>
                </li>
                
                <li>
                    <NuxtLink to="mailto: falestionewsletter@gmail.com">
                        Contact
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</footer>
</template>