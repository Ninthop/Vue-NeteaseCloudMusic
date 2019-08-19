<template>
	<div class="search">
		<div class="search-head">
			<span class="back">
				<img src="@/assets/static/back.png" alt="返回图标" class="search-back" @click="routerBack">
			</span>
			<span class="search-input">
				<input 
					type="text" 
					placeholder="请输入关键词..." 
					@focus="adviceAppear" 
					v-model="keyWords"
					@blur="adviceDisappear">
				<fade>
					<div class="search-advice" v-show="this.keyWords && show">
						<span class="default-search" v-if="!this.searchAdvice.keyword" @click="adviceClick(keyWords)">搜索“{{ keyWords }}”</span>
						<span class="default-search none" v-else>{{ this.searchAdvice.keyword }}</span>
						<span v-for="(item, index) of this.searchAdvice" :key="index" @click="adviceClick(item.keyword)">{{ item.keyword }}</span>
					</div>
				</fade>
			</span>
			<span class="post-keyword">
				<button @click="postKeywords">搜索</button>
			</span>
		</div>

		<rec-search @setKey="changeKey" class="hot-search"/>
		<div class="result" v-if="this.resultShow">
			<list-tab />
			<list @listen="playMusic" />
		</div>
	</div>
</template>

<script>
import * as apiSearch from '../api/Search/search'
import axios from 'axios'
import Fade from '../common/animate/fade'
import { mapGetters } from 'vuex'
import RecSearch from '../components/Search/recSearch'
import ListTab from '../components/Search/searchTab'
import List from '../components/Search/list'

export default {
	name: 'Search',
	data () {
		return {
			show: false
		}
	},
	components: {
		Fade,
		RecSearch,
		List,
		ListTab
	},
	methods: {
		routerBack () {
			this.$router.go(-1);
			this.$store.commit('setKeyWords', '')
			this.$store.commit('setResultShow', false)
		},
		postKeywords () {
			if (this.keyWords) {
				// this.$store.commit('setSearchType', 1)
				this.$store.dispatch('getSearchResultType', this.keyWords)
				this.$store.commit('setResultShow', true)
			}
		},
		changeKey (hotKeywords) {
			this.$store.commit('setKeyWords', hotKeywords)
			this.postKeywords()
		},
		adviceAppear () {
			this.show = true
		},
		adviceDisappear () {
			this.show = false
		},
		playMusic (song) {
			this.$store.dispatch('playSingleMusic', song)
			// console.log(song)
		},
		adviceClick (keyword) {
			this.$store.commit('setKeyWords', keyword)
			this.postKeywords()
		}
	},
	computed: {
		...mapGetters([
			'searchAdvice',
			'resultShow',
			'keyWords',
			'searchType'
		]),
		keyWords: {
			get () {
				return this.$store.state.keyWords
			},
			set (val) {
				this.$store.commit('setKeyWords', val)
			}
		}
	},
	watch: {
		keyWords (newWords) {
			if (newWords) {
				this.$store.dispatch('getAdvice', newWords)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	.search
		position relative
		width 100%
		.search-head
			position relative
			display flex
			flex-direction row
			align-items center
			margin .5rem 1rem
			.back
				.search-back
					width 3rem
					height 3rem
			.search-input
				display flex
				flex 1
				margin 0 1.5rem
				input
					width 100%
					padding .5rem
					border 0
					border-bottom .1rem solid gray
					transition 0.3s
					&:focus
						box-shadow 0 1rem 1rem -.7rem lightgray
						outline none
				.search-advice
					// border .1rem solid red
					background-color white
					position absolute
					z-index 200
					width 90%
					top 110%
					left 50%
					transform translateX(-50%)
					display flex
					flex-direction column
					box-shadow 0 .5rem 1.5rem .1rem lightgray
					padding .5rem
					transition 0.5s
					span
						padding 1rem
						font-size $font-size-normal
						border-bottom .1rem solid lightgray
						&:last-child
							border-bottom 0
					.default-search
						color blue
					.none
						color black
			.post-keyword
				button
					padding .5rem 1rem
					border 0
					background-color #ff7979
					color white
					outline none
					transition 0.5s
					&:active
						background-color $color-theme
		.hot-search
			position absolute
		.result
			position relative
</style>