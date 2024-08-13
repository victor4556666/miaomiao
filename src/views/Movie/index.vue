<template>
  <div>
    <div class="header" v-show="title">
      <Header></Header>
      <Navbar></Navbar>
    </div>
    <Tabbar></Tabbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { mapState, mapMutations } from "vuex";
import { messagebox } from "@/components/js";
export default {
  name: "Movie",

  computed: {
    ...mapState(["title"]),
  },
  methods: {
    ...mapMutations(["show"]),
  },
  activated() {
    this.show();
  },

  components: {
    Tabbar,
    Header,
    Navbar,
  },
  // mounted() {
  //   messagebox({
  //     title: "定位",
  //     content: "沈阳",
  //     cancel: "取消",
  //     ok: "切换城市",
  //     handleCancel() {
  //       console.log(1);
  //     },
  //     handleOk() {
  //       console.log(2);
  //     },
  //   });
  // },
};
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  z-index: 100;
  top: 0;
}
</style>