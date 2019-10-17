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
			 <h2>
				<p>底部区域说明</p>
				<p>底部区域说明</p>
			 </h2>
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
		height: 150px;
		width: 100%;
		background-color: #444;
	}	
		
</style>
