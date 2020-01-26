<template>
	<div class="wrapper">
		<div class="background" @click="closeCollect"></div>

		<div class="nologin">
			<div class="nologin-info" v-show="this.loginType == 0">请先登陆后，再进行收藏。</div>
		</div>

		<div class="collect-wrapper" v-show="this.loginType == 1">
			<div class="collect-title">将歌曲收藏至：</div>
			<div class="collect-content">
				<div v-for="item of songList" :key="item.id" v-show="item.userId == uid" class="collect-song" @click="collectSong(item)">
					<img :src="item.coverImgUrl | formatPic" alt="歌单封面" class="cover-img">
					<span class="list-title">
						<div>{{ item.name }}</div>
						<div class="song-num">{{ item.trackCount }}首</div>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserlist } from '@/api/Home/my.js'

export default {
	name: 'Collect',
	data () {
		return {
			songList: {}
		}
	},
	methods: {
		closeCollect() {
			console.log(125)
			this.$emit('close', false)
		},
		collectSong(item) {
			console.log(item.id)
		},
		updateLogin() {
			let bool = this.loginType
			if (bool == 1) {
				getUserlist({
					uid: this.uid
				})
				.then(res => {
					this.songList = res.playlist
					console.log(res)
				})
			}
		}
	},
	computed: {
		...mapGetters([
			'loginType',
			'uid'
		])
	},
	mounted () {
		this.updateLogin()
	},
	watch: {
		loginType () {
			this.updateLogin()
		}
	}
};
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')

	.wrapper
		position fixed
		top 0
		bottom 0
		left 0
		right 0
		z-index 1000
		display flex
		justify-content center
		align-items center
		.background
			position fixed
			top -10rem
			left -5rem
			right -5rem
			bottom 0
			background-color rgba(0, 0, 0, 0.5)
		.nologin
			position absolute
			left 50%
			top	50%
			background-color white
			transform translate(-50%, -100%)
			border-radius .2rem
			.nologin-info
				color black
				white-space nowrap
				font-size $font-size-normal
				padding 2rem 3rem
		.collect-wrapper
			position fixed
			z-index 1001
			padding 1.5rem 1rem
			background-color white
			min-width 75%
			height 40vh
			border-radius .5rem
			.collect-title
				font-size $font-size-large
				font-weight bold
				margin-bottom .5rem
				position fixed
				background-color white
			.collect-content
				overflow auto
				margin-top 2rem
				height 39vh
				// -webkit-overflow-scrolling touch
				.collect-song
					font-size $font-size-normal
					display flex
					padding .5rem 1rem
					.cover-img
						border-radius .2rem
						width 5rem
						height 5rem
					.list-title
						display flex
						flex-direction column
						justify-content center
						margin-left .5rem
						font-size $font-size-normal
						.song-num
							color gray
							font-size $font-size-small
							margin-top .4rem
</style>