<template>
	<ul>
		<li v-for="v in list" v-text='v'>safas</li>
	</ul>
</template>
<style>
	ul{
		width: 800px;
		margin: 0 auto;
		text-align: center;
	}
	li{
		padding: 10px 0;
		margin: 6px 0;
		background: #efefef;
		-webkit-transition: all .3s;
	}
	li:hover{
		background: #ccc;
	}
</style>
<script>
	export default {
		data () {
			return {
				list: ["恒山", "衡山", "华山", "泰山", "嵩山"]
			}
		}
	}
</script>