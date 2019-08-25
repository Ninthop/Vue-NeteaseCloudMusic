<template>
  <div id="app">
	  	<router-change>
			<keep-alive exclude="user, login">
				<router-view/>
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
	components: {
		MusicPlayer,
		routerChange
	}
}
</script>


<style lang="stylus">
	#app
		padding-bottom 12%
</style>
