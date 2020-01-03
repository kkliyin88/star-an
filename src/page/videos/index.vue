<template>
  <div  class='wrap' >
    <ul class='ul'>
		<li v-for='item in arr'>
			<video width='200'  height="200"  :poster='item.defaultPic' :src="item.url" controls></video>
			<p>{{item.title}}</p>
		</li>
	</ul>
  </div>
</template>
<script>
	import { get } from '@/axios/fetch';
    export default {
      name: 'vedio',
      data () {
        return {
          basePath:'/static/image/video/',
		  arr:[]
        }
      },
      mounted(){
		this.getVedioMsg();
      },
      methods:{
		 getVedioMsg(){
			 let path = '/static/image/video/vedioMsg.json'
			  get(path).then((res)=>{
				  this.arr = res.arr;
			 })
		 }
      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>

