<template>
  <div class="spinner-border" style="width: 2rem; height: 2rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

.spinner-border {
  margin: 0 auto;
  color: color.$primary-purple;
}
</style>
