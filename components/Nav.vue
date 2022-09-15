<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-item">
        <h2 class="subtitle"><strong>PC</strong></h2>
      </NuxtLink>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic" @click="toggleAction">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasic" class="navbar-menu">
      <div class="navbar-start">
      </div>
  
      <div class="navbar-end">
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
</template>

<script>
  export default {
    data: function() {
      return {
        toggle: false,
      };
    },

    methods: {
      toggleAction: function() {
        this.toggle = !this.toggle;
        if (this.toggle) {
          this.scrollTop = document.documentElement.scrollTop
          document.body.style.position = 'fixed'
          document.body.style.marginTop = -this.scrollTop + 'px'
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
</style>