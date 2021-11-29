<template>
  <header class="banner">
    <div class="tag_container">
      <div class="tag">{{ city }}</div>
    </div>
    <h3>
      {{ displayName }}
    </h3>
    <div class="icon_group">
      <img
        @click="decideComponent"
        src="@/assets/img/icon_stop.svg"
        alt="站牌icon"
      />
      <img
        v-if="mode === 'Route'"
        @click="currentTab = 'RouteInfo'"
        src="@/assets/img/icon_info.svg"
        alt="資訊icon"
      />
      <img
        @click="currentTab = 'Map'"
        src="@/assets/img/icon_map.svg"
        alt="地圖icon"
      />
    </div>
  </header>
  <keep-alive>
    <component
      :is="currentTabComponent"
      :city="city"
      :displayName="$route.params.displayName"
      :mode="mode"
    ></component>
  </keep-alive>

  <!-- <router-view /> -->
</template>

<script>
import Route from '@/components/Route.vue'
import Station from '@/components/Station.vue'
import RouteInfo from '@/components/RouteInfo.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Detail',
  props: ['UID', 'city', 'mode', 'displayName'],
  components: {
    Route,
    RouteInfo,
    Station,
    Map,
  },
  data() {
    return {
      currentTab: this.mode === 'Route' ? 'Route' : 'Station',
    }
  },
  computed: {
    currentTabComponent() {
      return this.currentTab
    },
    routeData() {
      return this.$store.state.route
    },
  },
  methods: {
    decideComponent() {
      if (this.mode === 'Route') {
        this.currentTab = 'Route'
      } else {
        this.currentTab = 'Station'
      }
    },
  },
  beforeRouteUpdate(to) {
    console.log('跳轉頁面', to)
    this.currentTab = to.params.mode
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

main {
  padding: 30px 16px;
  @include breakpoint.tablet {
    padding: 30px;
  }
  @include breakpoint.desktop {
    padding: 30px 300px;
  }
}
.banner {
  height: 96px;
  width: 100%;
  background: color.$primary-purple;
  border-radius: 0 0 16px 16px;
  padding: 16px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;

  @include breakpoint.tablet {
    height: 114px;
    padding: 0 30px;
  }
  @include breakpoint.desktop {
    padding: 0 300px;
  }
  .tag {
    border-radius: 20px;
    color: color.$primary-purple;
    font-size: 14px;
    background: color.$blue;
    padding: 0 8px;
    margin-bottom: 8px;

    &_container {
      flex: 1 1 100%;
      width: 100%;
      display: flex;
      @include breakpoint.tablet {
        align-items: end;
      }
    }
  }
  h3 {
    font-size: 28px;
    font-weight: 700;
  }
  .icon_group {
    img {
      cursor: pointer;
      & + img {
        margin-left: 20px;
      }
    }
  }
}

// .direction_group {
//   display: flex;
//   gap: 16px;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 30px;

//   .stop {
//     width: 45%;
//     background: #e0e0e0;
//     height: 40px;
//     border-radius: 16px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #5b4e6e;
//     padding: 8px;
//     font-size: 20px;
//     cursor: pointer;
//     &:hover {
//     }
//   }
//   .stop_fill {
//     background: color.$primary-purple;
//     color: white;
//   }
// }
</style>
