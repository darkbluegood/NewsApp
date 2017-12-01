<template>
	<div class="list-wrapper" id="list-wrapper">
		
		<div class="content-wrapper">
			<ul class="list" id="news-list">
				<li class="clearfix" v-for="(d,index) in datas">
					<div class="img">
						<a href="javascript:void(0)">
							<img :src="d.pic_url" />
						</a>
					</div>
					<div class="title">
						<p><a href="javascript:void(0)" class="txt">{{d.title}}</a></p>

						<div class="box1">
							<span class="settop">{{d.status}}</span>
							<span class="tag">{{d.from}}</span>
							<span class="date">{{d.date}}</span>
						</div>
						
						<span class="comments">{{d.comments}}评 <a href="javascript:void(0)" v-on:click="del(index)"><img src="../../assets/webwxgetmsgimg333_03_03.jpg" class="del" /></a></span>
					</div>
				</li>
			</ul>
			<div class="pullup-wrapper">
				<div class="loading upload-loading" v-if="isPullUpLoad"><img src="../../assets/loading.gif" /></div>
			</div>
		</div>
		
		
		<div class="pulldown-wrapper" :style="{top:itop+'px'}">
			<div class="before-trigger" v-if="beforePullDown">
				<bubble :y="bubbleY"></bubble>
			</div>
			<div v-else>
				<div class="loading " v-if="isPullingDown"><img src="../../assets/loading.gif" /></div>
			</div>
		</div>

		
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	import Bubble from './bubble.vue'
	export default {
		data(){
			return {
				isPullingDown : false,
				pullDownRefresh : true,
				beforePullDown : true,
				isPullUpLoad : true,
				bubbleY: 0,
				itop : -50,
				datas : [
					{
						"title" : "习近平向埃及总统塞西致慰问电",
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_03.jpg",
						"comments" : "5.2万",
						"status" : "置顶",
						"from" : "",
						"date" : ""
					},
					{
						"title" : "直播|宁波爆炸:附近多间房屋倒塌 店铺大门被炸开",
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
						"comments" : "2.2万",
						"status" : "热",
						"from" : "央视新闻",
						"date" : "10:28"
					},
					{
						"title" : "习近平向埃及总统塞西致慰问电",
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_03.jpg",
						"comments" : "5.2万",
						"status" : "置顶",
						"from" : "",
						"date" : ""
					},
					{
						"title" : "直播|宁波爆炸:附近多间房屋倒塌 店铺大门被炸开",
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
						"comments" : "2.2万",
						"status" : "热",
						"from" : "央视新闻",
						"date" : "10:28"
					},
					{
						"title" : "习近平向埃及总统塞西致慰问电",
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_03.jpg",
						"comments" : "5.2万",
						"status" : "置顶",
						"from" : "",
						"date" : ""
					},
					{
						"title" : "直播|宁波爆炸:附近多间房屋倒塌 店铺大门被炸开",
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
						"comments" : "2.2万",
						"status" : "热",
						"from" : "央视新闻",
						"date" : "10:28"
					},
					{
						"title" : "习近平向埃及总统塞西致慰问电",
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_03.jpg",
						"comments" : "5.2万",
						"status" : "置顶",
						"from" : "",
						"date" : ""
					},
					{
						"title" : "直播|宁波爆炸:附近多间房屋倒塌 店铺大门被炸开",
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
						"comments" : "2.2万",
						"status" : "热",
						"from" : "央视新闻",
						"date" : "10:28"
					}
				]
			}
		},
		created() {
	      this.pullDownInitTop = -40;
	    },
		mounted(){
			var _this = this;
			
			setTimeout(() => {
				_this._setHeight();
				_this.bScroll = new BScroll(".list-wrapper",{
					scrollY : true,
					scrollX : false,
					pullDownRefresh : true,
					pullUpLoad : true,
			        click:true
      			});
				_this.bScroll.on("pullingDown",()=>{
					_this.beforePullDown = false;
					_this.isPullingDown = true;

					setTimeout(()=>{
						_this.bScroll.finishPullDown();
						_this.datas.unshift({
							"title" : "新的数据"+new Date().valueOf(),
							"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
							"comments" : "2.2万",
							"status" : "热",
							"from" : "央视新闻",
							"date" : "10:28"
						})

					},3500)

				});
				_this.bScroll.on("pullingUp",()=>{
					//_this.isPullUpLoad = true;
					setTimeout(()=>{
						_this.bScroll.finishPullUp();
							_this.datas.push({
							"title" : "新的数据"+new Date().valueOf(),
							"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
							"comments" : "2.2万",
							"status" : "热",
							"from" : "央视新闻",
							"date" : "10:28"
						},{
							"title" : "新的数据"+new Date().valueOf(),
							"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
							"comments" : "2.2万",
							"status" : "热",
							"from" : "央视新闻",
							"date" : "10:28"
						},{
							"title" : "新的数据"+new Date().valueOf(),
							"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
							"comments" : "2.2万",
							"status" : "热",
							"from" : "央视新闻",
							"date" : "10:28"
						},{
							"title" : "新的数据"+new Date().valueOf(),
							"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
							"comments" : "2.2万",
							"status" : "热",
							"from" : "央视新闻",
							"date" : "10:28"
						},{
							"title" : "新的数据"+new Date().valueOf(),
							"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_06.jpg",
							"comments" : "2.2万",
							"status" : "热",
							"from" : "央视新闻",
							"date" : "10:28"
						})

					},3500)
					

				});
				_this.bScroll.on("scrollEnd",(pos)=>{
					setTimeout(()=>{
						_this.beforePullDown = true
						_this.isPullingDown =false;
			            _this.itop = -50;
					},20)
						
				});
				_this.bScroll.on("scroll",(pos)=>{
			            _this.bubbleY = Math.max(0, pos.y + _this.pullDownInitTop)
			            _this.itop = Math.min(pos.y + _this.pullDownInitTop, 10)
				});

				
			},220);

		},
		methods : {
			_setHeight(){
				var listWrapper = document.querySelector("#list-wrapper"),
					clientHeight = document.documentElement.clientHeight,
					itop = listWrapper.offsetTop,
					navHeight = document.querySelector("#nav-box").offsetHeight;
				listWrapper.style.height = (clientHeight - itop - navHeight)+"px";
			},
			del(index){
				this.datas.splice(index,1)
			}
		},
		watch : {
			datas : {
				handler(curVal,oldVal){
					var _this = this;
					setTimeout(()=>{
						_this.bScroll.refresh();
					},30)
					
				}
			}
		},
		components : {
			Bubble
		}
	}
</script>

<style lang="scss" scoped>
	.pulldown-wrapper {top: -49.9815px;position: absolute;width: 100%;left: 0;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;-webkit-transition: all;transition: all;}
	.loading{ width:38%;margin:0 auto;  }
	.upload-loading{  width:6%; }
	.list-wrapper{overflow:hidden;height:480px;position:relative;}
	.tag,.date{ margin-left:5%; font-size:1.2rem;color:#545456;  }
	.del{ display:inline-block;width:18%;margin-left:1%;    vertical-align: -2px;  }
	.pullup-wrapper {width: 100%;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;}
	.list{
		li{  border-top:1px solid #2d2d2f;padding:1rem 3.90625%;display: flex; }
		.img{ width:27.8125%;  }
		.title{ 
			width:72.84375%;margin-left:4.53125%;position:relative;
			a.txt{  color:#98989a;font-size:1.6rem;  letter-spacing: .1rem;line-height: 1.3 }
			.comments{ position:absolute;right:0;bottom:0;color:#545456;     font-size: 1.2rem; }
		}
		.box1{  position:absolute;bottom:0;left:0;width:55%;  }
		.settop,.hot{ font-size:1.2rem;color:#7f342e;   }
	}

	
</style>