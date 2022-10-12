<template>
    <section id="more-projects" class="container py-6 px-4">
        <div class="content">
            <h1 class="has-text-white">More Projects</h1>
        </div>

        <div id="row" class="columns">
            <div class="column">
                <div class="columns is-mobile is-variable is-1-mobile">
                    <div class="column p-1">
                        <!-- // Replace router link -->
                        <NuxtLink to="/project">
                            <figure class="image container">
                                <picture>
                                    <source type="image/webp" srcset="/assets/thumbs/engage.webp">
                                    <source type="image/png" srcset="/assets/thumbs/engage.png">
                                    <img src="/assets/thumbs/engage.webp" alt="Engage: Content Studio SaaS screenshot."
                                        draggable="false" width="800" height="600" loading="lazy">
                                </picture>
                            </figure>
                            <div class="has-text-white">
                                <p class="is-size-6">Engage: Content Studio</p>
                            </div>
                        </NuxtLink>
                    </div>

                    <div class="column p-1">
                        <!-- // Replace router link -->
                        <NuxtLink to="/tos">
                            <figure class="image container">
                                <picture>
                                    <source type="image/webp" srcset="/assets/thumbs/spc.webp">
                                    <source type="image/png" srcset="/assets/thumbs/spc.png">
                                    <img src="/assets/thumbs/spc.webp" alt="Student Price Card mobile app screenshot."
                                        draggable="false" width="800" height="600" loading="lazy">
                                </picture>
                            </figure>
                            <div class="has-text-white">
                                <p class="is-size-6">Student Price Card</p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="columns is-mobile is-variable is-1-mobile">
                    <div class="column p-1">
                        <!-- // Replace router link -->
                        <NuxtLink to="/engage">
                            <figure class="image container">
                                <picture>
                                    <source type="image/webp" srcset="/assets/thumbs/pbs.webp">
                                    <source type="image/png" srcset="/assets/thumbs/pbs.png">
                                    <img src="/assets/thumbs/pbs.webp" alt="Public Broadcasting Service Surface app screenshot."
                                        draggable="false" width="800" height="600" loading="lazy">
                                </picture>
                            </figure>
                            <div class="has-text-white">
                                <p class="is-size-6">PBS</p>
                            </div>
                        </NuxtLink>
                    </div>

                    <div class="column p-1">
                        <!-- // Replace router link -->
                        <NuxtLink to="/tos">
                            <figure class="image container">
                                <img src="/assets/thumbs/ds.jpg" alt="Design Systems" draggable="false" width="800"
                                    height="600" loading="lazy">
                            </figure>
                            <div class="has-text-white">
                                <p class="is-size-6">Design Systems</p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// Should create a Pinia store to call in projects
</script>

<style lang="scss" scoped>

</style>