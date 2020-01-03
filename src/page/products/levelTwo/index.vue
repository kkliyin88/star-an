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
							 		<p class='content1'  v-for="item in content">*  {{item}}</p>					
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
			imageMsgPath:'',
			content:[],
			smallPicArrNum:0,
			smallPicArr:[],
			sysPicArr:
			[
				{pic:''},
				{pic:''},
			]
			
        }
      },
      mounted(){
		console.log(this.$route.query.name,this.$route.query.id)
		this.operator();
      },

      methods:{
		  getContent(){
			 let textpath = this.baseJsPath + this.$route.query.name + '/' + this.$route.query.id  + '/' + 'text.json';
			  get(textpath).then((res)=>{
				  this.content = res.arr;
			  })
		  },
		  getImageMsg(){
			  let path = this.basePath + this.$route.query.name + '/' + this.$route.query.id +'/' +'imageMsg.json' 
			  get(path).then((res)=>{
				  this.smallPicArrNum = res.picNum;
				  this.smallPicArr = [];
				 for(let i=0;i<res.picNum;i++){
					 this.smallPicArr.push({pic:''})
				 };
				 this.smallPicArr.map((item,index)=>{
					 item.pic = this.basePath + this.$route.query.name + '/' + this.$route.query.id + '/' + (index+1) + '.png'
				 })
			  })
		  },
		 operator(i){
			 //组图
			 this.getImageMsg()
			 this.mainPic = this.basePath + this.$route.query.name + '/' + this.$route.query.id + '/' +'1.png';
			 //参数图
			 this.sysPicArr.map((item,index)=>{
				 item.pic = this.basePath + this.$route.query.name + '/' + this.$route.query.id +'/' +'sys' + '/' + (index+1) + '.png'
			 })
			 //小图
			 
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
