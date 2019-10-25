<template>
  <div class='wrap' >
  
	<section class='pic'>
		<ul >
			<li v-for='item in picArr1' class='pointer'>
				<div class='img-pic' >
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
      name: 'applications',
      data () {
        return {
			title:'LED Lighting Fixture',
			msg1:'Intelligent lighting control system can optimize energy efficiency and comfort. Whether driving operational cost reduction through energy efficient LED lighting technologies or implementing a smart strategy to achieve advanced LED fixture management capabilities. Our goal is to help our clients save energy, time and money by using the most advanced effective lighting solutions for the specific application',
			picArr1:[
				{   
					title_1:'About us ',
					piclink:'/static/image/application/Commercial-500.png',
					link:'',
				},
				{
					piclink:'/static/image/application/Factory-500.png',
					link:'',
				},
				{
					piclink:'/static/image/application/Healthcare-500.png',
					link:'',
				},
				
			],
			picArr2:[
				{
					piclink:'/static/image/application/Industrial-500.png',
					link:'',
				},
				{
					piclink:'/static/image/application/Logistics-500.png',
					link:'',
				},
				{
					piclink:'/static/image/application/Public Area-500.png',
					link:'',
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
