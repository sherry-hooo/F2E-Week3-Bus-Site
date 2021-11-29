<template>
  <router-link
    :to="{
      name: 'Detail',
      params: {
        mode: searchMode,
        UID: UID,
        city: chosedCityLink,
        displayName: routeName,
      },
    }"
  >
    <div class="card_purple_route" @click="sendClickedCard">
      <div class="card_head">
        <p v-if="searchMode === 'Route'">{{ cardData.RouteName.Zh_tw }}</p>
        <p v-else>{{ cardData.StationName.Zh_tw }}</p>
        <div v-if="cardData.CityCode" class="tag">{{ cityTag }}</div>
        <div v-else class="tag">{{ cardData.LocationCityCode }}</div>
      </div>
      <div v-if="searchMode === 'Route'" class="card_body">
        <p>{{ cardData.DepartureStopNameZh }}</p>
        <span>-</span>
        <p>{{ cardData.DestinationStopNameZh }}</p>
      </div>
      <div v-else class="card_body">
        <img src="@/assets/img/icon_bike.svg" alt="腳踏車icon" />
        <img src="@/assets/img/icon_train.svg" alt="火車icon" />
        <img src="@/assets/img/icon_MRT.svg" alt="捷運icon" />
        <img src="@/assets/img/icon_HRW.svg" alt="高鐵icon" />
      </div>
    </div>
  </router-link>
</template>

<script>
import cities from '@/assets/data/cities.json'

export default {
  props: ['cardData', 'searchMode', 'chosedCityLink'],
  data() {
    return {
      UID: this.cardData.RouteUID,
    }
  },
  methods: {
    sendClickedCard() {
      this.$emit('clickedCard', this.route)
    },
  },
  computed: {
    routeName() {
      return this.cardData.RouteName.Zh_tw
    },
    cityTag() {
      let city = cities.filter(
        (city) => city.cityCode === this.cardData.CityCode,
      )
      return city[0].city
    },
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

.card_purple_route {
  background: color.$primary-purple;
  border-radius: 16px;
  padding: 16px;
  height: 90px;
  .card_head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    p {
      color: white;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: white;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 150px;
      flex: 1;
      text-align: start;
      overflow: hidden;
      width: 150px;
      flex: 1;
      text-align: start;
    }
    .tag {
      border-radius: 20px;
      color: color.$primary-purple;
      font-size: 14px;
      background: color.$blue;
      padding: 0 8px;
    }
  }
  .card_body {
    display: flex;
    color: color.$yellow;
    p:nth-child(1) {
    }
  }
}
</style>
