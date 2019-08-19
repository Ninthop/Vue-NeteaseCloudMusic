<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'Transform'
}
</script>

<style lang="stylus" scoped>
    .v-enter, .v-leave-to
        transform translateY(100%)
    .v-enter-active, .v-leave-active
        transition all 0.5s
</style>
