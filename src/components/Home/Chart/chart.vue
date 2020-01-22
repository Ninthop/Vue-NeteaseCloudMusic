<template>
	<div class="chart">
		<div class="all-chart" :style="{}">
			<router-link :to="'/list/' + item.id" tag="span" class="img-wrapper" v-for="item of topList" :key="item.id">
				<img :src="item.coverImgUrl | formatPic" alt="排行榜图片" class="img-content">
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Chart',
	props: {
		topList: Array
	}
}
</script>

<style lang="stylus" scoped>
	.chart
		margin 0 .8rem
		.all-chart
			display flex
			justify-content space-between
			flex-wrap wrap
			margin-bottom 1rem
			.img-wrapper
				margin-top 1rem	
				width 30%
				// border .1rem solid red
				&:last-child:nth-child(3n-1)
					margin-right 35%
				.img-content
					border-radius 5px
					box-shadow 2px 2px 8px 2px lightgray
					width 100%
</style>
