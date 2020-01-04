<template>
  <div class='wrap'>
	  <div class='container1'>
		<section class='pic'>
			<ul >
				<li v-for='item in picArr' class='pointer'>
					<router-link :to='item.routerPath'>
					<div class='img-pic' @onmouseover.native='changeImg(item)'>
						<img :src='item.piclink' />
					</div>
					</router-link>
				</li>
			</ul>
		</section>
		
	  </div>
  </div>
</template>
<script>
	import { get } from '@/axios/fetch';
    export default {
      name: 'levelOne',
      components:{

      },
      data () {
        return {
			picNum:0,
			picArr:[],
			basePath:'/static/image/products/levelOne/',
        }
      },
      mounted(){
		  
		   this.operatorData();
      },
      methods:{
		 operatorData(){
			 let path = this.basePath + this.$route.query.name+'/imageMsg.json';
			 get(path).then((res)=>{
				  this.picNum = res.picNum;
				  this.picArr = [];
				 for(let i=0;i<res.picNum;i++){
					 this.picArr.push({
					piclink:this.basePath + this.$route.query.name +'/' + (i+1)+'.png',
					routerPath:{path:'/products/levelTwo',query:{name:this.$route.query.name,id:i+1}},
					})
				 };
				console.log('picArr',this.picArr)
			 })
		 } 
      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>
