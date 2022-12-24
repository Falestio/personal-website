import sanityClient from "@sanity/client"

export default defineNuxtPlugin((nuxtApp) => {
    const sanity = sanityClient({
        projectId: 'yejoczzt',
        dataset: 'production',
        apiVersion: '2021-10-21',
        useCdn: true,
    })

    nuxtApp.provide('sanity', sanity)
})