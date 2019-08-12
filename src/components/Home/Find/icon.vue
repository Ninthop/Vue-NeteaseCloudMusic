<template>
	<div class="find-icon">
		<span class="everyday-rec">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-bianjigedanxinxi"></use>
			</svg>
			<div class="icon-text">每日推荐</div>
		</span>
		<span class="private-fM">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-xiangsituijian"></use>
			</svg>
			<div class="icon-text">私人FM</div>
		</span>
		<span class="song-list">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-SanMiAppiconfill-copy-copy"></use>
			</svg>
			<div class="icon-text">歌单</div>
		</span>
		<span class="radios">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-zhuanji"></use>
			</svg>
			<div class="icon-text">电台</div>
		</span>
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