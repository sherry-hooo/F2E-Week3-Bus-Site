<template>
  <main class="home" @scroll="loadApi">
    <h2>找公車</h2>
    <Search_Bar
      @emitSearchMode="emitsearchMode"
      @emitChosedCity="emitchosedCity"
      @emitUserKeyin="emitUserKeyin"
    ></Search_Bar>
    <Loading v-if="isLoading"></Loading>
    <section class="cards_group" v-if="displayedCards">
      <component
        :is="`card_${searchMode}`"
        v-for="cardData in displayedCards"
        :key="cardData"
        :cardData="cardData"
        :searchMode="searchMode"
        :chosedCityLink="chosedCityLink"
        @click="storeSession(cardData)"
      ></component>
    </section>
  </main>
</template>

<script>
import Search_Bar from "@/components/SearchBar.vue";
import card_Route from "@/components/Card_Route.vue";
import card_Station from "@/components/Card_Station.vue";
import Loading from "@/components/Loading.vue";
import getApi from "@/service/getApi.js";

export default {
  name: "Home",
  components: {
    Search_Bar,
    card_Route,
    card_Station,
    Loading,
  },
  data() {
    return {
      allRouteData: [],
      chosedCityLink: "",
      userKeyIn: "",
      searchMode: "Route",
      displayCount: 20,
      displayedCards: [],
      isLoading: false,
    };
  },
  methods: {
    storeSession(data) {
      // this.$store.dispatch('showRouteInfo', route)
      sessionStorage.setItem(`${this.searchMode}Data`, JSON.stringify(data));
    },
    emitsearchMode(mode) {
      console.log("確認 emit 的search mode ->  ", mode); // check mode
      this.searchMode = mode;
      this.userKeyIn = "";
      this.displayedCards = [];
    },
    emitUserKeyin(keyin) {
      console.log("確認 emit input -> ", keyin);
      this.userKeyIn = keyin;
      this.getCardsData(this.allRouteData, this.displayCount);
    },
    emitchosedCity(city) {
      console.log("確認 emit city -> ", city);
      this.chosedCityLink = city.cityLink;
      this.userKeyIn = "";
      this.displayedCards = [];
      this.getApi();
    },
    getCityStationApi(city) {
      return getApi
        .getCityBusStation(city)
        .then((res) => (this.allRouteData = res.data));
    },
    getCityRouteApi(city) {
      return getApi
        .getCityBusRoute(city)
        .then((res) => (this.allRouteData = res.data));
    },
    async getApi() {
      this.isLoading = true;
      if (this.searchMode === "Route") {
        await this.getCityRouteApi(this.chosedCityLink);
        this.isLoading = false;
      } else {
        await this.getCityStationApi(this.chosedCityLink);
        this.isLoading = false;
      }
    },
    // async getApi() {
    //   this.isLoading = true
    //   if (this.searchMode === 'Route') {
    //     let originData = await this.getCityRouteApi(this.chosedCityLink)
    //     let firstData = originData.slice(0, 20)
    //     this.isLoading = false
    //     this.displayedCards = firstData
    //   } else {
    //     let originData = await this.getCityStationApi(this.chosedCityLink)
    //     let firstData = originData.slice(0, 20)
    //     this.isLoading = false
    //     this.displayedCards = firstData
    //   }
    // },
    loadMoreData() {
      console.log("scroll event");
    },
    // loadMoreData() {
    //   console.log('scroll event')
    //   if (this.userKeyIn) {
    //     console.log('sroll 事件內有 user key in')
    //     this.getCardsData(this.allRouteData, (this.displayCount += 20))
    //   } else {
    //     // 沒有關鍵字的捲動
    //     this.displayCount = this.displayCount + 20
    //     setTimeout(() => {
    //       this.displayedCards = this.allRouteData.slice(0, this.displayCount)
    //     }, 3000)
    //   }
    // },
    getCardsData(originData) {
      if (this.allRouteData === []) {
        return;
      }
      if (this.userKeyIn === "*") {
        this.displayedCards = originData;
      } else if (this.searchMode === "Route") {
        this.displayedCards = originData
          .filter((route) => {
            return route.RouteName.Zh_tw.includes(this.userKeyIn);
          })
          .slice(0, this.displayCount);
      } else {
        this.displayedCards = originData
          .filter((station) =>
            station.StationName["Zh_tw"].includes(this.userKeyIn)
          )
          .slice(0, this.displayCount);
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.loadMoreData);
  },
  unmounted() {
    document.removeEventListener("scroll", this.loadMoreData);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

main {
  min-height: calc(100vh - 80px);
  background-image: url("~@/assets/img/searchBus-sm.png");
  background-position: bottom;
  background-size: 100% auto;
  background-repeat: no-repeat;

  @include breakpoint.tablet {
    background-image: url("~@/assets/img/searchBus.png");
    background-size: contain;
  }
  h2 {
    color: color.$primary-purple;
    font-weight: 900;
    font-size: 36px;
    margin-bottom: 30px;
  }
}

.cards_group {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  padding: 16px;
  margin: 0;
  background: #d4d4d4c2;
  border-radius: 16px;
  grid-auto-rows: minmax(min-content, max-content);
  & > * > * {
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
