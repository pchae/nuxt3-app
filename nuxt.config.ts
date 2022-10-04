import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        meta: [
            { charset: 'utf-8' },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],

        htmlAttrs: {
            'lang': 'en',
            class: 'has-navbar-fixed-top',
        },

        script: [],
        link: [
            { 
                href: "https://fonts.googleapis.com",
                rel: "preconnect"
            },
            {
                href: "https://fonts.gstatic.com",
                rel: "preconnect",
                crossorigin: true
            }
        ]
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

    ]
})
