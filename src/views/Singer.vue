<template>
	<div class="singer">
		<div class="header">
			<img src="@/assets/static/back.png" alt="返回图标" class="login-back" :style="bg" @click="routerBack">
			<img :src="this.singerPic" alt="歌手头像" class="singer-img">
		</div>

		<div class="singer-body">
			<singer-content :playList="playList" @playAll="playAll"/>
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
			playList: [],
			bg: {
				boxShadow: '0 0 1rem .1rem rgba(178, 190, 195, 0)',
				backgroundColor: 'rgba(178, 190, 195, 0)'
            }
		}
	},
	components: {
		SingerContent
	},
	methods: {
		routerBack () {
            this.$router.go(-1)
        },
		playAll (allSong) {
			this.$store.dispatch('playAllMusic', allSong)
		},
		handleScroll () {
			const top = this.$el.scrollTop
            if (top <= 0){
                this.bg = { backgroundColor: 'rgba(178, 190, 195, 0', boxShadow: '0 0 1rem .1rem rgba(178, 190, 195, 0)'}
            }else if(top > 0 && top < 180) {
				const opacitynum = top / 180
				this.bg = { backgroundColor: `rgba(178, 190, 195, ${opacitynum})`, boxShadow: `0 0 1rem .1rem rgba(178, 190, 195, ${opacitynum})`}
            }else{
				this.bg = { backgroundColor: 'rgba(178, 190, 195, 1)', boxShadow: '0 0 1rem .1rem rgba(178, 190, 195, 1)'}
			}
        }
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll, true)
		console.log(this.$el.scrollTop)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
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
		min-height 20rem
		.header
			overflow hidden
			min-height 20rem
			.login-back
				width 3rem
				position fixed
				top 1%
				left 2%
				border-radius 50%
				z-index 100
				padding .5rem
				overflow hidden
			.singer-img
				position fixed
				width 100%
</style>