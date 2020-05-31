<template>
  <div class="search">
    <div class="search-head">
      <span class="back">
        <img src="@/assets/static/back.png" alt="返回图标" class="search-back" @click="routerBack" />
      </span>
      <span class="search-input">
        <input
          type="text"
          placeholder="请输入关键词..."
          @focus="adviceAppear"
          v-model="keyWords"
          @blur="adviceDisappear"
          @keyup.enter="postKeywords"
        />
        <fade>
          <div class="search-advice" v-show="this.keyWords && show">
            <span
              class="default-search"
              v-if="!this.searchAdvice.keyword"
              @click="adviceClick(keyWords)"
            >搜索“{{ keyWords }}”</span>
            <span class="default-search none" v-else>{{ this.searchAdvice.keyword }}</span>
            <span
              v-for="(item, index) of this.searchAdvice"
              :key="index"
              @click="adviceClick(item.keyword)"
            >{{ item.keyword }}</span>
          </div>
        </fade>
      </span>
      <span class="post-keyword">
        <button @click="postKeywords">搜索</button>
      </span>
    </div>

    <rec-search @setKey="changeKey" class="hot-search" />
    <div class="result" v-if="this.resultShow">
      <search-result
        :keyWords="keyWords"
        :id="id"
        :searchResult="searchResult"
        :loading="loading"
        @changeId="changeID"
      />
    </div>
  </div>
</template>

<script>
import Fade from "../common/animate/fade";
import { mapGetters } from "vuex";
import RecSearch from "../components/Search/recSearch";
import SearchResult from "../components/Search/searchResult";
import { getSearchResult } from "@/api/Search/search";
import { throttle, endLoading } from '../lib/util'

export default {
  name: "Search",
  data() {
    return {
      show: false,
      keyWords: "",
      id: 1,
      searchResult: [],
      loading: true
    };
  },
  components: {
    Fade,
    RecSearch,
    SearchResult
  },
  methods: {
    routerBack() {
      this.$router.go(-1);
      this.keyWords = "";
      this.$store.commit("setResultShow", false);
    },
    postKeywords() {
      if (this.keyWords) {
        this.getSearchResultType(this.keyWords, this.id);
        this.$store.commit("setResultShow", true);
        this.adviceDisappear();
      }
    },
    changeKey(hotKeywords) {
      this.keyWords = hotKeywords;
      this.postKeywords();
    },
    adviceAppear() {
      this.show = true;
    },
    adviceDisappear() {
      this.show = false;
    },
    adviceClick(keyword) {
      this.keyWords = keyword;
      this.postKeywords();
    },
    getSearchResultType(keyWords, searchType) {
      getSearchResult({
        keywords: keyWords,
        type: searchType
      }).then(res => {
        // commit('setSearchResult',res.result)
        this.searchResult = res.result;
        this.loading = false;
        // console.log(res.result)
      });
    },
    changeID(id) {
      this.id = id;
      this.loading = true;
      this.getSearchResultType(this.keyWords, this.id);
    },
    getAdvice: throttle((_this, newWords) => {
      _this.$store.dispatch("getAdvice", newWords);
    }, 1000)
  },
  computed: {
    ...mapGetters(["searchAdvice", "resultShow"])
	},
	created() {
		endLoading()
	},
  watch: {
    keyWords(newWords) {
      if (newWords) {
				this.getAdvice(this, newWords)
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import ('~_s/varibles.styl');

.search {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  .search-head {
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 90%;

    .back {
      .search-back {
        width: 3rem;
        height: 3rem;
      }
    }

    .search-input {
      display: flex;
      flex: 1;
      margin: 0 1.5rem;

      input {
        width: 100%;
        padding: 0.5rem;
        border: 0;
        border-bottom: 0.1rem solid gray;
        transition: 0.3s;

        &:focus {
          box-shadow: 0 1rem 1rem -0.7rem lightgray;
          outline: none;
        }
      }

      .search-advice {
        // border .1rem solid red
        background-color: white;
        position: absolute;
        z-index: 200;
        width: 90%;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        box-shadow: 0 0.5rem 1.5rem 0.1rem lightgray;
        padding: 0.5rem;
        transition: 0.5s;

        span {
          padding: 1rem;
          font-size: $font-size-normal;
          border-bottom: 0.1rem solid lightgray;

          &:last-child {
            border-bottom: 0;
          }
        }

        .default-search {
          color: blue;
        }

        .none {
          color: black;
        }
      }
    }

    .post-keyword {
      button {
        padding: 0.5rem 1rem;
        border: 0;
        background-color: #ff7979;
        color: white;
        outline: none;
        transition: 0.5s;

        &:active {
          background-color: $color-theme;
        }
      }
    }
  }

  .hot-search {
    padding-top: 10%;
  }

  .result {
    width: 100%;
    padding-top: 10%;
    position: relative;
  }
}
</style>