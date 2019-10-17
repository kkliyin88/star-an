<template>
  <div class='wrap' >
    <section class='text'>
		<h3>{{title}}</h3>
		<p>{{msg1}}</p>
	</section>
	<section class='pic'>
		<ul >
			<li v-for='item in picArr1' class='pointer'>
				<div class='img-pic'>
					<img :src='item.piclink' />
				</div>
				<div class='img-text'>
				   <p>{{item.msg}}</p>
				</div>
			</li>
		</ul>
	</section>
	<section class='pic' style='margin-top: 50px;'>
		<ul >
			<li v-for='item in picArr2' class='pointer'>
				<div class='img-pic'>
					<img :src='item.piclink' />
				</div>
				<div class='img-text'>
				    <p>{{item.msg}}</p>
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
					piclink:'/static/image/Products/2-ZigBee Smart Controller.png',
					link:'',
					msg_bottom:[
						
					],
				},
				{
					piclink:'/static/image/Products/2-ZigBee Smart Controller.png',
					link:'',
					msg:'ZigBee Smart Controller'
				},
				{
					piclink:'/static/image/Products/2-ZigBee Smart Controller.png',
					link:'',
					msg:'ZigBee Smart Driver'
				},
				
			],
			picArr2:[
				{
					piclink:'/static/image/Products/2-ZigBee Smart Controller.png',
					link:'',
					msg:'ZigBee Sensor',
				},
				{
					piclink:'/static/image/Products/2-ZigBee Smart Controller.png',
					link:'',
					msg:'ZigBee Touch Switch',
				},
				{
					piclink:'/static/image/Products/2-ZigBee Smart Controller.png',
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
	.wrap{
		padding:0 8%;
		background:rgb(245,245,245);
		.text{
			padding-top: 50px;
			padding-bottom: 50px;
			
		}
		p{
			color: rgb(99,99,99);
			text-align: center;
			font-size: 14px;
			line-height: 30px;
		}
		h3{
			line-height: 40px;
			text-align: center;
		}
		.pic ul{
			
			display: flex;
			justify-content:space-around;
			flex-direction: row;
			li{
				height: 300px;
				margin: 0 20px;
				img{
				 height: 100%;
			     width: 100%;
				}
			}
		}
		
	}
	
</style>
