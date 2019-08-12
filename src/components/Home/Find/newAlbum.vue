<template>
	<div class="find-album">
		<div class="title">
			<span class="new-album">新碟</span>
			<span class="more-album">更多新碟</span>
		</div>

		<div class="content">
			<span class="item" v-for="item of albumList.slice(0, 3)" :key="item.id">
				<img :src="item.picUrl" alt="歌单封面">
				<div class="item-title">{{ item.name }}</div>
				<div class="author">{{ item.artist.name }}</div>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FindAlbum',
	props: {
		albumList: Array
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	
	.find-album
		margin-top 1rem
		.title
			span
				display inline-block
			.new-album
				margin .9rem 0 0 1rem
				font-size $font-size-medium
				font-weight bold
				font-family '微软雅黑'
			.more-album
				color gray
				padding .4rem .6rem
				border .1rem solid lightgray 
				border-radius 5rem
				float right
				margin .5rem 1rem 0 0
				font-size $font-size-small
		.content
			display flex
			flex-direction row
			width 100%
			flex-wrap wrap
			justify-content space-around
			margin-top .5rem
			padding-bottom 2rem
			.item
				width 10rem
				margin-top 1rem
				@media all and (max-width 768px)
					width 29%
				img
					min-height 8rem
					background-color lightgray
					width 100%
					border-radius .4rem
				.item-title
					line-height 1.4rem
					margin-top .2rem
					letter-spacing .02rem
					overflow hidden
					text-overflow ellipsis
					display -webkit-box
					-webkit-line-clamp 2
					-webkit-box-orient vertical
				.author
					line-height 1.4rem
					color gray
</style>