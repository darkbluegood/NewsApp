
import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './components/home/home.vue';
import video from './components/video/video.vue';
import live from './components/live/live.vue';
import me from './components/me/me.vue';
import imenu from './components/imenu.vue';

Vue.use(VueRouter);

var router = new VueRouter({
		routes: [
		    {
		      path: '/home',
		      name: 'home',
		      component: home
		    },
		    {
		    	path : '/video',
		    	name : 'video',
		    	component : video
		    },
		    {
		    	path : '/live',
		    	name : 'live',
		    	component : live
		    },
		    {
		    	path : '/me',
		    	name : 'me',
		    	component : me
		    },
		    {path:'*',redirect:'/home'}
	  	]
	}
);



window.onload = function(){
	new Vue({
		el : "#app",
		router,
		components : {
			imenu
		}
	});
}
