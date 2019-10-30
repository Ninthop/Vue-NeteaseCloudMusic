<template>
	<div class="chart">
		<div class="all-chart">
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
		.all-chart
			display flex
			justify-content space-around
			flex-wrap wrap
			margin-bottom 1rem
			// &:after
			// 	content ' '
			// 	width 30%
			// 	height 0
			// 	display block
			.img-wrapper
				margin-top 1rem	
				width 9rem
				// border .1rem solid red
				.img-content
					border-radius 5px
					box-shadow 2px 2px 8px 2px lightgray
					width 100%
				
</style>
