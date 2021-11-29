<template>
  <main>
    <h2>轉乘規劃</h2>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

main {
  min-height: calc(100vh - 80px);
  background-image: url('~@/assets/img/navigation-sm.png');
  background-position: bottom;
  background-size: 100% auto;
  background-repeat: no-repeat;

  @include breakpoint.tablet {
    background-image: url('~@/assets/img/navigation.png');
    background-size: contain;
  }
  h2 {
    color: color.$primary-purple;
    font-weight: 900;
    font-size: 36px;
    margin-bottom: 30px;
  }
}
</style>
