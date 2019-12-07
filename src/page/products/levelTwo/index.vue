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
							<img v-if='item.pic' :src='item.pic' />
						</li>
					</ul>		   
			   </div>
		   </section>
		   <section class="right">
			   <Collapse  accordion>
			           <Panel >
			              System Diagram
						  <div slot="content" class='sysimg'>
							 <img  :src='sysPicArr[0].pic'  />
						  </div>
			           </Panel>
			           <Panel >
			                 Features
							 <div slot="content">
							 		<p class='content'  v-for="item in content">*  {{item}}</p>					
							 </div>
			           </Panel>
			           <Panel >
			               Parameter
			              <div slot="content" class='sysimg'>
			              	  <img  :src='sysPicArr[1].pic'  />
			              </div>
			           </Panel>
					   <Panel >
					       Installation
					      <div slot="content" >
					      	<p>For installation details, please contact us for spec. for your ref.</p>
					      </div>
					   </Panel>
			       </Collapse>
		   </section>
	  </div>
  </div>
</template>
<script>
	import { get } from '@/axios/fetch';
    export default {
      name: 'levelTwo',
      components:{
      },
      data () {
        return {
			mainPic:'/static/image/products/levelTwo/',
			basePath:'/static/image/products/levelTwo/',
			baseJsPath:'/static/js/products/levelTwo/',
			textpath:'',
			content:[],
			smallPicArr:
			[
				{pic:''},
				{pic:''},
				{pic:''},
				{pic:''},
				{pic:''},
			],
			sysPicArr:
			[
				{pic:''},
				{pic:''},
			]
			
        }
      },
      mounted(){
		console.log('router',this.$route.query);
		this.operator();
	  
      },

      methods:{
		  getContent(){
			  get(this.textpath).then((res)=>{
				   console.log('type',typeof(res))
				   console.log('res000',res)
				  this.content = res.arr;
				  console.log('content',this.content)
			  })
		  },
		 operator(i){
			 //组图
			 this.mainPic = this.basePath + this.$route.query.name + '/' + this.$route.query.id + '/' +'1.png';
			 //参数图
			 this.sysPicArr.map((item,index)=>{
				 item.pic = this.basePath + this.$route.query.name + '/' + this.$route.query.id +'/' +'sys' + '/' + (index+1) + '.png'
			 })
			 //小图
			 this.smallPicArr.map((item,index)=>{
				 item.pic = this.basePath + this.$route.query.name + '/' + this.$route.query.id + '/' + (index+1) + '.png'
			 })
			 //内容路径
			this.textpath = this.baseJsPath + this.$route.query.name + '/' + this.$route.query.id  + '/' + 'text.json';
			this.getContent();
		 },
		 selectPic(i){
			 this.mainPic = this.smallPicArr[i].pic 
		 }

      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>
