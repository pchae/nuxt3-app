<template>
    <div>

        <Head>
            <Title>Phil Choi - Product Designer</Title>
            <Meta name="description" content="Phil Choi - Product Design portfolio" />
        </Head>

        <Nav />

        <Hero />

        <section id="engage" class="section is-medium has-background-black-ter">
            <div class="hero-body">
                <div class="container">
                <h1 class="title has-text-white">
                    Engage Content Studio
                </h1>
                <NuxtLink to="/engage">
                    <button class="button is-link is-medium">
                        <p><strong>View project</strong></p>
                    </button>
                </NuxtLink>
            </div>
            </div>
        </section>

        <section id="c51" class="section is-medium has-background-grey-darker">
            <div class="hero-body">
                <div class="container">
                <h1 class="title has-text-white">
                    Starz Play
                </h1>
                <NuxtLink to="/starz">
                    <button class="button is-link is-medium">
                        <p><strong>View project</strong></p>
                    </button>
                </NuxtLink>
            </div>
            </div>
        </section>

        <Footer />

    </div>
</template>


<script setup>
</script>


<style>

</style>