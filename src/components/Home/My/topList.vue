<template>
  <div class="my-toplist">
    <div class="recent-music toplist">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinzhi" />
      </svg>
      <router-link to="/recentsong" tag="span" class="recent-title">
        最近播放
        <span class="number">({{ recentPlay.length }})</span>
      </router-link>
    </div>
    <div class="collect toplist">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-huanyuangequxinxi" />
      </svg>
      <router-link to="/myCollect" tag="span" class="recent-title">
        我的收藏
        <span class="number">({{ userSubcount.artistCount }})</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MyTop",
  props: {
    userSubcount: Object
  },
  computed: {
    ...mapGetters(["recentPlay"])
  }
};
</script>

<style lang="stylus" scoped>
@import ('~_s/varibles.styl');

.my-toplist {
  background-color: white;

  .toplist {
    display: flex;
    margin: 0.5rem 1rem;

    // border .1rem solid red
    .recent-title {
      display: flex;
      align-items: center;
      width: 100%;
      border-bottom: 0.1rem solid lightgray;
      padding: 1rem 1rem;
      margin: 0 1rem;
      font-size: $font-size-normal;

      .number {
        margin-left: 0.8rem;
        color: gray;
        font-size: $font-size-small;
      }
    }
  }

  .collect {
    .recent-title {
      border: 0;
    }
  }
}
</style>