<template>
    <section id="cta" class=" mb-0">
        <div class="container py-6">
            <div class="has-text-centered pb-6">
                <h1 class="title has-text-white">Say Hello</h1>
            </div>
            <div class="level is-centered">
                <div class="level-item mb-6">
                    <NuxtLink to="mailto:contact@philchoi.ca">
                        <button class="button is-link is-medium">
                            <p><strong>Send an email</strong></p>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.button.is-link {
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