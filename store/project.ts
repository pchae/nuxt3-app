import { defineStore } from 'pinia'

import projectJson from '@/json/projects.json'

export const useProjectStore = defineStore({
    id: 'workProjects',
    state: () => {
        return {
            projectJson
        }
    },
    getters: {},

    actions: {}
})