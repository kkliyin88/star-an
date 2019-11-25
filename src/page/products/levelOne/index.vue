<template>
  <div class='wrap'>
	  <div class='container1'>
		<section class='pic'>
			<ul >
				<li v-for='item in picArr1' class='pointer'>
					<router-link :to='item.routerPath'>
					<div class='img-pic' @onmouseover.native='changeImg(item)'>
						<img :src='item.piclink' />
					</div>
					</router-link>
				</li>
			</ul>
		</section>
		<section class='pic'>
			<ul >
				<li v-for='item in picArr2' class='pointer'>
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
    export default {
      name: 'levelOne',
      components:{

      },
      data () {
        return {
			picArr1:[
				{
					piclink:'/static/image/products/levelOne/',
					routerPath:{path:'/products/levelTwo',query:{name:'sensor',id:1}},
				},
				{
					piclink:'/static/image/products/levelOne/',
					routerPath:{path:'/products/levelTwo',query:{name:'controller',id:2}},
				},
				{
					piclink:'/static/image/products/levelOne/',
					routerPath:{path:'/products/levelTwo',query:{name:'driver',id:3}},
				},
				
			],
			picArr2:[
				{
					piclink:'/static/image/products/levelOne/',
					routerPath:{path:'/products/levelTwo',query:{name:'sensor',id:4}},
				},
				{
					piclink:'/static/image/products/levelOne/',
					routerPath:{path:'/products/levelTwo',query:{name:'controller',id:5}},
				},
				{
					piclink:'/static/image/products/levelOne/',
					routerPath:{path:'/products/levelTwo',query:{name:'driver',id:6}},
				},
				
			],
			
        }
      },
      mounted(){
		   this.operatorData(this.picArr1,1);
		   this.operatorData(this.picArr2,2)
      },
      methods:{
		 operatorData(arr,i){
			 arr.map((item,index)=>{
				 item.piclink  = item.piclink + this.$route.query.name +'/' +i+'-'+ (index+1)+'.png';
			 })
		 }
      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>
