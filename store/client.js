import { defineStore } from 'pinia'

import clientJson from '@/json/clients.json'

export const useClientStore = defineStore({
    id:'client',
    state: () => {
        return {
            clientJson
        }
    },
    getters: {
//        clients: state => state.clientList,
    },
    actions: {}
})