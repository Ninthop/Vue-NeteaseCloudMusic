<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'Fade'
}
</script>

<style lang="stylus" scoped>
	.v-enter, .v-leave-to
		opacity 0
		transform scale(0.9) translateY(3rem)
	.v-enter-active, .v-leave-active
		transition all 0.4s
</style>
