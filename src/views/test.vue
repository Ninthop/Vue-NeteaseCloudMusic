<template>
	<div>
		<tab-s :typeId="value" @set="setID" class="tabs">
			<tab-pane name="1" label="测试1">
				11111
			</tab-pane>
			<tab-pane name="2" label="测试2">
				22222
			</tab-pane>
			<tab-pane name="3" label="测试3">
				33333
			</tab-pane>
		</tab-s>
	</div>
</template>

<script>
import TabS from '../common/base/tabs'

export default {
	name: 'test',
	components: {
		...TabS
	},
	data() {
		return {
			value: 1
		}
	},
	methods: {
		setID (id) {
			this.value = id
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>