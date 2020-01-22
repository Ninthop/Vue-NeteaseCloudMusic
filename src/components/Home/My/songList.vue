<template>
	<div class="my-song">
		<div class="my-song-title">创建的歌单 ({{ userSubcount.createdPlaylistCount }})</div>
		<div v-for="item of songList" :key="item.id">
			<router-link :to="'/list/'+item.id" tag="div" v-show="item.userId == uid" class="song-list" >
				<img :src="item.coverImgUrl | formatPic" alt="歌单封面" class="cover-img">
				<span class="list-title">
					<div>{{ item.name }}</div>
					<div class="song-num">{{ item.trackCount }}首</div>
				</span>
			</router-link>
		</div>

		<div class="my-song-title">收藏的歌单 ({{ userSubcount.subPlaylistCount }})</div>
		<div v-for="(item, index) of songList" :key="index">
			<router-link :to="'/list/'+item.id" tag="div" v-show="!(item.userId == uid)" class="song-list" >
				<img :src="item.coverImgUrl | formatPic" alt="歌单封面" class="cover-img">
				<span class="list-title">
					<div>{{ item.name }}</div>
					<div class="song-num">{{ item.trackCount }}首</div>
				</span>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MySonglist',
	props: {
		songList: Array,
		userSubcount: Object
	},
	data () {
		return {
			uid: this.$store.state.uid
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	.my-song
		background-color white
		padding-bottom 1rem
		.my-song-title
			font-size $font-size-medium
			padding 1rem 1rem 0 1rem
			font-weight bold
		.song-list
			font-size $font-size-normal
			display flex
			margin 1.5rem 1rem
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