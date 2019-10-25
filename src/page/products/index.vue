<template>
  <div class='wrap' >
    <section class='text'>
		<h3>{{title}}</h3>
		<p>{{msg1}}</p>
	</section>
	<section class='pic'>
		<ul >
			<li v-for='item in picArr1' class='pointer'>
				<div class='img-pic' @onmouseover.native='changeImg(item)'>
					<img :src='item.piclink' />
				</div>
			</li>
		</ul>
	</section>
	<section class='pic' >
		<ul >
			<li v-for='item in picArr2' class='pointer'>
				<div class='img-pic' >
					<img :src='item.piclink'  />
				</div>
			</li>
		</ul>
	</section>
  </div>
</template>
<script>
    export default {
      name: 'about',
      components:{

      },
      data () {
        return {
			title:'LED Lighting Fixture',
			msg1:'Intelligent lighting control system can optimize energy efficiency and comfort. Whether driving operational cost reduction through energy efficient LED lighting technologies or implementing a smart strategy to achieve advanced LED fixture management capabilities. Our goal is to help our clients save energy, time and money by using the most advanced effective lighting solutions for the specific application',
			picArr1:[
				{   
					title_1:'About us ',
					msg_top:[
					],
					piclink:'/static/image/products/ZigBee-Gateway.png',
					link:'',
					msg_bottom:[
					],
				},
				{
					piclink:'/static/image/products/ZigBee-Smart-Controller.png',
					link:'',
					msg:'ZigBee Smart Controller'
				},
				{
					piclink:'/static/image/products/ZigBee Smart Driver.png',
					link:'',
					msg:'ZigBee Smart Driver'
				},
				
			],
			picArr2:[
				{
					piclink:'/static/image/products/ZigBee Sensor.png',
					link:'',
					msg:'ZigBee Sensor',
				},
				{
					piclink:'/static/image/products/ZigBee Touch Switch.png',
					link:'',
					msg:'ZigBee Touch Switch',
				},
				{
					piclink:'/static/image/products/ZigBee-Remote-Controller.png',
					link:'',
					msg:'ZigBee Remote Controller',
				},
			]
        }
      },
      mounted(){
      },

      methods:{
		 
      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>
