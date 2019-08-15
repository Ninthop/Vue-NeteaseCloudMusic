<template>
	<div class="user">
		<img src="@/assets/static/back.png" alt="返回图标" class="login-back" @click="routerBack">
		<img :src="userInfo.profile.avatarUrl | formatPic" alt="" class="user-img info">
		<div class="user-name info">{{ userInfo.profile.nickname }}</div>
		<div class="user-level info">Lv.{{ userInfo.level }}</div>
		<div class="user-signature info">{{ userInfo.profile.signature }}</div>
		<button class="logout" @click="logout">退出登陆</button>
	</div>
</template>

<script>
import { logout, getUserInfo } from '@/api/User/user.js'

export default {
	name: 'user',
	data () {
		return {
			userInfo: {
				profile: {}
			}
		}
	},
	methods: {
		routerBack () {
			this.$router.go(-1);
		},
		logout () {
			logout()
			.then(res => {
				console.log(res)
				// console.log(localStorage.loginType)
				// localStorage.removeItem('uid')
				// localStorage.removeItem('userInfo')
				// localStorage.removeItem('loginType')
				let num = 0
				this.$store.dispatch('logout')
				// console.log(localStorage.loginType)
				this.$router.replace('/')
			})
		}
	},
	mounted () {
		getUserInfo({
			uid: this.$store.state.uid
		})
		.then(res => {
			this.userInfo = res
		})
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	.user
		height 100vh
		display flex
		flex-direction column
		justify-content center
		align-items center
		.login-back
			height 4rem
			position absolute
			top 0
			left 3%
		.logout
			border 0
			margin-top 10rem
			padding .5rem 1rem
			background-color #ff4757
			color white
			box-shadow 0 0 1rem .1rem #ff6b81
		.user-img
			height 6rem
			width 6rem
			border-radius 50%
		.info
			margin-top .5rem
			font-size $font-size-normal
		.user-signature
			padding-top 3rem
			font-size $font-size-medium
</style>