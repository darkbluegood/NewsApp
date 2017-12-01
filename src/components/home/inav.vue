<template>
	<div class="wrapper clearfix">
		<div class="content">
			<div class="inav">
				<ul class="list clearfix">
					<li><a href="javascript:void(0)">首页</a></li>
					<li><a href="javascript:void(0)">推荐</a></li>
					<li><a href="javascript:void(0)">娱乐</a></li>
					<li><a href="javascript:void(0)">视频</a></li>
					<li><a href="javascript:void(0)">身边人</a></li>
					<li><a href="javascript:void(0)">推荐</a></li>
					<li><a href="javascript:void(0)">娱乐</a></li>
					<li><a href="javascript:void(0)">视频</a></li>
					<li><a href="javascript:void(0)">身边人</a></li>
					<li><a href="javascript:void(0)">首页</a></li>
					<li><a href="javascript:void(0)">推荐</a></li>
					<li><a href="javascript:void(0)">娱乐</a></li>
					<li><a href="javascript:void(0)">视频</a></li>

					
				</ul>
			</div>
		</div>
		<div class="add">
			<a href="javascript:void(0)"><img src="../../assets/add.jpg" /></a>
		</div>
	</div>



</template>
<script>
	import BScroll from 'better-scroll';
	export default {
		data() {
			return {
			}
		},
		mounted() {
			var list = document.querySelector(".list"),item = list.getElementsByTagName("li"),str = 0;
			for(var i=0; i<item.length;i++){
				str += item[i].offsetWidth.valueOf()
			}
			list.style.width=str+"px"
			setTimeout(() => {
				new BScroll(".inav",{scrollY : false,scrollX : true,click:true});
			},20);
		}

	}
</script>
<style lang="scss" scoped>
	.content{ width:90%; overflow:hidden;float:left;margin:0.3rem 0px; }
	.add { float:left;width:4%;margin:0.2rem 0 0.2em 3%; }
	.list{ 
		min-width:700px; 
		li{
			float:left;    min-width: 5rem;text-align: center;
			a{
				color:#98989a;font-size:1.2rem;
			}
		}
	}
</style>