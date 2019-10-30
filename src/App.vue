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
			unCache: ['user', 'Login', 'List']
		}
	},
	components: {
		MusicPlayer,
		routerChange
	},
	computed: {
		...mapGetters([
			'fullScreen'
		])
	},
	watch: {
		fullScreen () {
			let view = document.getElementById('view')
			view.style.paddingBottom = '12%'
			// console.log(view)
		}
	}
}
</script>


<style lang="stylus">
	#app
		// padding-bottom 12%
		.posiiton-div
			position absolute
			top 0
			bottom 0
			width 100%
			margin 0 auto
			overflow-y auto
			overflow-x hidden
			// padding-bottom 0
</style>
