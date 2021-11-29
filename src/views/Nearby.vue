<template>
  <main class="nearBy">
    <h2>附近站牌</h2>
    <Alert></Alert>
    <section class="cards_group">
      <Card_Station
        v-for="station in nearStationsData"
        :key="station.StationUID"
        :searchMode="searchMode"
        :cardData="station"
        :chosedCityLink="station.LocationCityCode"
        @click="storeSession(station)"
      ></Card_Station>
    </section>
  </main>
</template>
<script>
import Card_Station from '@/components/Card_Station.vue'
import Alert from '@/components/Alert.vue'
import getApi from '@/service/getApi.js'

export default {
  name: 'Nearby',
  components: {
    Card_Station,
    Alert,
  },
  data() {
    return {
      show: false,
      currentPosition: [],
      nearStationsData: [],
      searchMode: 'Station',
      city: 'Chiayi',
    }
  },
  computed: {
    // city(code) {
    //   console.log(code)
    //   return 'Chiayi'
    // },
  },
  methods: {
    // 取定位
    getCurrentPosition(thisObj) {
      console.log('getPosition')
      function success(position) {
        // 取經緯度
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        thisObj.currentPosition = [lat, lon]
        thisObj.getNearStation(22.9996475, 120.2106908)
      }

      function error(e) {
        console.log(e) // check only
        alert('咦 不想玩看看定位功能嗎')
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
      }
    },
    getNearStation(lat, lon) {
      console.log('取附近站點資訊', lat, lon)
      getApi
        .getNearbyStation(lat, lon, 300)
        .then((res) => (this.nearStationsData = res.data))
    },
    storeSession(route) {
      sessionStorage.setItem(`StationData`, JSON.stringify(route))
    },
    getCityFromCityCode() {},
  },
  created() {
    this.getCurrentPosition(this)
  },
}
</script>
<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

main {
  min-height: calc(100vh - 80px);
  background-image: url('~@/assets/img/nearbyStop-sm.png');
  background-position: bottom;
  background-size: 100% auto;
  background-repeat: no-repeat;

  @include breakpoint.tablet {
    background-image: url('~@/assets/img/nearbyStop.png');
    background-size: contain;
  }
  h2 {
    color: color.$primary-purple;
    font-weight: 900;
    font-size: 36px;
    margin-bottom: 30px;
  }
}

::v-deep .cards_group {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  padding: 16px;
  margin: 0;
  background: #d4d4d4c2;
  border-radius: 16px;
  grid-auto-rows: minmax(min-content, max-content);
  & > a > .card_purple_route {
    height: 100%;
  }
  @include breakpoint.tablet {
    grid-template-columns: repeat(2, 1fr);
  }
  @include breakpoint.desktop {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
