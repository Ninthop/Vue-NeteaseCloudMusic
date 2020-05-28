<template>
  <div>
    <div class="wrap" ref="tab">
      <span
        v-for="item of tabs"
        class="tab"
        :class="{'current': typeId == item.name}"
        :key="item.name"
        @click="set(...arguments, item.name)"
        :style="{width: tabWidth + '%'}"
				ref="allTab"
      >
				<span class="tab-text">{{ item.label }}</span>
      </span>
      <div class="line" ref="line" :style="{width: length + 'px'}"></div>
    </div>

    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  props: {
    typeId: [String, Number]
  },
  data() {
    return {
      length: 0,
      tabWidth: 0,
      tabs: [],
			currentId: this.typeId,
			marginLeft: 0
    };
  },
  methods: {
    set(e, id) {			
			this.$emit("set", id);
			let offset = e.target._prevClass == "tab-text" ? e.target.offsetLeft : e.target.children[0].offsetLeft;
			this.$refs.line.style.left = `${offset}px`;
    },
    getTabs() {
      return this.$children.filter(item => item.$options.name == "pane");
    },
    setTabs() {
      let _this = this;
      this.getTabs().forEach((pane, index) => {
        _this.tabs.push({
          label: pane.label,
          name: pane.name || index
        });
      });
      this.setStatus();
    },
    setStatus() {
      let tabs = this.getTabs();
      let _this = this;
      tabs.forEach(tab => {
        let bool = tab.name == _this.currentId;
        tab.show = bool;
      });
		},
		okkkk () {
			console.log('okkk')
		}
  },
  mounted() {
    this.setTabs();
    let width = this.$refs.tab.offsetWidth / this.tabs.length;
    this.length = width / 2;
    let num = this.tabs.length;
		this.tabWidth = 100 / num;
		this.$nextTick(() => {
			let offset = document.getElementsByClassName('current')[0].children[0].offsetLeft
			this.$refs.line.style.left = `${offset}px`;
		})
		
  },
  watch: {
    typeId(val) {
      this.currentId = val;
    },
    currentId() {
      this.setStatus();
    }
  }
};
</script>

<style lang="stylus" scoped>
	@import '~_s/varibles.styl'

	.wrap
		display: flex;
		flex-direction: row;
		// border-bottom: solid 2px lightgray;
		position: relative;
		.tab
			z-index 1
			display: flex;
			margin: 10px 0;
			cursor: pointer;
			font-size: 20px;
			transition: all 0.2s;
			justify-content: center;
			align-items: center;
			font-size $font-size-large
		.current
			color: rgba(214, 48, 49,1.0);
			font-weight: bold;
		.line
			position: absolute;
			background-color: #fab1a0;
			height: 15px;
			bottom: 18%;
			left: 0;
			// margin-left 11%
			transition: all 0.3s;
			border-radius 5rem
	.tab-content
		padding: 10px
</style>