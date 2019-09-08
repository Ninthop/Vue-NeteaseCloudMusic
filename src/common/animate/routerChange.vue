<template>
    <transition :name="transitionName">
        <slot></slot>
    </transition>
</template>

<script>
export default {
	name: 'routerChange',
	data () {
		return {
			transitionName: ''
		}
	},
	watch: {
		$route(to, from) {
			if (to.meta.index > from.meta.index) {
				this.transitionName = 'slide-left'
			}else{
				this.transitionName = 'slide-right'
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active
		transition 0.5s ease
		position absolute
		width 100%
		left 0
	//如果两个都设置translateX，会导致mini播放器消失
	.slide-right-enter, .slide-left-leave-active
		opacity 0
		transform translateX(-100%)
		// transform rotate(-30deg)
	.slide-left-enter, .slide-right-leave-active
		opacity 0
		transform translateY(5%)
		// transform rotate(30deg)
</style>
