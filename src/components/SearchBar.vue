<template>
  <div class="searchBar">
    <div class="radio_group">
      <label for="route_radio">
        <input
          @input="emitSearchMode('Route')"
          id="route_radio"
          type="radio"
          name="bus"
          value="Route"
          checked
        />
        <span />
        查路線
      </label>
      <label for="stop_radio">
        <input
          @input="emitSearchMode('Station')"
          id="stop_radio"
          type="radio"
          name="bus"
          value="Station"
        />
        <span />
        查站牌
      </label>
    </div>
    <div class="btn-group search_window">
      <button class="btn btn-secondary" type="button">縣市</button>
      <button
        @click="selectCity"
        type="button"
        class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ chosedCity }}
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li
          v-for="city in cities"
          :key="city"
          @click="emitChosedCity(city.city)"
          class="dropdown-item"
          type="button"
        >
          {{ city.city }}
        </li>
      </ul>
    </div>
    <div class="search_window">
      <div class="search_title">搜尋</div>
      <input
        type="text"
        class="search_keyin"
        placeholder="公車路線 ex.藍15"
        @keyup="emitUserKeyin"
        v-model="userKeyIn"
      />
    </div>
  </div>
</template>

<script>
import cities from '@/assets/data/cities.json'
export default {
  name: 'SearchBar',
  props: {},
  data() {
    return {
      chosedCity: '請選擇',
      isDrop: false,
      userKeyIn: '',
      searchMode: 'Route',
    }
  },
  computed: {
    cities() {
      console.log(this.searchMode)
      if (this.searchMode === 'Route') {
        return cities
      } else {
        return cities.filter((city) => city.StationData)
      }
    },
  },
  methods: {
    showDropdown() {
      this.isDrop = !this.isDrop
      console.log(this.isDrop)
    },
    emitSearchMode(value) {
      this.$emit('emitSearchMode', value)
      this.chosedCity = '請選擇'
      this.userKeyIn = ''
      this.searchMode = value
    },
    emitUserKeyin() {
      setTimeout(() => {
        this.$emit('emitUserKeyin', this.userKeyIn)
      }, 1000)
    },
    emitChosedCity(city) {
      this.chosedCity = city
      this.userKeyIn = ''
      let chosedCityObj = cities.filter((city) => city.city === this.chosedCity)
      this.$emit('emitChosedCity', ...chosedCityObj)
    },
  },
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/abstract/_color.scss";
@use "@/assets/scss/base/bootstrap.scss";

.searchBar {
  background: white;
  color: color.$primary-purple;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 300px;
  padding: 1rem;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;

  @include breakpoint.tablet {
    width: 500px;
  }
}
.radio_group {
  display: flex;
  justify-content: space-evenly;
}
.search_window {
  margin-top: 20px;
  height: 56px;
  border-radius: 16px;
  background: #e0e0e0;
  display: inline-flex;

  ul {
    width: 80%;
    height: 200px;
    overflow: scroll;
  }
  .search_title {
    flex: 1 1 20%;
    border-radius: 16px 0 0 16px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search_keyin {
    flex: 1 1 80%;
    border-radius: 0 16px 16px 0;
    background: #e0e0e0;
    padding: 5px;
  }
}
label {
  display: flex;
  align-items: center;
  input[type='radio'] {
    display: none;
  }
  span {
    display: inline-block;
    background: #f2f2f2;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid #e0e0e0;
    margin-right: 8px;
    position: relative;
  }
  span::after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 100%;
  }

  input[type='radio']:checked {
    & + span {
      &:after {
        background: color.$primary-purple;
      }
    }
  }
}
</style>
