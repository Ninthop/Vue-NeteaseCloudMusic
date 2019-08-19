<template>
	<div class="search-tab">
		<ul class="tab">
			<li 
				class="every-tab" 
				v-for="item of tab" 
				:class="{'current': searchType == item.id}"
				:key="item.id"
				@click="setId(item.id)"
			>{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
import { Tabs } from 'element-ui'
import { mapGetters } from 'vuex';

export default {
	name: 'SearchTab',
	data () {
		return {
			tab: [
				{name: '单曲', id: 1},
				{name: '歌手', id: 100},
				{name: '歌单', id: 1000},
			]
		}
	},
	methods: {
		setId (id) {
			this.$store.commit('setSearchType', id)
			this.$store.dispatch('getSearchResultType', id)
			console.log(this.searchType)
		}
	},
	computed: {
		...mapGetters([
			'searchType'
		])
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	.search-tab
		// position absolute
		// top 20%
		width 100%
		// height 100%
		background-color white
		color black
		.tab
			display flex
			flex-direction row
			justify-content space-around
			padding 0
			margin-bottom 0
			.every-tab
				list-style none
				text-align center
				width 4rem
				padding .5rem
				font-size $font-size-medium
				transition 0.3s
				&.current
					transition 0.3s
					// border-bottom .3rem solid $color-theme
					font-weight 1000
					text-shadow .2rem .2rem 0 $color-theme
</style>