// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }
            ]
        }
    },

    modules: ['@nuxtjs/tailwindcss'],
})
