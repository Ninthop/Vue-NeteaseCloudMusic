<template>
	<div class="home-chart">
		<chart :topList="topList" />
	</div>
</template>

<script>
import Chart from './Chart/chart'
import { getAllToplist } from '@/api/Home/chart'

export default {
	name: 'HomeChart',
	data () {
		return {
			topList: []
		}
	},
	components: {
		Chart
	},
	mounted () {
		getAllToplist()
		.then(res => {
			this.topList = res.list
			// console.log(res.list)
		})
	}
}
</script>

<style lang="stylus" scoped>

</style>
