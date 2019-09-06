<template>
	<div class="find-rec">
		<div class="title">
			<span class="rec">推荐歌单</span>
			<span class="list-square" @click="changeNum">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-SanMiAppiconfill"></use>
				</svg>
				换一换
			</span>
		</div>

		<div class="content" v-if="recList[0]">
			<router-link :to="'/list/'+recList[0].id" tag="span" class="item">
				<div class="img"><img :src="recList[0].picUrl | formatPic" alt="歌单封面"></div>
				<div class="item-title">{{ recList[0].name }}</div>
			</router-link>
			<router-link tag="span" class="item" v-for="item of sixRecList" :key="item.id" :to="'/list/'+item.id">
				<div class="img"><img :src="item.picUrl | formatPic" alt="歌单封面"></div>
				<div class="item-title">{{ item.name }}</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import Vue from "vue"
export default {
	name: 'FindRecommand',
	props: {
		recList: {
			type: Array,
		}
	},
	data () {
		return {
			startNum: 1,
			endNum: 6
		}
	},
	computed: {
		sixRecList () {
			return this.recList.slice(this.startNum, this.endNum)
		}
	},
	//切换推荐歌单数据
	methods: {
		changeNum () {
			// if (this.startNum < 1 + 5*2){
			// 	this.startNum += 5
			// 	this.endNum += 5
			// 	// console.log(this.startNum)
			// 	return
			// }
			// this.startNum = 1
			// this.endNum = 6
			// console.log(this.sixRecList)
			var offset = (this.recList.length - 1) % 5
			console.log(offset)
			if (offset == 0) {
				offset = 5
				if (this.endNum <= this.recList.length - 1) {
					this.startNum += offset
					this.endNum += offset
					console.log(this.startNum + ' ' + this.endNum)
					return
				}
			}else {
				if (this.endNum <= this.recList.length - 1) {
					this.startNum += offset
					this.endNum += offset
					console.log(this.startNum + ' ' + this.endNum)
					return
				}
			}
			this.startNum = 1
			this.endNum = 6
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')

	.find-rec
		background-color white
		// margin-top 1rem
		.title
			span
				display inline-block
			.rec
				margin .9rem 0 0 1rem
				font-size $font-size-medium
				font-weight bold
			.list-square
				color gray
				padding .4rem .6rem
				border .1rem solid lightgray 
				border-radius 5rem
				float right
				margin .5rem 1rem 0 0
				font-size $font-size-small
				svg
					height 1rem
					width 1rem
		.content
			display flex
			flex-direction row
			width 100%
			flex-wrap wrap
			justify-content space-around
			margin-top .5rem
			.item
				width 10rem
				margin-top 1rem
				@media all and (max-width 768px)
					width 29%
				.img
					// min-height 8rem
					background-color lightgray
					height 0
					padding-bottom 100%
					width 100%
					overflow hidden
					border-radius .4rem
					img 
						width 100%
						min-height 9rem
				.item-title
					line-height 1.8rem
					margin-top .5rem
					overflow hidden
					text-overflow ellipsis
					display -webkit-box
					-webkit-line-clamp 2
					-webkit-box-orient vertical
					font-size $font-size-normal

</style>