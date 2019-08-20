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
			<span class="login-text">请输入密码：</span><input type="password" class="pwd" v-model="loginForm.password">
		</div>
		<button class="confirm" @click="login">登陆</button>
	</div>
</template>

<script>
// import * as loginApi from '@/api/Home/my.js'
import axios from 'axios'

export default {
	name: 'Login',
	data () {
		return {
			loginForm: {
				phone: '',
				password: ''
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
				axios.get('http://47.102.127.79:80/login/cellphone',{
					params: this.loginForm,
					withCredentials: true
				})
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
	.login
		height 90vh
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
				width 9rem
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

</style>