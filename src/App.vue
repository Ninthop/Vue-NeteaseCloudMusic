<template>
  <div id="app">
	  	<router-change>
			<keep-alive :exclude="unCache">
				<router-view class="posiiton-div" id="view"/>
			</keep-alive>
	  	</router-change>
	  	<music-player />
  </div>
</template>

<script>
import MusicPlayer from './views/Player'
import routerChange from '_com//animate/routerChange'
import { mapGetters } from 'vuex'

export default {
	name: 'app',
	data () {
		return {
			unCache: ['user', 'Login', 'List'],
		}
	},
	components: {
		MusicPlayer,
		routerChange
	},
	computed: {
		...mapGetters([
			'playing'
		])
	}
}
</script>


<style lang="stylus">
	#app
		.posiiton-div
			position absolute
			top 0
			bottom 0
			width 100%
			padding-bottom 10%
			// margin 0 auto
			overflow-y auto
			// overflow-x hidden
			// padding-bottom 0
</style>
