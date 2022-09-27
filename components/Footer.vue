<template>
    <footer class="footer has-background-black">
        <div class="level is-mobile">
            <div class="has-text-left-mobile">
                <p class="">
                    <strong class="has-text-white">&#169; 2014-2022 Phil Choi.</strong>
                </p>
            </div>
            <div class="level has-text-right-mobile is-mobile">
                <div class="level-item">
                    <NuxtLink to="https://linkedin.com/in/pchoi1/" target="_blank" rel="noopener" class="navbar-item">
                        LinkedIn
                    </NuxtLink>

                </div>
                <div class="level-item">

                    <NuxtLink to="mailto:contact@philchoi.ca" target="_blank" rel="noopener" class="navbar-item">
                        Email
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.footer {
    padding: 3rem 1rem;
}

.navbar-item {
    color: $blue;

    &:hover {
        background: none;
    }
}
</style>