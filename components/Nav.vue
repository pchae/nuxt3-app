<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <h2 class="subtitle"><strong>PC</strong></h2>
        </NuxtLink>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleAction">
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
        <div id="header" class="">
          <div class="navbar">
            <div class="navbar-brand">
              <NuxtLink to="/" class="navbar-item">
                <h2 class="subtitle"><strong>Overlay</strong></h2>
              </NuxtLink>

              <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample" @click="toggleAction">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>

        <div id="nav" class="container" @click="toggleAction">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="navbar-item">
                <NuxtLink to="/" active-class="active">
                  <h2>Work</h2>
                </NuxtLink>
              </div>

              <div class="navbar-item">
                <NuxtLink to="/about" active-class="active">
                  <h2>About</h2>
                </NuxtLink>
              </div>

              <div class="navbar-item">
                <NuxtLink to="/about" active-class="active">
                  <h2>Experimental</h2>
                </NuxtLink>
              </div>  
            </div>


          </div>
    
        </div>
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
  background-color: #000;
  overflow: visible;
  opacity: 0.96;
  z-index: 1000;
}
.active > h2 {
  color: #f80c80;
  border-bottom: 1px solid;
}
</style>