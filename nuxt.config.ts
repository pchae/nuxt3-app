import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-8',
            viewport: "width=device-width, initial-scale=1",
            title: 'Phil Choi',
            meta: [
                // <meta name="description" content="site description">
                { name: 'description', content: 'Phil Choi Product Design portfolio' },
                { name: 'keywords', content: 'Phil Choi, Phil, Choi, Product Design, Product, Design, UX, UI, Interaction, Mobile, Web, SaaS' }
            ],
        },
    },

    css: ["assets/styles/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "~/assets/styles/_variables.scss";',
                },
            },
        }
    },

    // Fix for Nuxt RC 9-11
    alias: {
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },
    modules: [
        // comment
        '@pinia/nuxt',
        'nuxt-purgecss',

    ],
    // Enables Static site generation (SSG), use 'server' for Server-side rendering
    // Serverside rendering toggle
    ssr: true,
})
