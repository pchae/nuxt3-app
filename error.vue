<template>
    <div>

        <Head>
            <Title>Phil Choi - Page not found</Title>
            <Meta name="description" content="Phil Choi - 404 error not found" />
        </Head>

        <Nav />

        <section id="main" class="hero is-fullheight-with-navbar">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title has-text-white">Page not found</h1>
                    <p class="subtitle has-text-grey-light">The page you are looking for does not exist.</p>
                    <div class="">
                        <NuxtLink to="/">
                            <button class="button is-link is-medium is-outlined">
                                <p><strong>Go home</strong></p>
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

.button.is-link.is-outlined {
    color: $navy;
    background: none;
    border-color: $navy;

    &:hover {
        color: $blue;
        background: none;
        border-color: $blue;
    }
}
</style>