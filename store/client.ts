import { defineStore } from 'pinia'

import clientJson from '@/json/clients.json'

export const useClientStore = defineStore({
    id: 'clientLogos',
    state: () => {
        return {
            clientJson
        }
    },
    getters: {},

    actions: {}
})