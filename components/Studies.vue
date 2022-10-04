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
                                <img src="/assets/thumbs/engage.png" alt="Engage: Content Studio">
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
                                <img src="/assets/thumbs/spc.png" alt="Student Price Card">
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
                        <NuxtLink to="/project">
                            <figure class="image container">
                                <img src="/assets/thumbs/pbs.png" alt="Public Broadcasting Service">
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
                                <img src="/assets/thumbs/ds.jpg" alt="Design Systems">
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