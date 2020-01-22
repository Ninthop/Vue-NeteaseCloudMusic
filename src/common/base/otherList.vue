<template>
	<div class="other-list">
		<div class="title">
			<img src="@/assets/static/back.png" alt="返回图标" class="back" @click="routerBack">
			<div class="title-name">{{ title }}</div>
		</div>

		<div class="content">
			<div 
				class="song" 
				v-for="(item, index) of playList" 
				:key="index"
			>
				<song 
					:songDetial="item" 
					:songRtUrl="item.rtUrls" 
					:index="index" 
					:artists="item.artists || item.ar" 
					:album="item.album || item.al" />
			</div>
		</div>
	</div>
</template>

<script>
import Song from '_com/base/song'

export default {
	name: 'OtherList',
	props: {
		playList: {
			type: Array
		},
		title: {
			type: String
		}
	},
	components: {
		Song
	},
	methods: {
		routerBack () {
			this.$router.go(-1);
		},
		playAllSong (allSong) {
			this.$store.dispatch('playAllMusic', allSong)
			// this.$emit('playAll', allSong)
			// console.log(allSong)
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.other-list
		position absolute
		background-color white
		width 100%
		padding-bottom 11%
		.title
			position fixed
			display flex
			// flex-direction row
			width 100%
			height 4rem
			color black
			border-bottom .1rem solid lightgray
			background-color white
			.back
				height 2.5rem
				width 2.5rem
				position absolute
				top 50%
				left 2%
				transform translateY(-50%)
			.title-name
				font-size $font-size-medium
				position absolute
				white-space nowrap
				top 50%
				left 50%
				transform translateX(-50%) translateY(-50%)
		.content
			margin-top 5rem
			.song
				display flex
				flex-direction row
				margin 2rem 0
</style>