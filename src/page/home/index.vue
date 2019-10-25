<template>
    <div >
    
          <Header style='height: 100px;'>
            <head-top> </head-top>
          </Header>
          <section class='content'>
            <transition name="fade" mode="out-in" appear>
              <keep-alive >
                <div >
                    <router-view></router-view>
                </div>
             </keep-alive>
            </transition>
          </section>
		  <section class='foot'>
			  <br />
			<ul class='foot-ul'>
				<li class='foot-ul-li'>
				   <p v-for='item in address' style='color:#FFF;'>{{item}}</p>
				</li>
				<li class='foot-ul-li'>2</li>
				<li class='foot-ul-li'>3</li>
			</ul>
		  </section>
    </div>
</template>
<script>

  import headTop from '@/components/head/head'

    export default {
      name: 'Home',
      components:{
        headTop,

      },
      data () {
        return {
          address:[
			'@2019 Copyright Star-An Limited. All rights reserved.',
			'Office Address:',
			'B906, Nanfang Building',
			 'Luofang Rd., Luohu Distri.,',
			 'Shenzhen, China, 518000.',
			 'Tel: +86 755 82683776',
			 'Email: info@star-an.com'
		  ],
		  
        }
      },
      mounted(){

      },
      computed:{

      },
      methods:{
      }
    }
</script>
<style less='lange' scoped>
   .fade-enter,.fade-leave-to{
          opacity:  0;/*透明度*/
          transition: all 2s ease;
        }
	.foot{
		height: 180px;
		width: 100%;
		background-color: #444;
		padding: 0 10%;
	}	
	.foot-ul{
		display: flex;
	}
	.foot-ul-li{
		display: inline-block;
		width: 300px;
		/* border:1px solid green; */
		height: 180px;
		line-height: 20px;
		
	}
	.foot-ul-li p{
		font-size: 8px;
	}
</style>
