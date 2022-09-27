<template>
  <div>
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <h2 class=""><strong>PC</strong></h2>
        </NuxtLink>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" class="navbar-end">

        <div class="navbar-menu">
          <NuxtLink to="/" class="navbar-item">
            Work
          </NuxtLink>
          <NuxtLink to="/about" class="navbar-item">
            About
          </NuxtLink>
        </div>

      </div>
    </nav>
  </div>

  <div v-show="toggle" id="menuOverlay" class="overlay">
    <div class="navbar is-black">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <h2 class=""><strong>PC</strong></h2>
        </NuxtLink>

        <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="true" @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>

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
          <NuxtLink to="/about" active-class="active">
            <h2 class="is-size-3-tablet is-size-4-mobile">Experimental</h2>
          </NuxtLink>
        </div>
      </div>
    </div>

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
        this.scrollTop = document.documentElement.scrollTop
        document.body.style.position = 'fixed'
        document.body.style.marginTop = -this.scrollTop + 'px'
      } else {
        document.body.style.marginTop = 0
        document.body.style.position = 'relative'
        document.documentElement.scrollTo(0, this.scrollTop)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.navbar-item {
  color: $blue;
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
  color: #f80c80;
  border-bottom: 1px solid;
}
</style>