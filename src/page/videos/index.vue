<template>
  <div  class='wrap' >
    <ul class='ul'>
		<li v-for='item in arr'>
			<video width='200'  height="200"  poster :src="item.url" controls></video>
			<p>{{item.title}}</p>
		</li>
	</ul>
  </div>
</template>
<script>

    export default {
      name: 'about',
      components:{

      },
      data () {
        return {
          basePath:'/static/image/video/',
		  arr:
		  [
			  {
			   url:'/static/image/video/1.mp4',
			   title:'Individual Daylight Sensor Control Effect'
			  },
			  {
				url:'/static/image/video/2.mp4',
				title:'Individual Motion Sensor Control Effect'
			  },
			  {
				url:'/static/image/video/3.mp4',
				title:'Standalone Daylight Sensor & Wired Motion Sensor'
			  },
			  {
				url:'/static/image/video/4.mp4',
				title:'Individual & Group Motion Sensor Control Effect'
			  },
			  {
				url:'/static/image/video/5.mp4',
				title:'Group Motion Sensor Control Effect'
			  },
			  {
			   url:'/static/image/video/1.mp4',
			   title:'Individual Daylight Sensor Control Effect'
			  },
			  {
			  				url:'/static/image/video/2.mp4',
			  				title:'Individual Motion Sensor Control Effect'
			  },
			  {
			  				url:'/static/image/video/3.mp4',
			  				title:'Standalone Daylight Sensor & Wired Motion Sensor'
			  },
			  {
			  				url:'/static/image/video/4.mp4',
			  				title:'Individual & Group Motion Sensor Control Effect'
			  },
			  {
			  				url:'/static/image/video/5.mp4',
			  				title:'Group Motion Sensor Control Effect'
			  },
		  ]
        }
      },
      mounted(){
		this.operator();
      },

      methods:{
		  operator(){
			// for(let i=1;i<10;i++){
			// 	this.arr[i] = {};
			// 	this.arr[i].url = this.basePath+i+'.mp4';
			// }
			console.log('arr',this.arr)
		  }
      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>

