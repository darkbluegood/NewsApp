<template>
	<div class="list-wrapper" id="list-wrapper">

		<scroller :on-refresh="refresh" :on-infinite="infinite">

			<ul class="list" id="news-list">
				<li class="clearfix" v-for="(d,index) in items">
					<div class="img">
						<a href="javascript:void(0)">
							<img :src="d.pic_url" />
						</a>
					</div>
					<div class="title">
						<p class="txt">{{d.title}}</p>
		
						<div class="box1">
							<span class="settop">{{d.status}}</span>
							<span class="tag">{{d.from}}</span>
							<span class="date">{{d.date}}</span>
						</div>
						
						<span class="comments">{{d.comments}}评 <a href="javascript:void(0)" v-on:click="del(index)"><img src="../../assets/webwxgetmsgimg333_03_03.jpg" class="del" /></a></span>
					</div>
				</li>
			</ul>

	    </scroller>

		
	</div>
</template>
<script>
	
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)
  export default {
    data() {
      return {
        items: []
      }
    },
    
    mounted() {
    	for (var i = 1; i <= 20; i++) {
        this.items.push({
						"title" : "习近平向埃及总统塞西致慰问电"+i,
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_03.jpg",
						"comments" : "5.2万",
						"status" : "置顶",
						"from" : "",
						"date" : ""
					})
      }
      this.top = 1
      this.bottom = 20
    },
    methods: {
      refresh (done) {
        setTimeout(() => {
          var start = this.top - 1
          for (var i = start; i > start - 10; i--) {
            this.items.splice(0, 0, {
						"title" : "习近平向埃及总统塞西致慰问电"+i+new Date().valueOf(),
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_03.jpg",
						"comments" : "5.2万",
						"status" : "置顶",
						"from" : "",
						"date" : ""
					})
          }
          this.top = this.top - 10
          done()
        }, 1500)
      },
      infinite (done) {
        setTimeout(() => {
          var start = this.bottom + 1
          for (var i = start; i < start + 10; i++) {
            this.items.push({
						"title" : "习近平向埃及总统塞西致慰问电"+i+new Date().valueOf(),
						"pic_url" : "http://www.raowensheng.com/test/images/webwxgetmsgimg_03.jpg",
						"comments" : "5.2万",
						"status" : "置顶",
						"from" : "",
						"date" : ""
					})
          }
          this.bottom = this.bottom + 10
          done()
        }, 1500)
      },
      del(index){
			this.items.splice(index,1)
		}
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
			p.txt{  color:#98989a;font-size:1.6rem;  letter-spacing: .1rem;line-height: 1.3 }
			.comments{ position:absolute;right:0;bottom:0;color:#545456;     font-size: 1.2rem; }
		}
		.box1{  position:absolute;bottom:0;left:0;width:55%;  }
		.settop,.hot{ font-size:1.2rem;color:#7f342e;   }
	}

	
</style>