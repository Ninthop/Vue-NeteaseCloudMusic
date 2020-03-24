<template>
	<div class="album">
		<div class="head">
			<!-- 背景 -->
			<div class="bgimg-fa">
				<div
					class="bgimg"
					:style="{  
							background: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('${album.picUrl}') no-repeat center center`, 
							filter: 'blur(1.8rem)'
						}"
				></div>
			</div>
			<div class="header-fixed">
				<img src="@/assets/static/back.png" alt="返回图标" class="login-back" @click="routerBack" />
				<div class="fixed-text">专辑</div>
			</div>

		<!-- 内容 -->
			<div class="head-content">
				<img :src="album.picUrl | formatPic" alt="专辑封面" class="album-pic">
				<div class="album-infos">
					<div class="album-name">{{ album.name }}</div>
					<div class="album-singer" v-if="album.artist">{{ album.artist.name }}</div>
					<div class="album-time">发行时间：{{ formatTime(album.publishTime) }}</div>
				</div>
			</div>
		</div>

		<song-content :playList="tracks" @playAll="playAll" :trackCount="trackCount"/>
	</div>
</template>

<script>
import SongContent from '../components/SongList/songContent'
import { getAblum } from '@/api/Home/my.js'

export default {
	name: 'Album',
	data () {
		return {
			tracks: [],
			trackCount: 0,
			album: {}
		}
	},
	components: {
		SongContent
	},
	methods: {
		playAll (allSong) {
			this.$store.dispatch('playAllMusic', allSong)
		},
		routerBack() {
      this.$router.go(-1);
		},
		formatTime(time) {
			let formattime = new Date(time)
			return `${formattime.getFullYear()}.${formattime.getMonth()+1}.${formattime.getDate()}`
		}
	},
	beforeDestroy() {
		this.$store.commit('toggleLoad', 1)
	},
	created() {
		this.$store.commit('toggleLoad', 0)
		getAblum({
			id: this.$route.params.id,
			timestamp: (new Date()).getTime()
		})
		.then(res => {
			this.tracks = res.songs
			this.trackCount = res.songs.length
			this.album = res.album
		})
	}
}
</script>

<style lang="stylus" scoped>
@import ('~_s/varibles.styl');
@import ('~_s/mixin.styl');
	.album
		overflow-y auto
		.head
			min-height: 20rem;
			width: 100%;
			// border-bottom .1rem solid red
			display: flex;
			background-color: gray;
			.bgimg-fa
				position fixed
				top 0
				min-height 20rem
				width 100%
				overflow hidden
				background-color gray
				.bgimg
					position absolute
					top 0
					height 20rem
					width 100%
					overflow hidden
					background-size cover
					transform scale(1.2)
			.header-fixed
				position fixed
				background-color rgba(20,20,20,.5)
				box-shadow 0 0.2rem .5rem rgba(80,80,80,.5)
				width 100%
				height 4rem
				color white
				z-index 100
				.login-back
					height 2.5rem
					width 2.5rem
					position absolute
					top 50%
					left 2%
					z-index 200
					transform translateY(-50%)
				.fixed-text
					font-size $font-size-medium
					position absolute
					white-space nowrap
					top 50%
					left 50%
					transform translateX(-50%) translateY(-50%)
					ellipsis-one()
					max-width 80%
			.head-content
				position relative
				width 100%
				.album-pic
					position absolute
					left 10%
					top 50%
					transform translateY(-50%)
					width 10rem
					height 10rem
				.album-infos
					position absolute
					top 50%
					left 42%
					transform translateY(-50%)
					color rgb(240,240,240)
					// margin-left 8rem
					line-height 120%
					font-size $font-size-normal
					.album-name, .album-singer
						margin-bottom .8rem
					
</style>