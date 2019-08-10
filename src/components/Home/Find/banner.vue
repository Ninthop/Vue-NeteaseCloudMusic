<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of bannerList" :key="item.bannerId">
				<img :src="item.pic" alt="轮播图" class="banner-image">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>

export default {
	name: 'FindBanner',
	props: {
		bannerList: Array
	},
	data() {
      return {
        swiperOption: {
         
        }
      }
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		// height 0
		// padding-bottom 12rem
		width 100%
		overflow hidden
		.swiper-slide
			display flex
			justify-content center
			margin-top 2rem
			@media all and (max-width 768px)
				margin-top 1rem
			.banner-image
				width 70%
				box-shadow 1rem -1rem .1rem rgba(255, 107, 129,1.0)
				@media all and (max-width 768px)
					width 90%
					border-radius .8rem
					box-shadow .7rem -.5rem rgba(255, 107, 129,1.0)
</style>
