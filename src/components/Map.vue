<template>
  <main id="map">map</main>
</template>

<script>
import L from 'leaflet'
import { myMapToken } from '@/assets/data/mapboxToken.js'

export default {
  data() {
    return {
      openStreetMap: null,
    }
  },
  computed: {
    stationPosition() {
      return this.$store.state.route.StationPosition
    },
    marker() {
      return L.icon({
        iconUrl: require('@/assets/img/icon_marker.svg'),
        iconSize: [50, 50], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      })
    },
    stationName() {
      return this.$store.state.route.StationName.Zh_tw
    },
  },
  methods: {
    getMap(lat, lon) {
      // 綁定現在位置
      this.openStreetMap = L.map('map', {
        center: [lat, lon],
        zoom: 18,
      })

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: myMapToken,
        },
      ).addTo(this.openStreetMap)

      let stationMarker = L.marker([lat, lon], { icon: this.marker }).addTo(
        this.openStreetMap,
      )
      stationMarker
        .bindPopup(`<div class="popUp"> ${this.stationName} </div>`, {
          className: 'myPopup',
          closeButton: false,
        })
        .openPopup()
    },
    setRouteLine(lat, lon) {
      let latArr = [
        [lat, lon],
        [25.052547099999998, 121.5778755],
      ]

      L.polyline(latArr, { color: 'red' }).addTo(this.openStreetMap)
    },
  },
  mounted() {
    console.log()
    if (this.$route.params.mode === 'Station') {
      let stationPosition = JSON.parse(sessionStorage.getItem('StationData'))
        .StationPosition
      console.log(stationPosition)
      let lat = stationPosition.PositionLat
      let lon = stationPosition.PositionLon
      this.getMap(lat, lon)
    } else {
      console.log('station要另外提供路線 position array')
      return
    }
  },
}
</script>

<style lang="scss" scoped>
#map {
  height: calc(100vh - 176px);
}
</style>
