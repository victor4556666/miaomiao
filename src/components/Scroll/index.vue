<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    data(val) {
      this.$nextTick(() => {
        this.refresh();
      });
    },
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        disableTouch: false,
        scrollbar: {
          fade: true,
        },
        // // mouseWheel: true,
        // preventDefault: false,
        click: true,
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
};
</script>

<style scoped>
</style>