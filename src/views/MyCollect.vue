<template>
	<div class="mycollect">
		<div class="title">
			<img src="@/assets/static/back.png" alt="返回图标" class="back" @click="routerBack">
			<div class="title-name">我的收藏</div>
		</div>

<!-- 歌手 -->
		<el-tabs v-model="activeName" class="pages" stretch>
			<el-tab-pane label="歌手" name="first" class="page">
				<div class="singers">
					<router-link 
						:to="'/singer/'+singer.id" 
						tag="div" 
						class="singer" 
						v-for="singer of this.SubArtist.data" 
						:key="singer.id"
					>
						<img :src="singer.picUrl | formatPic" alt="歌手头像" class="singer-head">
						<div class="singer-infos">
							<div class="singer-name">{{ singer.name }}</div>
							<div class="singer-songInfo">
								<div class="singer-album-num">专辑：{{ singer.albumSize }}</div>
								<div class="singer-mv-num">MV：{{ singer.mvSize }}</div>
							</div>
						</div>
					</router-link>
				</div>
				<no-collect v-show="this.SubArtist.count == 0" />
			</el-tab-pane>

<!-- MV -->
			<el-tab-pane label="MV" name="second" class="page">
				<div class="MVs">
					<div class="MV" v-for="MV of this.SubMV.data" :key="MV.vid">
						<div class="MV-head">
							<img :src="MV.coverUrl" alt="MV预览图" class="MV-head-pic">
						</div>
						<div class="MV-infos">
							<div class="MV-name">
								<span class="MV-icon" v-show="MV.type == 0">MV</span>
								{{ MV.title }}
							</div>
							<div class="MV-info">
								<div class="MV-time">{{ formatTime(MV.durationms) }}</div>
								<div class="MV-author">{{ MV.creator[0].userName }}</div>
							</div>
						</div>
					</div>
				</div>
				<no-collect v-show="this.SubMV.count == 0" />
			</el-tab-pane>

<!-- 专辑 -->
			<el-tab-pane label="专辑" name="third" class="page">
				<div class="covers">
					<router-link 
						:to="'/album/'+cover.id" 
						tag="div"
						class="cover" 
						v-for="cover of this.SubAlbum.data" 
						:key="cover.id"
					>
						<div class="cover-head-mask">
							<img :src="cover.picUrl | formatPic" alt="专辑封面" class="cover-head">
						</div>
						<div class="cover-infos">
							<div class="cover-name">{{ cover.name }}</div>
							<div class="cover-songInfo">
								<div class="cover-author">{{ cover.artists[0].name }}</div>
								<div class="cover-num">{{ cover.size }}首</div>
							</div>
						</div>
					</router-link>
				</div>
				<no-collect v-show="this.SubAlbum.count == 0" />
			</el-tab-pane>
  	</el-tabs>
	</div>
</template>

<script>
import * as apiMy from '@/api/Home/my.js'
import NoCollect from '../common/base/noCollect'

export default {
	name: 'myCollect',
	data() {
		return {
			activeName: 'first',
			SubArtist: {},
			SubMV: {},
			SubAlbum: {}
		}
	},
	components: {
		NoCollect
	},
	methods: {
		routerBack () {
			this.$router.go(-1);
		},
		// 格式化时间
		formatTime (time) {
			time = time / 1000 | 0
			time = time | 0
			const minute = this.completion(time / 60 | 0, 2)
			const second = this.completion(time % 60, 2)
			return `${minute}:${second}`
		},
		// 补0
		completion (num, n) {
			let length = num.toString().length
			while (length < n) {
				num = '0' + num
				length++
			}
			return num
		}
	},
	created () {
		apiMy.getUserSubArtist()
		.then(res => {
			console.log('Artist')
			console.log(res)
			this.SubArtist = res
		})
		apiMy.getUserSubMV()
		.then(res => {
			console.log('MV')
			console.log(res)
			this.SubMV = res
		})
		apiMy.getUserSubAlbum()
		.then(res => {
			console.log('Album')
			console.log(res)
			this.SubAlbum = res
		})
	}
}
</script>

<style lang='stylus' scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.mycollect
		position relative
		// display flex
		.title
			position fixed
			display flex
			width 100%
			height 4rem
			color black
			// border-bottom .1rem solid lightgray
			background-color white
			.back
				height 2.5rem
				width 2.5rem
				position absolute
				top 50%
				left 2%
				transform translateY(-50%)
			.title-name
				font-size $font-size-large
				position absolute
				white-space nowrap
				top 50%
				left 50%
				transform translateX(-50%) translateY(-50%)
		.pages
			position absolute
			top 4rem
			width 100%
			.singers
				.singer
					display flex
					flex-direction row
					padding .8rem 1.5rem
					.singer-head
						width 6rem
						height 6rem
						border-radius 50%
						box-shadow 0 0 5px gray
					.singer-infos
						display flex
						justify-content center
						flex-direction column
						margin-left 1rem
						.singer-name
							font-size $font-size-medium
							margin-bottom .5rem
							color rgb(20,20,20)
						.singer-songInfo
							display flex
							color rgb(120,120,120)
							font-size $font-size-small
							.singer-album-num
								margin-right .8rem
			.MVs
				.MV
					display flex
					margin .8rem 1.5rem
					align-items center
					.MV-head
						min-width 14rem
						height 8rem
						overflow hidden
						display flex
						align-items center
						border-radius .5rem
						margin-right .8rem
						.MV-head-pic
							width 14rem
					.MV-infos
						.MV-name
							font-size $font-size-medium
							margin-bottom 1.5rem
							color rgb(20,20,20)
							line-height 120%
							.MV-icon
								padding 0 .2rem
								color red
								border .1rem solid red
								border-radius .2rem
								font-size $font-size-small
						.MV-info
							display flex
							flex-direction row
							font-size $font-size-small
							color rgb(120,120,120)
							.MV-time
								margin-right 1rem
			.covers
				.cover
					display flex
					margin .8rem 1.5rem
					align-items center
					.cover-head-mask
						background url(../assets/static/coverMask3.png) no-repeat
						min-width 9.5rem
						height 8rem
						background-size 9.5rem 8rem
						.cover-head
							width 8rem
							height 8rem
							margin-right .5rem
					.cover-infos
						display flex
						justify-content center
						flex-direction column
						margin-left 1rem
						.cover-name
							font-size $font-size-medium
							margin-bottom 1rem
							color rgb(20,20,20)
						.cover-songInfo
							display flex
							color rgb(120,120,120)
							font-size $font-size-small
							.cover-author
								margin-right .8rem
</style>