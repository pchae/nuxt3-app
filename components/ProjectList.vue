<template>
    <section id="work" class="container py-6 px-4">
        <div class="content has-text-centered mt-6">
            <h1 class="title has-text-white">Case Studies</h1>
        </div>

        <div id="grid" class="is-flex is-flex-wrap-wrap">
            <div class="media" v-for="item in projectStore.projectJson.projects" :key="item.id">
                <figure class="image">
                    <img :src="item.imgSrc" :alt="item.imgAlt" :width="item.width" :height="item.height">
                </figure>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
    import { useProjectStore } from "~/store/project";

    export default {
        setup() {
            const projectStore = useProjectStore()

            return { projectStore }
        }
    }
</script>

<style lang="scss" scoped>
</style>