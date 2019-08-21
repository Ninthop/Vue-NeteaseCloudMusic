<template>
	<div class="other-list">
		<div class="title">
			<img src="@/assets/static/back.png" alt="返回图标" class="back" @click="routerBack">
			<div class="title-name">{{ title }}</div>
		</div>

		<div class="content">
			<div 
				class="song" 
				v-for="(item, index) of playList" 
				:key="index"
				@click="listenMusic(playList, index)"
			>
				<div class="index">{{ index+1 }}</div>
				<div class="song-body">
					<span class="song-title">
						{{ item.name }}
						<span class="rtUrl" v-if="item.rtUrl">{{ item.rtUrls }}</span>
					</span>
					<span class="author-and-cover">
						<span class="ar" v-for="(author,index) of item.ar" :key="index">
							{{ author.name }}
						</span>
						<span class="separator">-</span>
						<span class="cover">{{ item.al.name }}</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'OtherList',
	props: {
		playList: Array,
		songNum:  Number,
		title: String
	},
	methods: {
		routerBack () {
			this.$router.go(-1);
		},
		listenMusic (song, index) {
			if (song[index].st == 0 && song[index].fee != 1 && song[index].fee != 4 && song[index].fee != 16) {
				this.$emit('listen', song[index])
				// console.log(song)
			}else if (song[index].st == 0 &&　(song[index].fee == 1 || song[index].fee == 16)) {
				alert('需要Vip')
			}else if (song[index].fee == 4) {
				alert('需要购买专辑')
			}else {
				alert('没有版权')
				// console.log(song[index])
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.other-list
		position absolute
		background-color white
		width 100%
		.title
			position fixed
			// background-color #ff4757
			width 100%
			height 4rem
			color black
			border-bottom .1rem solid lightgray
			background-color white
			.back
				height 2.5rem
				width 2.5rem
				position absolute
				top 50%
				left 2%
				transform translateY(-50%)
			.title-name
				font-size $font-size-medium
				position absolute
				white-space nowrap
				top 50%
				left 50%
				transform translateX(-50%) translateY(-50%)
		.content
			margin-top 5rem
			.song
				display flex
				flex-direction row
				margin 2rem 0
				.index
					height 3rem
					width 3rem
					display flex
					justify-content center
					align-items center
					// border .1rem solid red
					font-size $font-size-normal
					color gray
				.song-body
					display flex
					flex-direction column
					justify-content center
					width 80%
					margin-left .5rem
					ellipsis-one()
					.song-title
						font-size $font-size-medium
						margin-bottom .5rem
						ellipsis-one()
						min-height 1.8rem
					.author-and-cover
						display flex
						flex-direction row
						color gray
						font-size $font-size-small
						min-height 1.8rem
						span.ar
							&:after
								content '/'
								margin-right .3rem
							&:nth-last-child(3)
								&:after
									content ''
						.cover
							ellipsis-one()
</style>