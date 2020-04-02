<template>
	<div class="singleSong" @click='listenMusic(songDetial, songDetial.id)'>
		<!-- 歌曲序号 -->
		<div class="index">{{ index+1 }}</div>
		<div class="song-body">
			<!-- 歌名 -->
			<span class="song-title">
				{{ songDetial.name }}
				<span class="rtUrl" v-if="songRtUrl && songRtUrl.length != 0">{{ songRtUrl }}</span>
			</span>
			<!-- 歌手和专辑 -->
			<span class="author-and-cover">
				<span class="ar" v-for="(author,index) of artists" :key="index">
					{{ author.name }}
				</span>
				<span class="separator">-</span>
				<span class="cover">{{ album.name }}</span>
			</span>
		</div>
		<!-- vip和购买专辑的特殊要求 -->
		<div class="vipAndAlbum">
			<span class="vip" v-if="songDetial.fee == 1 || songDetial.fee == 16">VIP</span>
			<span class="vip" v-if="songDetial.fee == 4">需购专辑</span>
		</div>
	</div>
</template>

<script>
import { getSongDetail } from '@/api/Song/song'	
export default {
	name: 'SongList',
	props: {
		// 歌曲序号
		index: {
			type: Number
		},
		// 歌曲详情
		songDetial: {
			type: Object
		},
		//歌曲别名
		songRtUrl: {
			type: Array
		},
		// 歌手
		artists: {
			type: Array,
			default: []
		},
		// 专辑
		album: {
			type: Object,
			default: {}
		}
	},
	methods: {
		// 先获取单曲详情，判断是否有特殊情况，再做是否播放判断
		listenMusic (song, id) {
			getSongDetail({
				ids: id
			})
			.then(res => {
				if (res.privileges[0].st == 0 && res.privileges[0].fee != 1 && res.privileges[0].fee != 4 && res.privileges[0].fee != 16) {
					this.$store.dispatch('playSingleMusic', song)
					// console.log(res.privileges[0])
					// console.log(res)
				}else if (res.privileges[0].st == 0 &&　(res.privileges[0].fee == 1 || res.privileges[0].fee == 16) && res.privileges[0].payed == 1) {
					this.$store.dispatch('playSingleMusic', song)
				}else if (res.privileges[0].st == 0 &&　(res.privileges[0].fee == 1 || res.privileges[0].fee == 16) && res.privileges[0].payed == 0) {
					alert('需要Vip')
					// console.log(res.privileges[0])
					// console.log(res)
				}else if (res.privileges[0].fee == 4) {
					alert('需要购买专辑')
				}
				else {
					alert('没有版权')
					// console.log(res.privileges[0])
					// console.log(res)
				}
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.singleSong
		display flex
		width 100%
		// border 1px solid red
		.index
			// height 3rem
			width 3rem
			display flex
			justify-content center
			align-items center
			// border .1rem solid red
			font-size $font-size-normal
			color gray
		.song-body
			display flex
			flex-direction column
			justify-content center
			max-width 80%
			margin-left .5rem
			ellipsis-one()
			.song-title
				font-size $font-size-medium
				margin-bottom .5rem
				ellipsis-one()
				min-height 1.8rem
			.author-and-cover
				display flex
				flex-direction row
				color gray
				min-height 1.8rem
				ellipsis-one()
				font-size $font-size-small
				&.NoCopyRight
					color lightgray
				span.ar
					&:after
						content '/'
						margin-right .3rem
						color black
					&:nth-last-child(3)
						&:after
							content ''
				.cover
					ellipsis-one()
				.separator
					padding 0 .2rem
		.vipAndAlbum
			display flex
			flex-direction column
			flex 1
			justify-content center
			align-items  flex-end
			margin-right 1.5rem
			font-size $font-size-normal
			.vip
				color red
				margin-left 1rem
				border .1rem solid red
				padding .1rem .2rem
				border-radius .3rem
				margin-bottom .2rem
</style>