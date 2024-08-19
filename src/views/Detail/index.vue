<template>
  <div class="box">
    <div v-show="forward">
      <header v-scroll="50">
        <van-nav-bar left-arrow @click-left="handleBack">
          <template #title>{{ filmList?.name }}</template>
        </van-nav-bar>
      </header>

      <div
        class="bgimage"
        :style="{
          backgroundImage: 'url(' + filmList.poster + ')',
        }"
      ></div>
      <div class="circle" @click="handleBack">
        <van-icon name="arrow-left" size="1em" />
      </div>
      <div class="filmDetail">
        <div class="filmname">
          <p class="p1">
            {{ filmList?.name }} <span>{{ filmList.item?.name }}</span>
          </p>
          <p v-if="filmList.grade" class="p2">
            <span>{{ filmList.grade }}</span
            >分
          </p>
        </div>
        <div class="detail">
          <p>{{ filmList.category }}</p>
          <p>{{ filmList.premiereAt | formatDate }}上映</p>
          <p>{{ filmList.nation }} | {{ filmList.runtime }}分钟</p>
          <p :class="isShow ? '' : 'hide'">{{ filmList.synopsis }}</p>
          <p style="text-align: center" @click="isShow = !isShow">
            <van-icon name="arrow-up" v-if="isShow" />
            <van-icon name="arrow-down" v-else />
          </p>
        </div>
      </div>
      <div class="actor">
        <div>演职人员</div>

        <swiper
          :slidesPerView="4"
          :width="337"
          myname="photo"
          :spaceBetween="20"
        >
          <swiper-slide v-for="(item, index) in filmList.actors" :key="index">
            <div
              :style="{
                backgroundImage: 'url(' + item.avatarAddress + ')',
              }"
              class="avatar"
            ></div>
            <div class="name">{{ item.name }}</div>
            <div class="role">{{ item.role }}</div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="photo1">
        <div class="photo_title">
          <div>剧照</div>
          <div @click="forward = !forward">
            <span>全部({{ filmList.photos?.length }})</span>
            <van-icon name="arrow" />
          </div>
        </div>

        <swiper
          :slidesPerView="2.3"
          :width="330"
          myname="avatar"
          :spaceBetween="40"
        >
          <swiper-slide v-for="(item, index) in filmList.photos" :key="index">
            <div
              :style="{
                backgroundImage: 'url(' + item + ')',
              }"
              class="avatar_photo"
              @click="handePreview(index)"
            ></div>
          </swiper-slide>
        </swiper>
      </div>
      <footer>选座购票</footer>
    </div>
    <div v-show="!forward" class="photo_page">
      <van-nav-bar left-arrow @click-left="forward = !forward">
        <template #title> 剧照({{ filmList.photos?.length }}) </template>
      </van-nav-bar>
      <div class="photos">
        <div
          v-for="(item, index) in filmList.photos"
          :key="index"
          @click="handePreview(index)"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http";
import moment from "moment";
import Vue from "vue";
import Swiper from "@/components/Swiper";
import SwiperSlide from "@/components/SwiperSlide";
import { ImagePreview } from "vant";
Vue.use(ImagePreview);
Vue.directive("scroll", {
  inserted(el, bangding) {
    el.style.display = "none";
    window.onscroll = () => {
      if (
        document.documentElement.scrollTop ||
        document.body.scrollTop > bangding.value
      ) {
        el.style.display = "block";
        document.querySelector(".circle").style.display = "none";
      } else {
        el.style.display = "none";
        document.querySelector(".circle").style.display = "block";
      }
    };
  },
  unbind() {
    window.onscroll = null;
  },
});
Vue.filter("formatDate", (date) => {
  return moment(date * 1000).format("YYYY-MM-DD");
});
export default {
  name: "Detail",
  data() {
    return {
      filmList: [],
      isShow: false,
      forward: true,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    handleBack() {
      //退回上一个页面
      this.$router.back();
    },
    handePreview(index) {
      ImagePreview({
        images: this.filmList.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: "top-left",
        showIndicators: true,
        loop: true,
      });
    },
  },
  mounted() {
    //获取detail页面所需数据
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=3414003`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      this.filmList = res.data.data.film;
      if (this.filmList.poster) {
        document.querySelector(".bgimage").style.backgroundImage =
          "url(this.filmList.poster)";
      }
    });
  },
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  width: 100%;
  height: 2.75rem;
}
.box {
  position: relative;
  background: #f4f4f4;
}
.bgimage {
  height: 12.5rem;
  background-size: cover;
  background-position: center center;
}
.circle {
  background: gray;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  position: absolute;
  left: 0.625rem;
  top: 0.625rem;
  line-height: 1.7rem;
  text-align: center;
}
.filmDetail {
  padding: 0.75rem;
  background: white;
  margin-bottom: 0.625rem;
  .filmname {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
    .p1 {
      display: flex;
      align-items: center;

      span {
        width: 1.1rem;
        height: 1rem;
        line-height: 1.25rem;
        text-align: center;
        background: #d2d6dc;
        color: white;
        font-size: 0.75rem;
        margin-left: 0.5rem;
      }
    }
    .p2 {
      color: #ffb232;
      font-size: 0.625rem;
      span {
        font-size: 1.3rem;
        font-style: italic;
      }
    }
  }
  .detail {
    font-size: 0.75rem;
    color: #797d82;
    p {
      margin-top: 0.25rem;
    }
    .hide {
      height: 2rem;
      overflow: hidden;
    }
  }
}
.actor {
  background: white;
  box-sizing: border-box;
  padding: 0.75rem;
  margin-bottom: 0.625rem;
  .avatar {
    height: 5.2rem;
    width: 5.2rem;
    background-position: center;
    background-size: cover;
    margin-top: 1.1875rem;
    margin-bottom: 0.625rem;
  }
  .avatar ~ div {
    width: 5.2rem;
    text-align: center;
    font-size: 0.8rem;
  }
  div.role {
    color: gray;
    font-size: 0.6rem;
    margin-top: 0.1rem;
  }
  .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.photo1 {
  padding: 0.75rem;
  background: white;
  box-sizing: border-box;
  padding-bottom: 3.25rem;
  .photo_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:last-child {
      color: #797d82;
      font-size: 0.8rem;
    }
  }
  .avatar_photo {
    height: 5rem;
    width: 9rem;
    background-position: center;
    background-size: cover;
    margin-top: 1.1875rem;
    margin-bottom: 0.625rem;
  }
}
.van-nav-bar__title {
  font-size: 1rem;
}
footer {
  background: #ff5f16;
  color: white;
  height: 3.0625rem;
  text-align: center;
  line-height: 3.0625rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
.photo_page {
  background: white;
  .photos {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 0.125rem;
    div {
      img {
        width: 7.7488rem;
        height: 7.7488rem;
      }
    }
  }
}
</style>