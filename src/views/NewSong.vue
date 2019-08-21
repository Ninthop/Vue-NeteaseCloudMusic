<template>
	<div class="newSong">
		<div class="title">
			<img src="@/assets/static/back.png" alt="返回图标" class="back" @click="routerBack">
			<div class="title-name">新歌速递</div>
		</div>

		<div class="newsong-content">
			<div 
				class="song" 
				v-for="(item, index) of playList" 
				:key="item.id"
				@click="listenMusic(playList, index)"
			>
				<div class="index">{{ index+1 }}</div>
				<div class="song-body">
					<span class="song-title">
						{{ item.name }}
						<span class="rtUrl" v-if="item.rtUrl">{{ item.rtUrls }}</span>
					</span>
					<span class="author-and-cover">
						<span class="ar" v-for="(author,index) of item.artists" :key="index">
							{{ author.name }}
						</span>
						<span class="separator">-</span>
						<span class="cover">{{ item.album.name }}</span>
						<span class="vip" v-if="item.fee == 1 || item.fee == 16">Vip</span>
						<span class="vip" v-if="item.fee == 4">需购专辑</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getNewSong } from '@/api/Home/find'

export default {
	name: 'NewSong',
	data () {
		return {
			playList: []
		}
	},
	methods: {
		routerBack () {
			this.$router.go(-1);
		},
		listenMusic (song, index) {
			if (song[index].privilege.st == 0 && song[index].privilege.fee != 1 && song[index].privilege.fee != 4 && song[index].privilege.fee != 16) {
				this.$store.dispatch('playSingleMusic', song[index])
				// console.log(song)
			}else if (song[index].st == 0 &&　(song[index].fee == 1 || song[index].fee == 16)) {
				alert('需要Vip')
			}else if (song[index].fee == 4) {
				alert('需要购买专辑')
			}else {
				alert('没有版权')
				console.log(song[index])
			}
		}
	},
	mounted () {
		getNewSong({
			type: 0
		})
		.then(res => {
			this.playList = res.data
		})
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.newSong
		position absolute
		background-color white
		width 100%
		
		.title
			position fixed
			// background-color #ff4757
			z-index 100
			
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
		
		.newsong-content
			margin-top 5rem
			background-color white
			width 100%
			border-top-left-radius 1.5rem
			border-top-right-radius 1.5rem
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
						min-height 1.8rem
					.author-and-cover
						display flex
						flex-direction row
						color gray
						font-size $font-size-small
						min-height 1.8rem
						span.ar
							&:after
								content '/'
								margin-right .3rem
							&:nth-last-child(3)
								&:after
									content ''
						.cover
							ellipsis-one()
						.vip
							color red
							margin-left 1rem
							border .1rem solid red
							padding .1rem .2rem
							border-radius .3rem
</style>