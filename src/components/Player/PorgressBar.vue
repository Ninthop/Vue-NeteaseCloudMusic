<template>
<!-- 歌曲进度条 -->
	<div class="progress-bar" ref="bar" @click="setProgress">
		<div class="bar-content">
			<div class="progress" ref="progress">
				<div 
					class="btn-wrapper" 
					ref="btn"
					@touchstart.prevent="btnTouchStart"
					@touchmove.prevent="btnTouchMove"
					@touchend="btnTouchEnd"
				>
					<div class="progress-btn"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ProgressBar',
	props: {
		percent: {
			type: Number,
			default: 0
		}
	},
	created () {
		this.touch = {}
	},
	methods: {
		btnTouchStart (e) {
			this.touch.flag = true
			this.touch.startX = e.touches[0].pageX
			this.touch.left = this.$refs.progress.clientWidth
		},
		btnTouchMove (e) {
			if (!this.touch.flag) {
				return
			}
			//移动的距离△X
			const deltaX = e.touches[0].pageX - this.touch.startX
			//总偏移量
			const progressWidth = Math.min(this.$refs.bar.clientWidth,
											Math.max(0, this.touch.left + deltaX))
			this.setWidth(progressWidth)
		},
		btnTouchEnd (e) {
			this.touch.flag = false
			this.setPercent()
		},
		setWidth (progressWidth) {
			this.$refs.progress.style.width = `${progressWidth}px`
			this.$refs.btn.style.transform = `translateX(${progressWidth}px)`
		},
		setPercent () {
			const barWidth = this.$refs.bar.clientWidth
			const per = (this.$refs.progress.clientWidth / barWidth) * 1.0
			this.$emit('setPercent', per)
		},
		setProgress (e) {
			this.setWidth(e.offsetX)
			// console.log(this.$refs.bar.clientWidth)
			// console.log(this.$refs.progress.clientWidth)
			this.setPercent()
		}
	},
	//监控歌曲进度(百分数)
	watch: {
		percent (newPer) {
			if (this.touch.flag) return 
			if (newPer >= 0) {
				const barWidth = this.$refs.bar.clientWidth
				const progressWidth = newPer * barWidth
				this.setWidth(progressWidth)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')

	.progress-bar
		height 3rem
		cursor pointer
		// border .1rem solid red
		.bar-content
			position relative
			top 1.3rem
			height .4rem
			background rgba(0, 0, 0, 0.3)
			.progress
				position absolute
				height 100%
				background gray
				box-shadow 0 0 3rem .1rem lightgray
			.btn-wrapper
				// border .1rem solid red
				position absolute
				top -1.3rem
				width 3rem
				height 3rem
				.progress-btn
					position relative
					top 50%
					transform translateY(-50%)
					left -.5rem
					box-sizing border-box
					width 1rem
					height 1rem
					border-radius 50%
					background $color-theme
					box-shadow 0 0 .5rem $color-theme
</style>