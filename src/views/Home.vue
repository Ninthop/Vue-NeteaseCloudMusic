<template>
	<div class="home">
		<home-header />
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
</template>

<script>
import HomeHeader from '../components/homeHeader'

export default {
	name: 'home',
	components: {
		HomeHeader
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
