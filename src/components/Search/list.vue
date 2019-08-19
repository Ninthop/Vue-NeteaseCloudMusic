<template>
	<div class="base-list">
		<div v-if="searchType == 1">
			<div 
				class="song" 
				v-for="(item, index) of searchResult.songs" 
				:key="item.id"
				@click="listenMusic(searchResult.songs[index], item.id)"
			>
				<div class="index">{{ index+1 }}</div>
				<div class="song-body">
					<span class="song-title">
						{{ item.name }}
					</span>
					<span class="author-and-cover">
						<span class="ar" v-for="(author,index) of item.artists" :key="index">
							{{ author.name }}
							<span class="rtUrl" v-if="item.rtUrl">{{ item.rtUrls }}</span>
						</span>
						<span class="separator">-</span>
						<span class="cover">{{ item.album.name }}</span>
						<span class="vip" v-if="item.fee == 1 || item.fee == 4 || item.fee == 16">Vip</span>
					</span>
				</div>
			</div>
		</div>

		<div v-if="searchType == 100">
			<router-link :to="'/singer/'+item.id" tag="div"  
				class="artist" 
				v-for="(item, index) of searchResult.artists" 
				:key="index"
			>
				<div class="artist-body">
					<img :src="item.img1v1Url | formatPic" alt="歌单封面" class="cover-img">
					<span class="artist-name">
						{{ item.name }}
					</span>
				</div>
			</router-link>
		</div>

		<div v-if="searchType == 1000">
			<router-link :to="'/list/'+item.id" tag="div" 
				class="playlist" 
				v-for="(item, index) of searchResult.playlists" 
				:key="index"
			>
				<div class="playlist-body">
					<div>
						<img :src="item.coverImgUrl | formatPic" alt="歌单封面" class="cover-img">
					</div>
					<div class="playlist-title">
						<span class="playlist-name">
							{{ item.name }}
						</span>
						<span class="playlist-ar" v-if="item.creator">
							<span>{{ item.trackCount }}首</span>
							<span class="ar">
								By {{ item.creator.nickname }}
							</span>
						</span>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { getSongDetail } from '@/api/Song/song'

export default {
	name: 'List',
	methods: {
		listenMusic (song, id) {
			getSongDetail({
				ids: id
			})
			.then(res => {
				if (res.privileges[0].st == 0 && res.privileges[0].fee != 1 && res.privileges[0].fee != 4 && res.privileges[0].fee != 16) {
					this.$emit('listen', song)
					// console.log(res.privileges[0])
					// console.log(song)
				}else if (res.privileges[0].st == 0 &&　(res.privileges[0].fee == 1 || res.privileges[0].fee == 4 || res.privileges[0].fee == 16)) {
					alert('需要Vip')
					// console.log(res.privileges[0])
					// console.log(song)
				}else {
					alert('没有版权')
					// console.log(res.privileges[0])
					// console.log(song)
				}
			})
		}
	},
	computed: {
		...mapState([
			'searchResult',
			'searchType'
		])
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.base-list
		padding-top 1rem
		min-height 30rem
		background-color white
		.song
			display flex
			flex-direction row
			padding 1rem 0
			background-color white
			&.NoCopyRight
				color lightgray
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
					min-height 1.5rem
					ellipsis-one()
					&.NoCopyRight
						color lightgray
					.vip
						color red
						margin-left 1rem
						border .1rem solid red
						padding .1rem .2rem
						border-radius .3rem
					span.ar
						&:after
							content '/'
							margin-right .3rem
						&:nth-last-child(3)
							&:after
								content ''
					.cover
						ellipsis-one()
					.separator
						padding 0 .2rem
		.artist
			display flex
			padding 1rem 0
			background-color white
			.artist-body
				display flex
				flex-direction row
				align-items  center
				width 80%
				margin-left 1.5rem
				ellipsis-one()
				.cover-img
					border-radius .2rem
					width 4rem
					height 4rem
				.artist-name
					font-size $font-size-medium
					margin-bottom .5rem
					ellipsis-one()
					min-height 1.5rem
					margin-left 1rem
		.playlist
			display flex
			padding 1rem 0
			background-color white
			.playlist-body
				display flex
				flex-direction row
				align-items  center
				width 80%
				margin-left 1.5rem
				ellipsis-one()
				.cover-img
					border-radius .2rem
					width 4rem
					height 4rem
				.playlist-title
					display flex					
					flex-direction column
					padding-left 1rem
					ellipsis()
					.playlist-name
						font-size $font-size-medium
						margin-bottom .5rem
						ellipsis()
						min-height 1.5rem
					.playlist-ar
						display flex
						flex-direction row
						min-height 1.5rem
						.ar
							margin-left .5rem
</style>