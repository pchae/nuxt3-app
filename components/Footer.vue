<template>
    <footer class="footer has-background-black">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="copyright pl-2">
                    <p class="">
                        <strong class="has-text-white">&#169; 2014-2022</strong>
                    </p>
                </div>
            </div>
            <div class="level-left is-mobile">
                <div class="level-item">
                    <NuxtLink to="https://linkedin.com/in/pchoi1/" target="_blank" rel="noopener" class="navbar-item">
                        <strong>LinkedIn</strong>
                    </NuxtLink>

                </div>
                <div class="level-item">
                    <NuxtLink to="mailto:contact@philchoi.ca" target="_blank" rel="noopener" class="navbar-item">
                        <strong>Email</strong>
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
    padding: 3rem 0.75rem;
}

.navbar-item {
    color: $navy;

    &:hover {
        background: none;
        color: $blue;
    }
}

</style>