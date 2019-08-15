<template>
	<div>
		<div class="list-header" v-if="playList.creator">
			<div class="bgimg-fa">
				<div class="bgimg" 
					:style="{  
						background: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('${playList.coverImgUrl}') no-repeat center center`, 
						filter: 'blur(1.8rem)'
					}"
				>
				</div>
			</div>
			<div class="header-fixed" :style="bg">
				<img src="@/assets/static/back.png" alt="返回图标" class="login-back" @click="routerBack">
				<div class="fixed-text">{{ playList.name }}</div>
			</div>
			<div class="header-pic">
				<img :src="playList.coverImgUrl" alt="歌单封面" class="pic">
				<div class="info">
					<img :src="playList.creator.avatarUrl" alt="用户头像" class="user-avatar">
					<div class="info-nickname">
						{{ playList.creator.nickname }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            bg: {
				backgroundColor: 'rgba(255, 71, 87, 0)',
				color: 'white'
            }
        }
	},
	props: {
		playList: Object
	},
    methods: {
        routerBack () {
            this.$router.go(-1)
        },
        handleScroll () {
			const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if (top <= 0){
                this.bg = { backgroundColor: 'rgba(255, 71, 87, 0)'}
            }else if(top > 0 && top < 180) {
				const opacitynum = top / 180
				this.bg = { backgroundColor: `rgba(255, 71, 87, ${opacitynum})`}
            }else{
				this.bg = { backgroundColor: 'rgba(255, 71, 87, 1)'}
			}
        }
    },
    mounted () {
		window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
    @import ('~_s/varibles.styl')
    @import ('~_s/mixin.styl')
	.list-header
		height 20rem
		width 100%
		border-bottom .1rem solid red
		display flex
		.bgimg-fa
			position absolute
			top 0
			height 20rem
			width 100%
			overflow hidden
		.bgimg
			position absolute
			top 0
			height 20rem
			width 100%
			overflow hidden
			background-size cover
			transform scale(1.2)
		.header-fixed
			position fixed
			// background-color #ff4757
			width 100%
			height 3rem
			color white
			z-index 100
			.login-back
				height 2.5rem
				width 2.5rem
				position absolute
				top 50%
				left 2%
				transform translateY(-50%)
			.fixed-text
				font-size $font-size-medium
				position absolute
				white-space nowrap
				top 50%
				left 50%
				transform translateX(-50%) translateY(-50%)
		.header-pic
			// padding-top 3rem
			position relative
			z-index 1
			display flex
			flex-direction row
			align-items center
			.pic
				position relative
				left 2rem
				border-radius .5rem
				height 10rem
				width 10rem
			.info
				color white
				position relative
				left 25%
				font-size $font-size-medium
				display flex
				flex-direction column
				.info-nickname
					ellipsis-one()
					max-width 15rem
				.user-avatar
					height 4rem
					width 4rem
					border-radius 50%
					border .2rem solid #fff
					margin-bottom 1rem
</style>
