<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
  
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
        <a class="navbar-item">
          Work
        </a>
        <a class="navbar-item">
          About
        </a>
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

<style>
</style>