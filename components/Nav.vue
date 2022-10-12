<template>
  <div>
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <h2 class=""><strong>PC</strong></h2>
        </NuxtLink>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
          @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" class="navbar-end">

        <div class="navbar-menu">
          <div class="navbar-item">
            <NuxtLink to="/" active-class="active">
              Work
            </NuxtLink>
          </div>
          <div class="navbar-item">
            <NuxtLink to="/about" active-class="active">
              About
            </NuxtLink>
          </div>
        </div>

      </div>
    </nav>
  </div>

  <div v-show="toggle" id="menuOverlay" class="overlay">
    <nav class="navbar is-black">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <h2><strong>PC</strong></h2>
        </NuxtLink>

        <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="true"
          data-target="navbarBasicExample" @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>

    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="navbar-item">
              <NuxtLink to="/" active-class="active">
                <h2 class="is-size-3-tablet is-size-4-mobile">Work</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/about" active-class="active">
                <h2 class="is-size-3-tablet is-size-4-mobile">About</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/tos" active-class="active">
                <h2 class="is-size-3-tablet is-size-4-mobile">Terms of Service</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/privacy" active-class="active">
                <h2 class="is-size-3-tablet is-size-4-mobile">Privacy Policy</h2>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {

  data: function () {
    return {
      toggle: false,
    };
  },

  methods: {
    toggleAction: function () {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.navbar {
  padding: 0 .75rem;
}

.navbar-item {
  color: $blue;

  &:hover {
    background: none;
    color: $red;
  }
}

/* Overlay Menu */
.overlay {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: $black;
  overflow: visible;
  opacity: 0.96;
  z-index: 1000;
}

.active>h2 {
  color: $red;
}
</style>