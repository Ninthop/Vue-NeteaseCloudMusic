<template>
	<div class="comments">
		<div class="title">
			<img src="@/assets/static/back.png" alt="返回图标" class="back" @click="routerBack">
			<div class="title-name">评论</div>
		</div>
		<div class="song-name">
			{{ this.currentSong.name }}
		</div>

		<el-tabs v-model="activeName" class="pages" stretch>
<!-- 热门评论 -->
			<el-tab-pane label="热门评论" name="first" class="page">
				<div>
					<div class="comment" v-for="hotComment of this.hotComment" :key="hotComment.id">
						<img :src="hotComment.user.avatarUrl" alt="评论者头像" class="commenter-head">
						<div class="comment-infos">
							<div class="commenter-info">
								<div class="commenter-name">{{ hotComment.user.nickname }}</div>
								<div class="commenter-date">{{ formatTime(hotComment.time) }}</div>
							</div>
							<div class="comment-content" v-html="hotComment.content"></div>
							<div class="comment-beReplied" v-if="hotComment.beReplied.length != 0">
								<div>回复：</div><span>{{ hotComment.beReplied[0].content }}</span>
							</div>
						</div>
						<div class="comment-likeCount">♥{{hotComment.likedCount}}</div>
					</div>
				</div>
			</el-tab-pane>
			
<!-- 最新评论 -->
			<el-tab-pane label="最新评论" name="second" class="page">
				<div v-infinite-scroll="load">
					<div class="comment" v-for="newComment of this.newComment" :key="newComment.id">
						<img :src="newComment.user.avatarUrl" alt="评论者头像" class="commenter-head">
						<div class="comment-infos">
							<div class="commenter-info">
								<div class="commenter-name">{{ newComment.user.nickname }}</div>
								<div class="commenter-date">{{ formatTime(newComment.time) }}</div>
							</div>
							<div class="comment-content" v-html="newComment.content"></div>
							<div class="comment-beReplied" v-if="newComment.beReplied.length != 0">
								<div>回复：</div><span>{{ newComment.beReplied[0].content }}</span>
							</div>
						</div>
						<div class="comment-likeCount">❤ {{newComment.likedCount}}</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getComment } from '@/api/Song/song'

export default {
	name: 'Comments',
	data () {
		return {
			activeName: 'first',
			hotComment: {},
			newComment: {},
			total: 0,
			page: 1
		}
	},
	computed: {
		...mapGetters([
			'currentSong'
		])
	},
	methods: {
		routerBack () {
			this.$router.go(-1);
			this.$store.commit('setFullScreen', true)
		},
		formatTime (time) {
			let formattime = new Date(time)
			return `${formattime.getFullYear()}年${formattime.getMonth()+1}月${formattime.getDate()}日`
		},
		load () {
			if (this.activeName == 'second' && this.total > 0)
			{
				console.log('load')
				getComment({
					id: this.currentSong.id,
					offset: this.page * 20
				})
				.then(res => {
					this.total--
					this.page++
					this.newComment = this.newComment.concat(res.comments)
				})
			}
		}
	},
	created () {
		getComment({
			id: this.currentSong.id
		})
		.then(res => {
			console.log(res)
			this.hotComment = res.hotComments
			this.newComment = res.comments
			this.total = res.total / 20 - 1
		})
	}
}
</script>

<style lang='stylus' scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.comments
		position relative
		// display flex
		.title
			position fixed
			display flex
			width 100%
			height 4rem
			color black
			z-index 1001
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
				top 50%
				left 50%
				transform translateX(-50%) translateY(-50%)
		.song-name
			position fixed
			display flex
			justify-content center
			padding-top 1rem
			top 4rem
			left 50%
			height 3rem
			width 101%
			z-index 1000
			transform translateX(-50%)
			font-family "Helvetica Neue", Helvetica, sans-serif
			font-style italic
			font-weight 600
			font-size $font-size-medium
			background-color white
			// box-shadow .5rem 0 .5rem rgb(100,100,100)
		.pages
			position absolute
			top 7rem
			width 100%
			padding-bottom 15%
			.comment
				display flex
				position relative
				padding-bottom 1rem
				margin-left 1rem
				.commenter-head
					min-width 5rem
					height 5rem
					margin-right 1.5rem
					border-radius 50%
				.comment-infos
					width 100%
					border-bottom .1rem solid rgba(200,200,200,1)
					padding-bottom 2rem
					.commenter-info
						margin-bottom 1rem
						.commenter-name
							font-size $font-size-normal
							color rgb(100,100,100)
							margin-bottom .3rem
						.commenter-date
							font-size $font-size-small
							color rgb(150,150,150)
					.comment-content
						width 90%
						line-height 140%
						font-size $font-size-normal
						padding 0 3rem 1rem 0
						white-space pre-wrap
					.comment-beReplied
						width 85%
						font-size $font-size-normal
						padding 1rem
						box-shadow .2rem .2rem .5rem rgb(200,200,200)
						white-space pre-wrap
						line-height 110%
						div
							margin-bottom .5rem
						span 
							font-size $font-size-small
				.comment-likeCount
					position absolute
					right 5%
					color rgb(100,100,100)
					font-size $font-size-normal
			.comment:last-child
				.comment-infos
					border 0
</style>