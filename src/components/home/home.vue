<template>
	<div>
		<search></search>
		<inav></inav>
		<slide></slide>
		<list></list>
	</div>
</template>
<script>
	import search from './search.vue';
	import inav from './inav.vue';
	import slide from './slide.vue';
	import list from './list.vue';

	export default {
		components : {
			search,
			inav,
			slide,
			list
		}
	}
</script>
<style scoped></style>