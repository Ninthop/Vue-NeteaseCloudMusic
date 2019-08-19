<template>
	<div class="singer">
		<div class="header">
			<img src="@/assets/static/back.png" alt="返回图标" class="login-back" @click="routerBack">
			<img :src="this.singerPic" alt="歌手头像" class="singer-img">
		</div>

		<div class="singer-body">
			<singer-content :playList="playList" @listen="playMusic" @playAll="playAll"/>
		</div>
	</div>
</template>

<script>
import SingerContent from '../components/Singer/singerContent'
import { getSingerSong } from '@/api/Song/song'

export default {
	name: 'Singer',
	data () {
		return {
			singerPic: '',
			playList: []
		}
	},
	components: {
		SingerContent
	},
	methods: {
		routerBack () {
            this.$router.go(-1)
        },
		playMusic ({song, index}) {
			this.$store.dispatch('playMusic', {song, index})
		},
		playAll (allSong) {
			this.$store.dispatch('playAllMusic', allSong)
		}
	},
	activated() {
		// console.log(this.$route.params.id)
		getSingerSong({
			id: this.$route.params.id
		})
		.then(res => {
			this.singerPic = res.artist.picUrl
			this.playList = res.hotSongs
			// console.log(res)
		})
		// console.log(this.$store.state.fullScreen)
	}
}
</script>

<style lang="stylus" scoped>
	.singer
		.header
			.login-back
				width 3rem
				position absolute
				top 1%
				left 2%
			.singer-img
				width 100%
</style>