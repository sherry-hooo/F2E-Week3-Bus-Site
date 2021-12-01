<template>
  <Nav></Nav>
  <router-view />
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Nav from '@/components/Nav.vue'

export default {
  components: { Nav },
}
</script>

<style lang="scss">
@use "@/assets/scss/abstract/_reset.scss";

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  font-family: Roboto;
  text-align: center;
  color: #2c3e50;
  background: #d4d4d4;
  min-height: 100vh;
}

main {
  padding: 60px 16px 0;
  @include breakpoint.tablet {
    padding: 60px 30px 0;
  }
  @include breakpoint.desktop {
    padding: 60px 100px 0;
  }
}
</style>
