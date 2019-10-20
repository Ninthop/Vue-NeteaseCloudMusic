<template>
	<div class="base-list">
		<div v-if="searchType == 1">
			<div 
				class="song" 
				v-for="(item, index) of searchResult.songs" 
				:key="item.id"
			>
				<song
					:songDetial="item" 
					:songRtUrl="item.rtUrls" 
					:index="index" 
					:artists="item.artists" 
					:album="item.album" />
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
import Song from '_com/base/song'

export default {
	name: 'List',
	components: {
		Song
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
					width 5rem
					height 5rem
				.artist-name
					font-size $font-size-medium
					// margin-bottom .5rem
					ellipsis-one()
					min-height 1.8rem
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
					font-size $font-size-small
					.playlist-name
						font-size $font-size-medium
						margin-bottom .5rem
						ellipsis()
						min-height 1.8rem
					.playlist-ar
						display flex
						flex-direction row
						min-height 1.8rem
						.ar
							margin-left .5rem
</style>