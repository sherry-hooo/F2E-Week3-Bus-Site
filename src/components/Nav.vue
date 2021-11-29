<template>
  <nav>
    <router-link class="logo_icon" to="/">
      <img src="@/assets/img/logo.svg" alt="logo" />
    </router-link>
    <img
      @click="toggleMenu"
      class="toggle_button"
      src="@/assets/img/icon_menu.svg"
      alt="menu icon"
    />
    <div class="links_group">
      <router-link to="/">找公車</router-link>
      <router-link to="/nearby">附近站牌</router-link>
      <router-link to="/navigation">轉乘規劃</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenu(event) {
      event.target.nextElementSibling.classList.toggle('response')
    },
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

nav {
  height: 80px;
  padding: 20px 30px;
  background: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  @include breakpoint.desktop {
    padding: 20px 150px;
  }
}

.links_group.response {
  display: flex;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 10;
  @include breakpoint.tablet {
    position: initial;
  }
}

.links_group {
  display: none;
  background: color.$primary-purple;
  color: white;
  border-radius: 0 0 16px 16px;
  flex-basis: 50%;
  flex-direction: column;
  align-items: center;
  a {
    background: color.$primary-purple;
    color: white;
    font-size: 28px;
    width: 100%;
    padding: 36px;
    cursor: pointer;
    &:hover {
      background: #00c2ba;
    }
  }
  @include breakpoint.tablet {
    border-radius: none;
    position: unset;
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    a {
      font-weight: bold;
      font-size: 20px;
      color: color.$primary-purple;
      background: white;
      padding: 4px 12px;
      white-space: nowrap;
      &:hover {
        background: color.$primary-purple;
        color: white;
        border-radius: 100px;
        text-shadow: none;
      }
      &.router-link-exact-active {
        background: color.$primary-purple;
        color: white;
        border-radius: 100px;
      }
      & + a {
        margin-left: 30px;
      }
    }
  }
}

.toggle_button {
  cursor: pointer;
  @include breakpoint.tablet {
    display: none;
  }
}

.links_group {
  a:last-child {
    border-radius: 0 0 16px 16px;
  }
  a:not(:last-child) {
    border-bottom: 1px solid #00c2ba;
  }
  @include breakpoint.tablet {
    a:last-child {
      border-radius: 100px;
    }
    a:not(:last-child) {
      border-bottom: none;
    }
  }
}
</style>
