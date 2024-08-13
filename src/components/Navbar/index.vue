<template>
  <ul>
    <router-link to="/movie/city" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="isActive ? 'red' : ''">
        <span @click="handleClick">
          <span>{{ $store.state.City.name }}</span>
          <van-icon name="arrow-down" />
        </span>
      </li>
    </router-link>
    <router-link to="/movie/nowplaying" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="isActive ? 'red' : ''">
        <span>正在热映</span>
      </li>
    </router-link>
    <router-link to="/movie/comingsoon" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="isActive ? 'red' : ''">
        <span>即将上映</span>
      </li>
    </router-link>
    <router-link to="/movie/search" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="isActive ? 'red' : ''">
        <span><van-icon name="search" /></span>
      </li>
    </router-link>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["hide"]),
    handleClick() {
      this.hide();
    },
  },
};
</script>

<style scoped lang="scss">
.red {
  color: red;

  span {
    border-bottom: 2px solid red;
    padding-bottom: 10px;
    padding-left: 2px;
    padding-right: 2px;
  }
}

ul {
  display: flex;
  height: 2.625rem;
  background: white;

  li {
    flex: 1;
    line-height: 2.625rem;
    text-align: center;
  }
}
</style>