<template v-if="route">
  <router-link
    :to="{
      name: 'Detail',
      params: {
        mode: searchMode,
        UID: cardData.StationUID,
        city: city,
        displayName: cardData.StationName.Zh_tw,
      },
    }"
  >
    <div class="card_purple_route" @click="sendClickedCard">
      <div class="card_head">
        <p>{{ cardData.StationName.Zh_tw }}</p>
        <div class="tag">{{ cityTag }}</div>
      </div>
      <div v-if="$route.name === 'Home'" class="card_body">
        <img src="@/assets/img/icon_bike.svg" alt="腳踏車icon" />
        <img src="@/assets/img/icon_train.svg" alt="火車icon" />
        <img src="@/assets/img/icon_MRT.svg" alt="捷運icon" />
        <img src="@/assets/img/icon_HRW.svg" alt="高鐵icon" />
      </div>
      <div v-else class="card_body">
        <div v-for="stop in stationStops" :key="stop.StopID">
          {{ stop.RouteName.Zh_tw }}、
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import cities from '@/assets/data/cities.json'

export default {
  Name: 'Card_Station',
  props: ['cardData', 'searchMode', 'chosedCityLink'],
  data() {
    return {
      UID: this.cardData.StationUID,
    }
  },
  methods: {
    sendClickedCard() {
      this.$emit('clickedCard', this.route)
    },
  },
  computed: {
    city() {
      if (this.$route.name === 'Home') {
        return this.chosedCityLink
      } else {
        let result = cities.filter(
          (city) => city.cityCode === this.chosedCityLink,
        )
        return result[0].cityLink
      }
    },
    cityTag() {
      return cities.filter(
        (city) => city.cityCode === this.cardData.LocationCityCode,
      )[0].city
    },
    stationStops() {
      return this.cardData.Stops
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
  .card_head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    p {
      color: white;
      white-space: nowrap;
      text-overflow: ellipsis;
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
    flex-wrap: wrap;
    color: color.$yellow;
    p:nth-child(1) {
    }
  }
}
</style>
