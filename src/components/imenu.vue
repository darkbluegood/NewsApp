<template>
	<nav class="nav-box" id="nav-box">
		<div class="item">
			<a href="#/home" v-bind:class="[current == 0 ? 'current' : '']" v-on:click="setStatus(0)">
				<img src="../assets/webwxgetmsgim33g_03_03.jpg" class="img" />
				<p class="p1">新闻</p>
			</a>
		</div>
		<div class="item">
			<a href="#/video" v-bind:class="[current == 1 ? 'current' : '']" v-on:click="setStatus(1)">
				<img src="../assets/webwxgetmsgimg_05.jpg" class="img" />
				<p class="p1">视频</p>
			</a>
		</div>
		<div class="item">
			<a href="#/live" v-bind:class="[current == 2 ? 'current' : '']" v-on:click="setStatus(2)">
				<img src="../assets/webwxgetmsgimg_07.jpg" class="img" />
				<p class="p1">风直播</p>
			</a>
		</div>
		<div class="item">
			<a href="#/me" v-bind:class="[current == 3 ? 'current' : '']" v-on:click="setStatus(3)">
				<img src="../assets/webwxgetmsgimg_09.jpg" class="img" />
				<p class="p1">我</p>
			</a>
		</div>
	</nav>
</template>

<script>
	export default {
		data(){
			return {
				current : 0
			}
		},
		methods : {
			setStatus(index){
				this.current = index;
			}
		}
	}
</script>

<style scoped>
	.nav-box{ position:absolute;bottom:0;left:0;width:100%;z-index:1;background:#242426; display:flex;text-align: center;padding:.5rem 0; }
	.item{ width:25%;  }
	.img{ width:30%;display:inline-block;  } 
	.p1{ font-size:1rem;padding:.2rem 0;  }
	a{ color:#545456;    font-weight: bold;  }
	.current{ color:#b23f4e;  }
</style>