<template>
	<div class="base-list">
		<div 
			class="song" 
			v-for="(item, index) of searchResult.songs" 
			:key="item.id"
			@click="listenMusic(searchResult.songs[index], item.mark)"
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
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'List',
	methods: {
		listenMusic (song, mark) {
			if (mark == 8) {
				alert('没有版权')
			}else {
				this.$emit('listen', song)
				console.log(song)
			}
		}
	},
	computed: {
		...mapState([
			'searchResult'
		])
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.base-list
		padding-top 1rem
		.song
			display flex
			flex-direction row
			padding 1rem 0
			background-color white
			// border .1rem solid red
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

</style>