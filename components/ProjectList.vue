<template>
    <section id="work" class="container py-6 px-4">
        <div class="content has-text-centered mt-6 pb-4">
            <h1 class="title has-text-white has-text-left-mobile">Case Studies</h1>
        </div>

        <div id="grid" class="is-flex is-flex-wrap-wrap">

            <article v-for="item in projectStore.projectJson.projects" :key="item.id" class="media">

                <figure class="media-left">
                    <NuxtLink :to="item.to" active-class="active">
                        <p class="image is-128x128">
                            <img :src="item.imgSrc" :alt="item.imgAlt" :width="item.width" :height="item.height">
                        </p>
                    </NuxtLink>
                </figure>
                <div class="media-content">
                    <div class="pr-4">
                        <NuxtLink :to="item.to" active-class="active">
                            <h1 class="is-size-4 has-text-weight-bold">{{ item.title }}</h1>
                        </NuxtLink>
                        <p class="is-family-code has-text-weight-bold">{{ item.desc }}</p>
                    </div>
                </div>
            </article>

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
@import '~/assets/styles/_variables.scss';
.media {
    width: 100%;
}

.media+.media {
    padding-top: 0;
    margin-top: 0;
    border-top: 0
}

@media only screen and (min-width: 769px) {
    .media {
        width: 50%;
    }
}

.active>h1 {
  color: $blue;
}
</style>