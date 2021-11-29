<template>
  <main>
    <div class="direction_group">
      <div
        @click=";(direction = 'forward'), $emit('changeDirection', direction)"
        :class="{ stop_fill: direction === 'forward' }"
        class="stop"
      >
        {{ routeData.DestinationStopNameZh }}
      </div>
      <div>-</div>
      <div
        @click=";(direction = 'return'), $emit('changeDirection', direction)"
        class="stop"
        :class="{ stop_fill: direction === 'return' }"
      >
        {{ routeData.DepartureStopNameZh }}
      </div>
    </div>
    <section v-if="stops">
      <div v-for="stop in stops" :key="stop.StopId" class="routeInfo_group">
        <div v-if="stop.estimateTime <= 120" class="bus_status ready">
          進站中
        </div>
        <div v-else-if="stop.stopStatus === 0" class="bus_status estimate">
          {{ (stop.estimateTime / 60).toFixed(0) }}分
        </div>
        <div v-else class="bus_status rest">
          {{ stopStatusMessage[stop.stopStatus] }}
        </div>
        <div class="title">{{ stop.stopName }}</div>
        <div class="stop_count">{{ stop.stopSequence }}</div>
      </div>
    </section>
  </main>
</template>

<script>
import getApi from '@/service/getApi.js'
export default {
  name: 'Route',
  props: ['displayName'],
  data() {
    return {
      direction: 'forward',
      forwardStops: [],
      returnStops: [],
      routeData: {},
    }
  },
  computed: {
    stopStatusMessage() {
      return {
        1: '未發車',
        2: '不停靠',
        3: '末班已過',
        4: '未營運',
      }
    },
    stops() {
      if (this.direction === 'forward') {
        console.log('forwardStops')
        return this.forwardStops
      } else {
        return this.returnStops
      }
    },
  },
  methods: {
    getStopOfRouteApi(city, routeName, UID) {
      return getApi.getStopOfRoute(city, routeName, UID).then((res) => res.data)
    },
    getETAApi(city, routeName, UID) {
      return getApi.getETARoute(city, routeName, UID).then((res) => res.data)
    },

    filterRouteInfo(stopOfRouteApi, ETAApi) {
      console.log(stopOfRouteApi)
      console.log(ETAApi)

      this.forwardStops = stopOfRouteApi[0].Stops.map((stop) => {
        let stopUID = stop.StopUID
        let matchingStop = ETAApi.filter(
          (stopWithETA) => stopUID === stopWithETA.StopUID,
        )[0]
        return {
          stopUID: stop.StopUID,
          stopName: stop.StopName.Zh_tw,
          stopSequence: stop.StopSequence,
          estimateTime: matchingStop.EstimateTime,
          isLastBus: matchingStop.IsLastBus,
          carNumber: matchingStop.CarNumber,
          stopCountDown: matchingStop.StopCountDown,
          stopStatus: matchingStop.StopStatus,
        }
      })

      this.returnStops = stopOfRouteApi[1].Stops.map((stop) => {
        let stopUID = stop.StopUID
        let matchingStop = ETAApi.filter(
          (stopWithETA) => stopUID === stopWithETA.StopUID,
        )[0]
        return {
          stopUID: stop.StopUID,
          stopName: stop.StopName.Zh_tw,
          stopSequence: stop.StopSequence,
          estimateTime: matchingStop.EstimateTime,
          isLastBus: matchingStop.IsLastBus,
          carNumber: matchingStop.CarNumber,
          stopCountDown: matchingStop.StopCountDown,
          stopStatus: matchingStop.StopStatus,
        }
      })

      console.log(this.forwardStops)
      console.log(this.returnStops)
    },
    getRouteData() {
      this.routeData = JSON.parse(sessionStorage.getItem('RouteData'))
    },
  },
  async created() {
    console.log('route 頁面創建')
    this.getRouteData()
    console.log(this.routeData)
    Promise.all([
      this.getStopOfRouteApi(
        this.routeData.City,
        this.routeData.RouteName.Zh_tw,
        this.routeData.RouteUID,
      ),
      this.getETAApi(
        this.routeData.City,
        this.routeData.RouteName.Zh_tw,
        this.routeData.RouteUID,
      ),
    ]).then((res) => this.filterRouteInfo(...res))
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";
main {
  
}

.routeInfo_group {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px 8px;
  margin-bottom: 8px;
  .title {
    font-size: 20px;
    flex: 1;
    text-align: start;
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
.direction_group {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .stop {
    width: 45%;
    background: #e0e0e0;
    height: 40px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5b4e6e;
    padding: 8px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
    }
  }
  .stop_fill {
    background: color.$primary-purple;
    color: white;
  }
}
</style>
