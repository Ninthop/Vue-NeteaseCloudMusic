<template>
  <div id="app">
	  	<router-change>
			<keep-alive :exclude="unCache">
				<router-view class="posiiton-div" />
			</keep-alive>
	  	</router-change>
	  	<music-player />
  </div>
</template>

<script>
import MusicPlayer from './views/Player'
import routerChange from '_com//animate/routerChange'

export default {
	name: 'app',
	data () {
		return {
			unCache: ['user', 'Login', 'List']
		}
	},
	components: {
		MusicPlayer,
		routerChange
	}
}
</script>


<style lang="stylus">
	#app
		padding-bottom 12%
		.posiiton-div
			position absolute
			left 0
			right 0
			top 0
			bottom 0
</style>
