<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <section v-if="value">
      <div v-for="item in computedList" :key="item.cinemaId" class="city">
        <div class="message">
          <p>{{ item.name }}</p>
          <p>{{ item.address }}</p>
        </div>
        <div class="price">
          <p><span>￥</span>{{ item.lowPrice / 100 }}<span>起</span></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/util/http";
export default {
  name: "Search",
  data() {
    return {
      value: "",
      cityList: [],
    };
  },
  methods: {
    onSearch() {},
    onCancel() {
      this.$router.back();
    },
  },
  activated() {
    this.value = "";
    http({
      url: `/gateway?cityId=${this.$store.state.City.id}&ticketFlag=1&k=9657603`,
      headers: {
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data.data.cinemas);
      this.cityList = res.data.data.cinemas;
    });
  },
  computed: {
    computedList() {
      return this.cityList.filter((item) => {
        return (
          item.name.toUpperCase().includes(this.value.toUpperCase()) ||
          item.address.toUpperCase().includes(this.value.toUpperCase())
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-bottom: 3rem;
  box-sizing: border-box;

  .city {
    display: flex;
    box-sizing: border-box;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;

    .message {
      width: 70%;

      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p:last-child {
        font-size: 0.8rem;
        color: #797d82;
      }
    }

    .price {
      color: orange;

      span {
        font-size: 0.625rem;
      }
    }
  }
}
</style>