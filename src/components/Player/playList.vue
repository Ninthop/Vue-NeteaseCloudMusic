<template>
	<div class="play-list" v-show="this.playlistIsShown" @touchmove.prevent @click.prevent>
		<div class="mask"></div>
		<div class="playlist-body">
			<div class="content-head">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-yinzhi"></use>
				</svg>
				<div class="play-all" @click.stop="playAllSong(playlist)">
					播放全部
					<span class="song-num">(共{{ playlist.length }}首)</span>
				</div>
			</div>
			<div class="playlist-wrapper" ref="playlistScroll">
				<div class="playlist-content">
					<div 
						class="song" 
						v-for="(item, index) of playlist" 
						:key="item.id"
						@click.stop="listenMusic(playlist, index)">
						<div class="index">{{ index+1 }}</div>
						<div class="song-body">
							<span class="song-title">
								{{ item.name }}
								<span class="rtUrl" v-if="item.rtUrl">{{ item.rtUrls }}</span>
							</span>
							<span class="author-and-cover">
								<span class="ar" v-for="(author,index) of item.ar" :key="index">
									{{ author.name }}
								</span>
								<span class="separator">-</span>
								<span class="cover">{{ item.al.name }}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Bscroll from 'better-scroll'

export default {
	name: 'PlayList',
	methods: {
		listenMusic (song, index) {
				this.$store.dispatch('playMusic', {song, index})
				this.$store.commit('setplaylistIsShown', false)
				console.log(song)
			},
			playAllSong (allSong) {
				this.$store.dispatch('playAllMusic', allSong)
				this.$store.commit('setplaylistIsShown', false)
			},
			refresh() {
				this.scroll && this.scroll.refresh()
			},
	},
	computed: {
		...mapGetters([
			'playlist',
			'playlistIsShown'
		])
	},
	mounted(){
      	this.scroll = new Bscroll(this.$refs.playlistScroll, {click: true})
		var that = this
        document.addEventListener('click', function(e){
            that.$store.commit('setplaylistIsShown', false)
        })
    },
    destroyed () {
        document.removeEventListener('click', function(e){
            that.$store.commit('setplaylistIsShown', false)              
        })
	},
	watch: {
      playlistIsShown () {
		// console.log('刷新')
		setTimeout(() => {
		this.refresh()
		}, 20)
	}
	},
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	.play-list
		.mask
			position fixed
			z-index 100
			top 0
			bottom 0
			left 0
			right 0
			background-color rgba(0, 0, 0, 0.5)
		.playlist-body
			position fixed
			// transform translateY(100%)
			z-index 300
			top 40%
			bottom 0
			left 0
			right 0
			background-color white
			width 100%
			border-top .2rem solid lightgray
			border-top-left-radius 1.5rem
			border-top-right-radius 1.5rem
			.content-head
				padding 1rem 1rem 0 1rem
				display flex
				.play-all
					font-size $font-size-medium
					display flex
					align-items center
					margin-left .5rem
					.song-num
						margin-left 1rem
						color gray
						font-size $font-size-normal
			.playlist-wrapper
				height 90%
				overflow hidden
				.playlist-content
					.song
						display flex
						flex-direction row
						margin 2rem 0
						.index
							height 3rem
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
							width 80%
							margin-left .5rem
							ellipsis-one()
							.song-title
								font-size $font-size-medium
								margin-bottom .5rem
								ellipsis-one()
								min-height 1.5rem
							.author-and-cover
								display flex
								flex-direction row
								color gray
								span.ar
									&:after
										content '/'
										margin-right .3rem
									&:nth-last-child(3)
										&:after
											content ''
								.cover
									ellipsis-one()
</style>