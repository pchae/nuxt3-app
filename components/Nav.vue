<template>
  <div>
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <h2 class=""><strong>PC</strong></h2>
        </NuxtLink>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
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
              <strong>Work</strong>
            </NuxtLink>
          </div>
          <div class="navbar-item">
            <NuxtLink to="/about" active-class="active">
              <strong>About</strong>
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
          data-target="navbarBasic" @click="toggleAction">
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
                <h2 class="is-size-3-tablet is-size-4-mobile has-text-weight-bold">Work</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/about" active-class="active">
                <h2 class="is-size-3-tablet is-size-4-mobile has-text-weight-bold">About</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/tos" active-class="active">
                <h2 class="is-size-3-tablet is-size-4-mobile has-text-weight-bold">Terms of Service</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/privacy" active-class="active">
                <h2 class="is-size-3-tablet is-size-4-mobile has-text-weight-bold">Privacy Policy</h2>
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
      if (this.toggle) {
        document.body.classList.add("disableScroll");
      } else {
        document.body.classList.remove("disableScroll");
      }
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
  overflow-y: hidden;
  opacity: 0.96;
  z-index: 100;
}

.active>h2 {
  color: $blue;
}

</style>