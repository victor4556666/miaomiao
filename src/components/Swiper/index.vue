<template>
  <div class="swiper" :class="myname">
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
export default {
  name: "Swiper",
  props: {
    slidesPerView: {
      type: Number,
      default: 4,
    },
    width: {
      type: Number,
      default: 337,
    },
    myname: {
      type: String,
      default: "photo",
    },
    spaceBetween: {
      type: Number,
      default: 20,
    },
  },
  mounted() {
    const swiper = new Swiper("." + this.myname, {
      width: this.width,
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetween,
      freeMode: true,
    });
  },
};
</script>

<style scoped>
.photo {
  padding: 0;
}
</style>