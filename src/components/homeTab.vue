<template>
	<span class="tab">
		<ul>
			<li><router-link to='/my' tag='span' class="tab-item">我的</router-link></li>
			<li><router-link to='/find' tag='span' class="tab-item">发现</router-link></li>
			<li><router-link to='/chart' tag='span' class="tab-item">排行榜</router-link></li>
		</ul>
	</span>
</template>

<script>
export default {
	name: 'HomeTab'
}
</script>

<style lang="stylus" scoped>
	@import '~_s/varibles.styl'
	.tab
		display flex
		flex 1
		ul
			display flex
			flex-direction row
			width 100%
			padding 0 2rem
			@media all and (max-width 768px)
				justify-content space-around
			li
				list-style none
				margin 0 1rem
				padding-top .5rem
				.tab-item
					text-align center
					list-style none
					font-size $font-size-medium
					transition 0.3s
					&.router-link-active
						display inline-block
						margin-top -.5rem
						font-size $font-size-large
						font-weight bold
						text-shadow .2rem .2rem 0rem $color-theme
</style>
