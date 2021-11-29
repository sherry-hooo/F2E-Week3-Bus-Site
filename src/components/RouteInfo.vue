<template>
  <main>
    <section class="topColumn">
      <div class="busInfo info_block">
        <div class="tag">公車資訊</div>
        <p>
          <span class="stop">{{ routeData.DestinationStopNameZh }}</span>
          -
          <span class="stop">{{ routeData.DepartureStopNameZh }}</span>
        </p>
        <p class="bus_operator">
          <img src="@/assets/img/icon_bus_black.svg" alt="公車icon" />
          <span>{{ routeData.Operators[0].OperatorName.Zh_tw }}</span>
          <span>0800-002-227</span>
        </p>
      </div>
      <div class="ticketFare info_block">
        <div class="tag">票價資訊</div>
        <p>
          <span class="title">收費方式：</span>
          {{ routeData.TicketPriceDescriptionZh }}
        </p>
      </div>
    </section>
    <div class="weekdayInfo info_block">
      <div class="tag">平日發車資訊</div>
      <p>
        <span class="title">首班車：</span>
        {{ routeData.SubRoutes[0].FirstBusTime }}
      </p>
      <p>
        <span class="title">末班車：</span>
        {{ routeData.SubRoutes[0].LastBusTime }}
      </p>
      <p>
        <span class="title">尖峰班距：</span>
        05~08分
      </p>
      <p>
        <span class="title">離峰班距：</span>
        08~12分
      </p>
      <p>
        <span class="title">22:00之後：</span>
        15~20分
      </p>
    </div>
    <div class="weekndInfo info_block">
      <div class="tag">假日發車資訊</div>
      <p>
        <span class="title">首班車：</span>
        {{ routeData.SubRoutes[0].HolidayFirstBusTime }}
      </p>
      <p>
        <span class="title">末班車：</span>
        {{ routeData.SubRoutes[0].HolidayLastBusTime }}
      </p>
      <p>
        <span class="title">尖峰班距：</span>
        05~08分
      </p>
      <p>
        <span class="title">離峰班距：</span>
        08~12分
      </p>
      <p>
        <span class="title">22:00之後：</span>
        15~20分
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'RouteInfo',
  props: [],
  data() {
    return {
      routeData: '',
    }
  },
  computed: {
    // routeData() {
    //   return this.$store.state.route;
    // },
  },
  created() {
    this.routeData = JSON.parse(sessionStorage.getItem('RouteData'))
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_color.scss";

main {
  .info_block {
    background: white;
    border-radius: 16px;
    padding: 12px 8px;
    margin-bottom: 20px;

    .tag {
      padding: 4px 12px;
      background: color.$yellow;
      color: color.$primary-purple;
      width: fit-content;
      border-radius: 16px;
    }
    p {
      text-align: start;
      margin-top: 8px;
    }
    span {
      font-weight: 700;
    }
    .stop {
      font-size: 20px;
    }
    .bus_operator {
      & > * {
        margin-left: 4px;
      }
    }
  }
}

.topColumn {
  @include breakpoint.tablet {
    display: flex;
    div {
      flex: 1;
      & + div {
        margin-left: 20px;
      }
    }
  }
}
</style>
