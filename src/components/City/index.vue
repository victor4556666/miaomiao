<template>
  <div>
    <van-nav-bar
      title="当前城市"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div style="margin: 0.5rem; margin-left: 1rem">热门城市</div>
    <div class="hot">
      <div
        v-for="item in hotList"
        :key="item.cityId"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <van-index-bar :index-list="indexList">
      <div v-for="item in cityList" :key="item.type">
        <van-index-anchor :index="item.type" />
        <van-cell
          v-for="data in item.city"
          :key="data.cityId"
          :title="data.name"
          @click="handleClick(data)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import http from "@/util/http";

import { mapMutations } from "vuex";

export default {
  name: "City",

  data() {
    return {
      cityList: [],
      indexList: [],
      hotList: [],
    };
  },
  beforeUpdate() {
    this.hide();
  },
  mounted() {
    console.log(this.$store.state.title);
    http({
      url: "/gateway?k=9404989",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      this.cityList = this.renderCityList(res.data.data.cities);
      this.hotList = res.data.data.cities.filter((item) => item.isHot == 1);
    });
  },

  methods: {
    ...mapMutations(["hide", "show"]),
    onClickLeft() {
      this.$router.back();
      this.show();
    },
    handleClick(item) {
      this.show();
      this.$router.push("/movie/nowplaying");
      this.$store.commit("City/changeCity", item);
      localStorage.setItem("name", item.name);
      localStorage.setItem("id", item.cityId);
    },
    renderCityList(list) {
      var letterList = [];
      var cityList = [];
      var numberList = [];
      for (let i = 65; i < 91; i++) {
        letterList.push(String.fromCharCode(i));
      }
      for (let i = 0; i < letterList.length; i++) {
        numberList = list.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === letterList[i]
        );
        if (numberList.length) {
          cityList.push({
            type: letterList[i],
            city: numberList,
          });
        }
      }
      this.indexList = cityList.map((item) => item.type);
      return cityList;
    },
  },
};
</script>

<style scoped lang="scss">
.van-cell__title {
  font-size: 1rem;
}

.van-nav-bar__title {
  font-size: 1rem;
}

.hot {
  display: grid;
  grid-template-columns: repeat(3, 31.5%);
  text-align: center;
  gap: 0.625rem;
  margin: 0.625rem;
  box-sizing: border-box;

  div {
    background: #f4f4f4;
  }
}
</style>
