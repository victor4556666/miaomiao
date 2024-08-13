<template>
  <keep-alive><router-view /></keep-alive>
</template>
<script>
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
export default {};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

html,
body {
  height: 100%;
}
</style>
