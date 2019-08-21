<template>
	<div class="find-icon">
		<router-link to="/everydaysong" tag="span" class="everyday-rec">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-bianjigedanxinxi"></use>
			</svg>
			<div class="icon-text">每日推荐</div>
		</router-link>
		<span class="private-fM">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-xiangsituijian"></use>
			</svg>
			<div class="icon-text">私人FM</div>
		</span>
		<router-link to="/newsong" tag="span"  class="radios">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-zhuanji"></use>
			</svg>
			<div class="icon-text">新歌速递</div>
		</router-link>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	.find-icon
		width 100%
		display flex
		flex-direction row
		justify-content space-around
		padding 1rem 0
		border-bottom .1rem solid lightgray
		span
			display inline-block
			
			svg 
				width 100%
				display flex
				justify-content center
			div
				font-size $font-size-s
				display flex
				justify-content center
</style>