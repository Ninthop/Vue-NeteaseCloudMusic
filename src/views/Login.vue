<template>
	<div class="login">
		<img src="@/assets/static/back.png" alt="返回图标" class="login-back" @click="routerBack">
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-huanyuangequxinxi"></use>
		</svg>
		<div>
			<span class="login-text">请输入手机号：</span><input type="text" class="user" v-model="loginForm.phone">
		</div>
		<div>
			<span class="login-text">请输入密码：</span><input @keyup.enter="login" type="password" class="pwd" v-model="loginForm.password">
		</div>
		<button class="confirm" @click="login">登陆</button>
		<p class="tips">注：请输入网易云音乐账号</p>
		<div class="github">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-github"></use>
			</svg>
			<a href="https://github.com/Ninthop/Vue-NeteaseCloudMusic" class="github-name">Ninthop</a>
		</div>
	</div>
</template>

<script>
// import * as loginApi from '@/api/Home/my.js'
import axios from 'axios'
import qs from 'qs'

export default {
	name: 'Login',
	data () {
		return {
			loginForm: {
				phone: '',
				password: '',
				timestamp: (new Date()).getTime()
			}
		}
	},
	methods: {
		routerBack () {
			this.$router.go(-1);
		},
		login () {
			if (this.loginForm.phone === '' || this.loginForm.password === '') {
        		alert('账号或密码不能为空');
			}else {
				axios.post('http://47.102.127.79:80/login/cellphone',
					qs.stringify(this.loginForm),
					{
						withCredentials: true
					}
				)
				.then(res => {
					// console.log(res.response)
					// console.log(res)
					let data = res.data
					this.$store.dispatch('login', data)
					this.$router.replace('/')
				})
				.catch(
					function (err) {
						let error = err.response.data
						if (error.code === 400) {
							alert('账号与密码错误')
						}else if (error.code === 502) {
							alert(error.msg)
						}else if (error.code === 401) {
							alert('登陆失效，请重新登陆')
						}else {
							alert('连接失败')
						}
					}
				);
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.login
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
		svg
			height 8rem
			width 8rem
		div
			.login-text
				display inline-block
				min-width 10rem
				font-size $font-size-normal
			input
				margin-top 2rem
				padding .5rem
				width 50%
				max-width 20rem
				border .1rem solid lightgray
		.confirm
			margin-top 2rem
			width 6rem
			height 3rem
			border 0
			outline none
			transition 0.1s
			background-color #ff6b81
			color #f1f2f6
			box-shadow .3rem .3rem #2980b9
			&:hover
				background-color #ff4757
				color white
				box-shadow -.3rem -.3rem red
		.tips
			font-size $font-size-normal
		.github
			display	flex 
			flex-direction row
			justify-content center
			align-items center
			.icon
				width 3rem
				margin-right .5rem
			.github-name
				position relative
				font-size $font-size-medium
				text-decoration none
				&:before
					content ''
					position absolute
					width 0
					left 50%
					bottom -.3rem
					height .2rem
					background-color rgba(41, 128, 185, .5)
				&:hover:before
					width 100%
					left 0
					transition all 0.5s
				&:link
					color #606266
				&:visited
					color #606266
				&:hover
					color #3498db
				&:active
					color #606266

</style>