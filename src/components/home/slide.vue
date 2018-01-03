<template>
	<div class="slide" ref="slide">
		<ul class="list clearfix" id="slide-list">
			<li v-for="d in slideArr">
				<a href="javascript:void(0)"><img :src="d.pic_url" /></a>
				<div class="title">
					<a href="javascript:void(0)">{{d.title}}</a>
				</div>
			</li>
		</ul>


		<div class="count"><strong class="cur">{{current}}</strong>/{{count}}</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default {
		data(){
			return{
				current : 1 ,
				count :[],
				slideArr : [
					{
						"title" : "韩国队用冰刀割破中国选手至当场染红",
						"pic_url" : "http://raowensheng.com/test/images/ba98541462ddb36_size28_w600_h400.jpg"
					},
					{
						"title" : "詹皇30+13！骑士22分大胜76人",
						"pic_url" : "http://raowensheng.com/test/images/C6C3B19CBE38BA8829CA8C1DEE44FAF0A18C4C62_size25_w568_h423.jpg"
					},
					{
						"title" : "布冯荣膺意甲年度最佳球员",
						"pic_url" : "http://raowensheng.com/test/images/f20ccb927d478ad_size86_w950_h633.jpg"
					}
				]
				
			}
		},
		methods : {
			_setSlideWidth(){
		
				var list = document.querySelector("#slide-list"),item = list.getElementsByTagName("li"),str = 0;
				for(var i=0; i<item.length;i++){
					item[i].style.width = this.$refs.slide.clientWidth+"px"
				}
				list.style.width=this.$refs.slide.clientWidth*(item.length+2)+"px";
			}
		},
		mounted() {

			this.count = this.slideArr.length;
			this._setSlideWidth();
			setTimeout(() => {
				var bScroll = new BScroll(".slide",{
					scrollY : false,
					scrollX : true,
					momentum: false,
					snap: {
			            loop: true,
			            threshold: 0.3,
			            speed: 400
			        },
			        click:true
      			});
				bScroll.on("scrollEnd",function(o){
					this.current = bScroll.getCurrentPage().pageX;
		        })

				
			},40);

			

		}
	}
</script>

<style lang="scss" scoped>
	.slide{ overflow:hidden;margin:.4rem 0;position: relative; }
	.count{ position:absolute;bottom:.8rem;right:.6rem;color:#dbd9da;  }
	.cur{ color:#c2424f; font-size:1.2rem; }
	.list{
		li{
			float:left;position:relative;
			.title{  
				position:absolute;bottom:0;left:0;width:100%; padding:.8rem 0; background-color:rgba(0,0,0,0.5); 
				a{ font-size:1.2rem;color:#dbd9da;margin-left:2%;  }
			}
		}
	}
	
</style>