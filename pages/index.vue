<template>
    <div>

        <Head>
            <Title>Phil Choi - Product Designer</Title>
            <Meta name="description" content="Phil Choi - Product Design portfolio" />
        </Head>

        <Nav />

        <Hero />

        <section id="grid" class="container has-background-black">
            <div class="columns">
                <div class="column">
                    <div class="box has-background-black-bis">
                        <div class="media">
                            <picture>
                                <source type="image/webp" srcset="~/assets/thumbs/engage.webp">
                                <source type="image/png" srcset="~/assets/thumbs/engage.jpg">
                                <img src="~/assets/thumbs/engage.webp" alt="RENAME." draggable="false" width="800"
                                    height="600">
                            </picture>
                        </div>
                        <div class="pb-2">
                            <h1 class="title has-text-white">
                                Content Studio
                            </h1>
                        </div>

                        <div class="tags">
                            <span class="tag is-success">
                                Enterprise SaaS
                            </span>
                            <span class="tag is-success">
                                PWA
                            </span>
                            <span class="tag is-success">
                                React Native
                            </span>
                        </div>

                        <NuxtLink to="/engage">
                            <button class="button is-link is-medium">
                                <p><strong>View project</strong></p>
                            </button>
                        </NuxtLink>
                    </div>

                    <div class="box has-background-black-bis">
                        <div class="media">
                            <picture>
                                <source type="image/webp" srcset="~/assets/thumbs/pbs.webp">
                                <source type="image/png" srcset="~/assets/thumbs/pbs.jpg">
                                <img src="~/assets/thumbs/pbs.webp" alt="RENAME." draggable="false" width="800"
                                    height="600" loading="lazy">
                            </picture>
                        </div>
                        <div class="pb-2">
                            <h1 class="title has-text-white">
                                PBS
                            </h1>
                        </div>
                        <div class="tags">
                            <span class="tag is-success">
                                Microsoft Lumia
                            </span>
                            <span class="tag is-success">
                                Microsoft Surface
                            </span>
                        </div>

                        <NuxtLink to="/pbs">
                            <button class="button is-link is-medium">
                                <p><strong>View project</strong></p>
                            </button>
                        </NuxtLink>
                    </div>
                </div>

                <div class="column">
                    <div class="box has-background-black-bis">
                        <div class="media">
                            <picture>
                                <source type="image/webp" srcset="~/assets/thumbs/starz.webp">
                                <source type="image/png" srcset="~/assets/thumbs/starz.png">
                                <img src="~/assets/thumbs/starz.webp" alt="RENAME." draggable="false" width="800"
                                    height="600" loading="lazy">
                            </picture>
                        </div>
                        <div class="pb-2">
                            <h1 class="title has-text-white">
                                Starz Play
                            </h1>
                        </div>

                        <div class="tags">
                            <span class="tag is-success">
                                Roku
                            </span>
                            <span class="tag is-success">
                                Samsung SmartTV
                            </span>
                            <span class="tag is-success">
                                Amazon FireTV
                            </span>
                        </div>

                        <NuxtLink to="/starz">
                            <button class="button is-link is-medium">
                                <p><strong>View project</strong></p>
                            </button>
                        </NuxtLink>
                    </div>

                    <div class="box has-background-black-bis">
                        <div class="media">
                            <picture>
                                <source type="image/webp" srcset="~/assets/thumbs/ds.webp">
                                <source type="image/png" srcset="~/assets/thumbs/ds.jpg">
                                <img src="~/assets/thumbs/ds.webp" alt="RENAME." draggable="false" width="800"
                                    height="600" loading="lazy">
                            </picture>
                        </div>
                        <div class="pb-2">
                            <h1 class="title has-text-white">
                                Design Systems
                            </h1>
                        </div>

                        <div class="tags">
                            <span class="tag is-success">
                                Figma
                            </span>
                            <span class="tag is-success">
                                Sketch
                            </span>
                            <span class="tag is-success">
                                Storybook.js
                            </span>
                        </div>

                        <NuxtLink to="/designsystem">
                            <button class="button is-link is-medium">
                                <p><strong>Request Access</strong></p>
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <Footer />

    </div>
</template>


<script setup>
</script>


<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';
.tag:not(body).is-success {
    background-color: #1CD0A0;
    color: $black;
}

.button.is-link {
    color: $white;
    background: $navy;
    border-color: none;

    &:hover {
        color: $white;
        background: $blue;
        border-color: none;
    }
}
</style>