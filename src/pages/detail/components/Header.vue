<template>
	<div>
		<router-link
			tag="div"
			to="/"
			class="header-abs"
			v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe601;</div>
		</router-link >
		<div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe601;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>
<script>
export default {
	name: 'DetailHeader',
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
			if (top > 50) {
				let opacity = (top - 50) / 60
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }
				this.showAbs = false
			} else {
				this.showAbs = true
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
@import '~styles/varibles.styl'
.header-abs
	position absolute
	left .2rem
	top .2rem
	width .8rem
	height .8rem
	border-radius .4rem
	background rgba(0,0,0,0.65)
	text-align center
	line-height .8rem
	.header-abs-back
		color #fff
		font-size .4rem
.header-fixed
	z-index 2
	position fixed
	top 0
	left 0
	right 0
	display flex
	height $headerHeight
	background $bgColor
	color #fff
	align-items center
	justify-content center
	text-align center
	margin 0 auto
	font-size .32rem
	.header-fixed-back
		position absolute
		top 0
		left 0
		bottom 0
		width .64rem
		line-height $headerHeight
		text-align center
		font-size .4rem
		margin-left .12rem
		color #fff
</style>
