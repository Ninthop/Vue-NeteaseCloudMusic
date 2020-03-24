<template>
  <div class="no-collect">
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-xiangsituijian"></use>
		</svg>
		<div>暂无收藏</div>
	</div>
</template>

<script>
export default {
	name: 'NoCollect'
}
</script>

<style lang='stylus' scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.no-collect
		display flex
		flex-direction column
		align-items center
		margin-top 20%
		// border 1px solid red
		.icon
			// border 1px solid red
			width 10rem
			height 10rem
		div
			margin-top 1rem
			padding 1rem
			display flex
			justify-content center
			font-size $font-size-huge
			text-shadow 6px 3px rgb(247,233,70)
			color rgb(33,56,71)
			font-weight 600
</style>