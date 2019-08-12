<template>
	<div class="header">
		<router-link to="/user" tag="span" class="user-info">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-geshou"></use>
			</svg>
		</router-link>
		<home-tab />
		<span class="search">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-SanMiAppiconfill-copy"></use>
			</svg>
		</span>
	</div>
</template>

<script>
import HomeTab from './homeTab'

export default {
	name: 'HomeHeader',
	components: {
		HomeTab
	}
}
</script>

<style lang="stylus" scoped>
	@import '~_s/varibles.styl'
	.header
		display flex
		flex-direction row
		justify-content space-between
		padding .3rem 0
		.user-info
			margin .5rem
		.search
			margin .5rem
</style>
