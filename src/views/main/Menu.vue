<template>
	<div class="menu">
		<h3>Меню</h3>
		<div class="links">
			<router-link class="link" v-for="(link, index) in links" :key="index" :to="link.path">
				{{ link.title }}
			</router-link>
		</div>
	</div>
</template>
<style lang="less" scoped>
@font: 'Rubik', sans-serif;
@fontColor: #333;
.defaultLink {
	color: @fontColor;
	text-decoration: none;
	&:active, &:visited {
		color: @fontColor;
	}
}
.menu {
	width: 200px;
	height: 100vh;
	color: @fontColor;
	font-family: @font;
	box-shadow: 1px 1px 10px #f1f1f1;
	.links {
		display: flex;
		flex-direction: column;
		.link {
			list-style: none;
			padding: 10px;
			text-align: center;
			color: @fontColor;
			font-size: 1.2rem;
			transition: .3s;
			&:extend(.defaultLink);
			&:hover {
				background: #f2f2f2;
			}
		}
	}
	h3 {
		font-size: 25px;
		text-align: center;
		margin-bottom: 20px;
		margin-top: 0px;
		padding: 20px;
		border-bottom: 1px solid #333;
	}
	hr {
		width: 80%;
		color: #333;
	}
}
</style>
<script >
export default {
	computed: {
		links () {
			return this.$router.options.routes.map( function (r) { return {title: r.meta.title, path: r.path} } )
		}
	}
 }
</script>