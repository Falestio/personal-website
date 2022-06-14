import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    app : {
        head: {
            title: 'Falestio.dev',
            link: [
                { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' }
            ]
        }
    },

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },

    css: ["~/assets/css/tailwind.css"],

    modules: [
        '@nuxt/content'
    ],
})
