<template>
  <!-- <main v-if="routeData"> -->
  <main>
    <div
      @click="searchRoute(bus.RouteName.Zh_tw, bus.RouteUID)"
      v-for="bus in routeData"
      :key="bus.StopUID"
      class="routeInfo_group"
    >
      <div v-if="bus.EstimateTime <= 120" class="bus_status ready">進站中</div>
      <div v-else-if="bus.StopStatus === 0" class="bus_status estimate">
        {{ (bus.EstimateTime / 60).toFixed(0) }}分
      </div>
      <div v-else class="bus_status rest">
        {{ stopStatusMessage[bus.StopStatus] }}
      </div>
      <div class="title">
        {{ bus.RouteName.Zh_tw }}
        <span class="direction">往 {{ bus.Destination }}</span>
      </div>
      <div class="stop_count">01</div>
    </div>
  </main>
</template>

<script>
import getApi from '@/service/getApi.js'

export default {
  name: 'Station',
  props: ['city', 'displayName', 'mode'],
  data() {
    return {
      neededInfo: [],
      routeApi: [],
    }
  },
  computed: {
    stationData() {
      if (this.$store.state.route === {}) {
        return this.$store.state.route
      } else {
        return JSON.parse(sessionStorage.getItem('StationData'))
      }
    },
    BusNames() {
      return this.stationData.Stops
    },
    stopStatusMessage() {
      return {
        1: '未發車',
        2: '不停靠',
        3: '末班已過',
        4: '未營運',
      }
    },
    routeData() {
      console.log('取資料')
      return this.neededInfo
    },
  },
  methods: {
    async searchRoute(bus, UID) {
      let city = this.$route.params.city
      let routeData = await getApi
        .getOneCityBusRoute(city, bus, UID)
        .then((res) => res.data[0])
      sessionStorage.setItem('RouteData', JSON.stringify(routeData))
      this.$router.push({
        path: `/Route/${city}/${bus}`,
        params: { displayName: bus, city: city },
      })
    },
    getDestination(city, routeName, UID) {
      return getApi
        .getRouteDestination(city, routeName, UID)
        .then((res) => res.data[0])
    },
    getETAApi(city, routeName, UID, station) {
      return getApi.getETARoute(city, routeName, UID).then((res) => {
        let a = res.data.filter((route) => route.StopUID === station.StopUID)[0]
        console.log(a)
        return a
      })
    },
    async getApi(stationData) {
      let city = this.city
      await stationData.Stops.map(async (route) => {
        let ETAInfo = await this.getETAApi(
          city,
          route.RouteName.Zh_tw,
          route.RouteUID,
          route,
        )
        console.log(ETAInfo)
        let destination = await this.getDestination(
          city,
          route.RouteName.Zh_tw,
          route.RouteUID,
        )
        console.log(destination)
        ETAInfo['Destination'] =
          ETAInfo.Direction === 0
            ? destination.DestinationStopNameZh
            : destination.DepartureStopNameZh
        this.neededInfo.push(ETAInfo)
      })
    },
  },
  created() {
    let stationData = JSON.parse(sessionStorage.getItem('StationData'))
    this.getApi(stationData)
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

.routeInfo_group {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px 8px;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    background: rgba(242, 242, 242, 0.8);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    flex: 1;
    text-align: start;

    .direction {
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .stop_count {
    font-size: 12px;
    color: #bdbdbd;
    padding: 4px 8px;
    width: 32px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Gray 6 */
    background: #f2f2f2;
    border-radius: 16px;
  }
}

.bus_status {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 28px;
  padding: 4px 8px;
  border-radius: 16px;
  margin-right: 8px;
  font-size: 14px;
}

.ready {
  background: #eb5757;
}

.estimate {
  background: #00c2ba;
}

.rest {
  background: #bdbdbd;
}
</style>
