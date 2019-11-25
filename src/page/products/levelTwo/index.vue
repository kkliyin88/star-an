<template>
  <div class='wrap'>
	  <div class='container1'>
		   <section class="left">
			   <div class="main_pic">
				   <img :src='mainPic' />
			   </div>
			   <div class="small_pic">
			   		<ul>
						<li @click='selectPic(index)' v-for="(item,index) in smallPicArr">
							<img :src='item.pic' />
						</li>
					</ul>		   
			   </div>
		   </section>
		   <section class="right">22</section>
	  </div>
  </div>
</template>
<script>
    export default {
      name: 'levelTwo',
      components:{
		  

      },
      data () {
        return {
			
			mainPic:'/static/image/products/levelTwo/',
			basePath:'/static/image/products/levelTwo/',
			smallPicArr:
			[
				{pic:'/static/image/products/levelTwo/'},
				{pic:'/static/image/products/levelTwo/'},
				{pic:'/static/image/products/levelTwo/'},
				{pic:'/static/image/products/levelTwo/'},
				{pic:'/static/image/products/levelTwo/'},
			]
			
			
        }
      },
      mounted(){
		console.log('router',this.$route.query);
		this.operator(1);
      },

      methods:{
		 operator(i){
			 this.mainPic = this.mainPic + this.$route.query.name +'/' +i+'.png';
			 this.smallPicArr.map((item,index)=>{
				 item.pic = item.pic + this.$route.query.name + '/' + (index+1) + '.png'
			 })
			
		 },
		 selectPic(i){
			 console.log('i',i)
			 console.log('i',i)
			 this.mainPic = this.smallPicArr[i].pic 
		 }

      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>
