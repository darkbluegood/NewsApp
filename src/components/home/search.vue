<template>
	<div class="topbar clearfix">
		<h1 class="logo"><img src="../../assets/logo.jpg" /></h1>
		<div class="search clearfix">
			<div class="inner">
				<img src="../../assets/search.jpg" class="mirror" />
				<input type="text" class="sbox" />
			</div>
		</div>
		<div class="fm">
			<img src="../../assets/fm.jpg" />
		</div>
	</div>
</template>
<script>
	
</script>

<style scoped>
	.mirror{  width:8%; margin-left: 5%; vertical-align: middle;display:inline-block; }
	.topbar{ width:100%;padding:.6rem 0px;  }
	.logo{float:left;width:27.34375%;margin-left:3.2%; padding: .1rem 0px; }
	.search{ float:left; width:52.1875%;background-color:#2d2d2f;padding:.2rem 0px; border-radius: 20px;margin-left:3%;display:table;}
	.inner{ display:table-cell;  }
	.sbox{ background:transparent;border:0 none;outline:none; color:#ababab; width: 80%;margin-left:1%;    padding: .2rem 0; }
	.fm{ float:left; width:7.5%;margin-left:2.8%; }
</style>