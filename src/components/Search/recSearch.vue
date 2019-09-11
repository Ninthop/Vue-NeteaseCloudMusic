<template>
	<div class="recommand-search">
		<div class="title">热门搜索</div>
		<div class="hots">
			<span 
				v-for="(item, index) of this.hotSearch" 
				:key="index"
				@click="changeKeywords(item.first)"
			>
				{{ item.first }}
			</span>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'RecSearch',
	computed: {
		...mapGetters([
			'hotSearch'
		])
	},
	methods: {
		changeKeywords (hotKeywords) {
			this.$emit('setKey', hotKeywords)
		}
	},
	mounted () {
		this.$store.dispatch('getHotRearch')
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	.recommand-search
		position absolute
		left 0
		.title
			margin 1rem
			font-size $font-size-medium
		.hots
			display flex
			flex-wrap wrap
			margin 0 1rem
			font-size $font-size-normal
			span
				border .1rem solid lightgray 
				border-radius .4rem
				margin .5rem
				padding .7rem
				color gray
</style>