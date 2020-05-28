<template>
  <div v-show="show" class="pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "pane",
  data() {
    return {
      show: true
    };
  },
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: "默认标签名"
    }
  }
};
</script>

<style lang='stylus' scoped>
	.pane
		min-height 20rem
</style>