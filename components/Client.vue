<template>
    <section id="clients" class="container py-6 px-4">
        <div class="content has-text-centered mt-6">
            <h1 class="title has-text-white">Past Clients</h1>
        </div>

        <div id="grid" class="is-flex is-flex-wrap-wrap">
            <div class="customClass" v-for="item in clientStore.clientJson.clients" :key="item.id">
                <figure class="image is-128x128">
                    <img :src="item.imgSrc" :alt="item.imgAlt">
                </figure>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
import { useClientStore } from "~/store/client";

export default {
    setup() {
        const clientStore = useClientStore()

        return { clientStore }
    }
}

</script>

<style lang="scss" scoped>

.customClass {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 25%;
    flex-shrink: 0;
    padding: 0 2rem;
}


@media only screen and (max-width: 800px) {
    .customClass {
        width: 33.33%;
    }

}

@media only screen and (max-width: 640px) {
    .customClass {
        width: 50%;
        padding: 0 1rem;
    }
}
</style>