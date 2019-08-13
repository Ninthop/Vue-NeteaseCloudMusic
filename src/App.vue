<template>
  <div id="app">
	  <keep-alive exclude="user, login">
    	<router-view/>
	  </keep-alive>
  </div>
</template>

<script>
export default {
	name: 'app'
}
</script>


<style lang="stylus">

</style>
