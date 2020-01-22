<template>
	<div class="home">
		<home-header />
		<router-change>
			<keep-alive>
				<router-view class="blank" />
			</keep-alive>
		</router-change>
	</div>
</template>

<script>
import HomeHeader from '../components/homeHeader'
import routerChange from '_com//animate/routerChange'

export default {
	name: 'home',
	components: {
		HomeHeader,
		routerChange
	}
}
</script>

<style lang="stylus" scoped>
	.home
		.blank
			padding-bottom 12%
</style>
