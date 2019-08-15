<template>
  <div id="app">
	  <keep-alive exclude="user, login">
    	<router-view/>
	  </keep-alive>
	  <music-player />
  </div>
</template>

<script>
import MusicPlayer from './views/Player'

export default {
	name: 'app',
	components: {
		MusicPlayer
	}
}
</script>


<style lang="stylus">
	#app
		padding-bottom 12%
</style>
